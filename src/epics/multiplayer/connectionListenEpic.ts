import {
  CONNECTION_LISTEN,
  ABORT_CONNECTION,
  MULTIPLAYER_STATUS,
  SET_OPPONENT_ID,
  RECEIVE_WITH_LATENCY,
  RECEIVE,
  SWITCH_MULTI_GAME_STARTED,
} from '../../constants/ActionTypes'
import { RootActionType } from '../../types/actionObj'
import { filter, concatMap, takeUntil, mergeMap } from 'rxjs/operators'
import { concat, merge, EMPTY, fromEvent, of } from 'rxjs'
import { isOfType } from 'typesafe-actions'
import { ActionsObservable, StateObservable } from 'redux-observable'
import { RootStateType } from '../../types/state'
import { peerAll } from '../../webrtc/peer'
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent'
import { receiveSeq, sendSeq } from '../../utils/seq'
import devLog from '../../utils/devLog'
import { noLatency } from '../../constants/devSettings'

export default (
  action$: ActionsObservable<RootActionType>,
  state$: StateObservable<RootStateType>,
) =>
  action$.pipe(
    filter(isOfType(CONNECTION_LISTEN)),
    mergeMap((action) => {
      const { conn } = peerAll
      const type = action.host ? 'host' : 'guest'
      if (conn === null) {
        return EMPTY
      }
      return merge(
        fromEvent<string>(
          (conn as unknown) as JQueryStyleEventEmitter,
          'data',
        ).pipe(
          concatMap((data) => {
            devLog(`${type}. received: ${data}`, 'note')
            return of<RootActionType>({
              type: !noLatency ? RECEIVE_WITH_LATENCY : RECEIVE,
              data,
            })
          }),
        ),
        fromEvent((conn as unknown) as JQueryStyleEventEmitter, 'open').pipe(
          concatMap(() => {
            if (!action.host) {
              sendSeq.reset()
              receiveSeq.reset()
              devLog(
                'guest connected by host; sendSeq & receiveSeq reset',
                'note',
              )
              // guest connected by host
              return concat(
                of<RootActionType>({
                  type: SET_OPPONENT_ID,
                  id: conn.peer,
                }),
                of<RootActionType>({
                  type: MULTIPLAYER_STATUS,
                  status: 'connected_by_id',
                }),
              )
            }
            return EMPTY
          }),
        ),
        fromEvent((conn as unknown) as JQueryStyleEventEmitter, 'close').pipe(
          concatMap(() => {
            return concat(
              of<RootActionType>({
                type: MULTIPLAYER_STATUS,
                status: 'connected_net',
              }),
              of<RootActionType>({
                type: SWITCH_MULTI_GAME_STARTED,
                on: false,
              }),
            )
          }),
        ),
        fromEvent((conn as unknown) as JQueryStyleEventEmitter, 'error').pipe(
          concatMap(() => {
            devLog('error emitted by conn', 'error')
            return EMPTY
          }),
        ),
      ).pipe(takeUntil(action$.ofType(ABORT_CONNECTION)))
    }),
  )