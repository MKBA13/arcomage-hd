export const i18n = {
  tower: 'Лаборатория',
  wall: 'Публикации',
  resource: 'Ресурс',

  brick: 'Данные',
  bricks: 'Данные',
  gem: 'деньги',
  gems: 'деньги',
  recruit: 'человекочас',
  recruits: 'человекочасы',

  quarry: 'Оборудование', // i.e. brick production
  magic: 'Престиж', // i.e. gem production
  dungeon: 'Персонал', // i.e. recruit production

  'Your %s': ' %s', // Your quarry/tower
  "Opponent's %s": '%s противника', // Opponent's quarry/tower

  '1 brick': '1 экспериментальных данные',
  '%s bricks': '%s экспериментальных данных', // 3 bricks
  '1 gem': '1 деньга',
  '%s gems': '%s деньги', // 3 gems
  '1 recruit': '1 человекочас',
  '%s recruits': '%s человекочасов', // 3 recruits

  'This card costs %s': 'Эта карта стоит %s', // This card costs 3 bricks

  // %ss = 'brick', %sp = 'bricks'
  'Your %sp': 'Ваши %sp', // Your bricks
  "Opponent's %sp": '%sp противника', // Opponent's bricks

  '%s1. Reach %s2 to win': '%s1. Достань %s2, чтобы выиграть', // Your tower/bricks/gems/recruits. Reach 100 to win

  // %s = 'quarry', %ss = 'brick', %sp = 'bricks'
  '%s (%ss production)': '%s (%ss )', // quarry (brick production)

  discarded: 'сброшена',
  'Discard a card': 'Сбросить карту',

  'You Win!': 'Вы победили!',
  'You Lose!': 'Вы проиграли!',
  'Tie Game': 'Ничья!',

  Preferences: 'Настройки',
  ': ': ': ',
  'Your Name': 'Ваше имя',
  "Opponent's Name": 'Имя противника',

  'Choose a Tavern (Preset Preferences)': 'Выберите пресет (набор настроек)',
  'Castle in Enroth': 'лтс',
  Antagarich: 'групка один',
  Jadame: 'група два',
  Default: 'По умолчанию',
  Customized: 'Пользовательская',

  'Starting Conditions': 'Стартовые условия',
  'Victory Conditions': 'Условия победы',
  'Other Preferences': 'Другие настройки',
  'Cards in Hand': 'Карт в руке',

  'AI Level': 'Уровень ИИ',
  Genius: 'Гений',
  Smart: 'Умный',
  Mediocre: 'Посредственный',
  Stupid: 'Тупой',
  Idiotic: 'Идиотский',

  Multiplayer: 'Мультиплеер',
  off: 'off',
  on: 'on',
  'Your ID': 'Ваш ID',
  "Enter your opponent's ID": 'Введите ID оппонента',
  Connect: 'Соединение',
  'Copied 📋✅': 'Скопировано 📋✅',

  'Connecting to the network ⌛': 'Соединение с сетью ⌛',
  'Connected to the network (but not to anyone) 🟡':
    'Соединено с сетью (но ни к кому) 🟡',
  'Connecting to ID %s ⌛': 'Соединение с ID %s ⌛',
  "Connected to ID %s ✅ You're the host 🏠": 'Соединено с ID %s ✅ Вы хост 🏠',
  "Connected by ID %s ✅ You're the guest 💼":
    'Соединено с ID %s ✅ Вы гость 💼',
  'Connection failed ❌': 'Соединение не удалось ❌',
  'Disconnected 🔌': 'Соединение разорвано 🔌',
  'You are playing against computer AI': 'Вы играете против ИИ',
  'You are playing against human': 'Вы играете против человека',

  'You and your opponent are disconnected. Please go to "Preferences" and start a new game.':
    'Вы и ваш оппонент отключены. Пожалуйста, перейдите в раздел «Настройки» и начните новую игру.',

  'Multiplayer Mode is experimental and works only for users behind non-symmetric NAT':
    'Многопользовательский режим является экспериментальным и работает только для пользователей за несимметричным NAT',

  Reset: 'Сброс',
  'Apply & New Game': 'Применить и начать игру', // or "Начать игру!"
  Cancel: 'Отмена',

  Language: 'Язык',

  'Sound & Graphics': 'Звук и Графика',
  Sound: 'Звук',
  Volume: 'Громкость',
  Mute: 'Заглушить',
  'Stereo Sound': 'Стереозвук',
  Graphics: 'Графика',
  Pixelation: 'Пикселизация',
  'Visual Preset': 'Визуальный пресет',
  'Filter may slow down the game': 'Фильтр может замедлить игру',

  Normal: 'Обычный',
  Vibrant: 'Яркий',
  'Black and white': 'Чёрно-белое',
  Nostalgia: 'Ностальгия',
  Bright: 'Яркий',
  Dark: 'Темный',

  Brightness: 'Яркость',
  Contrast: 'Контраст',
  Grayscale: 'Оттенки серого',
  Sepia: 'Сепия',
  Saturate: 'Насыщать',
  Hue: 'Оттенок',
  Invert: 'Инвертировать',
  Opacity: 'Непрозрачность',

  Twist: 'Крутить',
  Grain: 'Зерно',

  Filters: 'Фильтры',

  Help: 'Помощь',
  'Toggle Full Screen': 'Полноэкранный режим',

  ERATHIAN: 'Использовать Эрафийский [%s] (только языки латинской графики)',

  'ArcoMage HD': 'Аркомаг HD', // "Аркомаг" name is well known in Russia in its RU version, since just like Gwent (known in Russia as Гвинт), it was first introduced as a minigame inside another game, so they had to translate the name

  DESC: 'Бесплатная и опенсорсная веб-версия игры Arcomage, выпущенной 3DO и New World Computing в 2000 году',

  'Please go to %s to view more information (including %s1), star the repo and follow %s2 there.':
    'Чтобы узнать больше (включая %s1), посетите %s, добавьте репозиторий в избранное и подпишитесь на %s2.',

  'the GitHub project page': 'страницу проекта на GitHub',

  'an informative tutorial image in English':
    'информативная учебная картинка на английском языке',

  'Game rules': 'Правила игры',

  GAMERULES: `Правила игры:
1.	На момент начала партии у каждого игрока есть собственная лаборатория с очками популярности(уровень) и статьи(уровень) для защиты своей лаборатории. Уровень лаборатории и статьи у обоих игроков на начало игры может быть любым, в зависимости от условий конкретной разыгрываемой партии. 
2.	В игре есть три вида ресурсов: Данные, деньги и человеко-часы, и три соответствующих источника ресурсов: Оборудование (производит данные), престиж (деньги) и персонал (человеко-часы). Начальное количество ресурсов и их источников также зависит от условий конкретной разыгрываемой партии. 
3.	В начале своего хода игрок получает ресурсы в дополнение к уже имеющимся, в зависимости от количества источников ресурсов. 1 источник производит 1 единицу ресурса за ход. 
4.	После того, как игрок получил ресурсы, он может использовать их для разыгрывания карт в руке. Всего в руке у каждого игрока по 6 карт в начале (зависит от условий конкретной разыгрываемой партии). У каждой карты есть собственная стоимость в ресурсах(тип ресурса, который требуется, определяется по цвету карты). Эти ресурсы будут израсходованы после разыгрывания карты. 
5.	Когда ход игрока завершён, начинается ход противника. В начале хода он получает ресурсы в зависимости от количества источников ресурсов, добирает карту так, чтобы в руке снова стало 6 карт, и решает, какую карту ему разыграть или сбросить. После этого ход снова передаётся первому игроку и так далее. 
6.	Подобная последовательность ходов оппонентов продолжается до тех пор, пока один из игроков не одержит победу. 
В игре три условия победы: 
1.	Увеличить уровень лаборатории до определённого уровня. 
2.	Накопить определённое количество ресурсов. 
3.	Снизить уровень лаборатории оппонента до 0. 
Конкретные значения необходимых для победы уровня лабы и количества ресурсов варьируются в зависимости от условий конкретной партии. Когда одно из победных условий выполнено, игрок, выполнивший его, сразу же становится победителем. 
`,

  'With no usable or discardable card, your opponent has surrendered':
    'Если у противника нет возможности ни сыграть, ни сбросить карту, он автоматически сдается',
  'With no usable or discardable card, you have surrendered':
    'Если у вас нет возможности ни сыграть, ни сбросить карту, вы автоматически сдаетесь',

  'Please rotate your device to landscape mode':
    'Пожалуйста, поверните устройство в альбомный режим',
}
