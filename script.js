const grades = [
  {
    id: "junior",
    label: "Младший редактор",
    caption: "Junior editor",
    image: "assets/junior-mushroom.png?v=20260530-crop3",
  },
  {
    id: "middle",
    label: "Просто редактор",
    caption: "Middle editor",
    image: "assets/middle-mushroom.png?v=20260530-crop3",
  },
  {
    id: "senior",
    label: "Старший редактор",
    caption: "Senior editor",
    image: "assets/senior-mushroom.png?v=20260530-crop3",
  },
  {
    id: "lead",
    label: "Ведущий редактор",
    caption: "Lead editor",
    image: "assets/lead-figure.png?v=20260530-crop3",
  },
];

const rows = [
  { type: "section", id: "text", title: "Работа с текстом" },
  {
    id: "literacy",
    title: "Грамотность",
    kind: "required",
    cells: {
      junior: "Умеет справляться без корректора: в финальных макетах и на проде нет орфографических и пунктуационных ошибок.",
      middle: "Умеет справляться без корректора: в финальных макетах и на проде нет орфографических и пунктуационных ошибок.",
      senior: "Умеет принимать решения относительно языковых норм. Знает, когда лучше отбросить словарь и написать так, как люди говорят.",
      lead: "Умеет принимать решения относительно языковых норм. Знает, когда лучше отбросить словарь и написать так, как люди говорят.",
    },
  },
  {
    id: "interface-syntax",
    title: "Синтаксис интерфейса",
    kind: "required",
    cells: {
      junior: "Базовые навыки: знает, что заголовок должен быть связан с текстом и кнопкой. Не допускает недопонятности.",
      middle: "Уверенное владение: понимает разницу между чекбоксом, радиокнопкой и чипсом; может аргументировать выбор того или иного элемента. Делает интерфейсы последовательными и легкочитаемыми.",
      senior: "Разбирается в сложных случаях, когда нельзя действовать по учебнику. Нарушает правила, когда это идет на пользу продукту.",
      lead: "Владеет предметом на высоком уровне и создает образцы, которые хочется копировать.",
    },
  },
  {
    id: "syntax-style",
    title: "Синтаксическая стилистика",
    kind: "required",
    cells: {
      junior: "Пишет последовательно и понятно. Замечает очевидные повторы и длинноты, но, как правило, тексты требуют шлифовки.",
      middle: "Умеет писать гладко: предложения не перегружены и согласуются друг с другом. Знает, когда надо поставить точку и перенести часть информации в следующее предложение.",
      senior: "Пишет выразительно: умеет с помощью синтаксиса расставлять акценты в тексте, грамотно пользуется экспрессивными конструкциями (парцелляции, инверсии и всё такое прочее). Понимает важность порядка слов, актуальное членение предложения и другие сложные штуки (если не теоретически, то интуитивно).",
      lead: "Свободно владеет синтаксисом и умеет играть в разных тональностях. Узнаваемый авторский стиль.",
    },
  },
  {
    id: "lexical-style",
    title: "Лексическая стилистика",
    kind: "required",
    cells: {
      junior: "Интуитивно выбирает слова, не допускает грубых нарушений лексической сочетаемости. Избегает повторов, канцелярита и словесного мусора.",
      middle: "Осмысленно выбирает слова и чувствует, когда можно добавить легкости и разговорности, а когда лучше не выпендриваться. Видит разницу между повтором как ошибкой и как стилистическим приемом.",
      senior: "Умеет грамотно нарушать лексическую сочетаемость, использовать экспрессивную и жаргонную лексику. Владеет всякими художественными тропами.",
      lead: "Правильная, родниковая речь с авторскими приемчиками. Все слова точные, и каждое на своем месте.",
    },
  },
  {
    id: "taste",
    title: "Чувство прекрасного",
    kind: "required",
    cells: {
      junior: "Есть базовые представления о хороших текстах, но в продуктовых текстах насмотренность слабая. Учится отличать кринж от не-кринжа.",
      middle: "Хорошая насмотренность в продуктовых текстах. Может отличить хороший текст от плохого и объяснить почему.",
      senior: "Знаком с основными законами и принципами композиции: цельностью, иерархией, ритмом и далее по списку. Приводит форму в соответствие с содержанием и подчиняет всё это конструктивной идее. Понимает, как текст работает в сочетании с визуалом, даёт по-настоящему ценные советы дизайнерам.",
      lead: "Обладает широким кругозором не только в области цифровых продуктов, но и в искусстве и массовой культуре. Умеет находить неожиданные ассоциации и превращать их в идеи для своих текстов.",
    },
  },
  {
    id: "storytelling",
    title: "Сторителлинг",
    cells: {
      junior: "Последовательно рассказывает о простых вещах. Пользуется готовыми формулами, копируя решения коллег.",
      middle: "Умеет рассказывать о сложных вещах, раскладывая их по полочкам. Осмысленно управляет вниманием читателя, расставляя акценты по флоу.",
      senior: "Мастерски управляет вниманием, увлекательно рассказывает даже о скучных вещах.",
      lead: "Мастерски управляет вниманием, увлекательно рассказывает даже о скучных вещах.",
    },
  },
  {
    id: "copywriting",
    title: "Копирайтинг",
    kinds: {
      senior: "extra",
      lead: "extra",
    },
    cells: {
      junior: "Не стремится креативить, предпочитая безопасные, проверенные формулировки, так называемый safe choice. Первый приоритет - не навалить кринжа.",
      middle: "Добавляет креатив в небольших дозах: веселый заголовок, необычная кнопка, прикольчак внутри текста. Не перегибает палку и чувствует, когда художества неуместны.",
      senior: "Умеет придумывать креативные концепции и реализовывать их в больших и малых форматах: лендингах, онбордингах, флоу из большого числа экранов, неймингах и слоганах.",
      lead: "Умеет придумывать креативные концепции и реализовывать их в больших и малых форматах: лендингах, онбордингах, флоу из большого числа экранов, неймингах и слоганах.",
    },
  },
  { type: "section", id: "information", title: "Работа с информацией" },
  {
    id: "questions",
    title: "Вопросы",
    kind: "required",
    cells: {
      junior: "Задает много вопросов по каждой задаче.",
      middle: "Задает правильные вопросы и знает, кому их адресовать. Предвосхищает бóльшую часть вопросов, которые возникают у руководителя.",
      senior: "Не просто задает вопросы, а челленжит продуктовое решение. Озадачивает дизайнеров и продактов, помогая им качественнее выполнять свою работу.",
      lead: "Не просто задает вопросы, а челленжит продуктовое решение. Озадачивает дизайнеров и продактов, помогая им качественнее выполнять свою работу.",
    },
  },
  {
    id: "fact-checking",
    title: "Фактчекинг",
    kind: "required",
    cells: {
      junior: "Верит коллегам на слово.",
      middle: "Знает, что мир непрост и брифу не всегда стоит доверять. Докапывается до первоисточников, сопоставляет точки зрения коллег, стремится всё проверить лично.",
      senior: "Пользуясь накопленным опытом, умеет фактчекать без долгого рисерча",
      lead: "Знает методологию исследований и умеет вскрывать всевозможные манипуляции с данными.",
    },
  },
  {
    id: "working-with-meaning",
    title: "Работа со смыслами",
    kind: "required",
    cells: {
      junior: "Учится понимать коммуникативную задачу и отделять главное от второстепенного.",
      middle: "Понимает коммуникативную задачу и умеет расставлять акценты: о чём можно сказать в двух словах, на чём остановиться поподробнее, а о чём вообще стоит промолчать. Думает в рамках конкретной задачи.",
      senior: "Думает в рамках пользовательского флоу и работает с фоновым знанием.",
      lead: "Умеет находить неожиданные смыслы, незаметные на первый взгляд, и находит интересное даже в самых банальных историях.",
    },
  },
  { type: "section", id: "product-thinking", title: "Продуктовое мышление" },
  {
    id: "ux-ui-understanding",
    title: "Понимание UX и UI",
    kind: "required",
    cells: {
      junior: "Имеет общее представление о том, что такое UX",
      middle: "Замечает грубые ошибки в UX и UI, подсвечивает их команде",
      senior: "Может предложить более удачные решения в UX, а иногда и в UI. Понимает, когда проблему можно качественно решить текстом, а когда надо менять сценарий.",
      lead: "Всегда готов предложить рабочие решения в UX и UI. Влияет не только на сценарий, но и на логику продукта: аргументирует команде, почему и как нужно доработать механику и ценности, перед началом работы над макетами.",
    },
  },
  {
    id: "product-knowledge",
    title: "Знание продукта",
    kind: "required",
    cells: {
      junior: "Изучает флоу в продукте перед тем, как взять задачу в работу.",
      middle: "Активно пользуется продуктом в рамках своей зоны ответственности или хорошо понимает, как люди его используют.",
      senior: "— Хорошо понимает не только свою часть продукта Авито, но и взаимосвязи между разными частями. Без привлечения лида понимает, как повлиять на тексты вне его зоны ответственности.\n— Следит за запусками в других частях продукта, чтобы переиспользовать решения. Влияет на тексты, которые окажутся и в его зоне ответственности",
      lead: "— Хорошо понимает не только свою часть продукта Авито, но и взаимосвязи между разными частями. Без привлечения лида понимает, как повлиять на тексты вне его зоны ответственности.\n— Следит за запусками в других частях продукта, чтобы переиспользовать решения. Влияет на тексты, которые окажутся и в его зоне ответственности",
    },
  },
  {
    id: "audience-knowledge",
    title: "Знание аудитории",
    kind: "required",
    cells: {
      junior: "Интересуется своей аудиторией при работе над задачами.",
      middle: "Читает исследования своей аудитории, хорошо понимает её потребности и боли. Ходит на интервью с пользователями.",
      senior: "Может сам провести интервью с пользователями и запустить простое исследование. При возможности общается с пользователями вживую: на мероприятиях, встречах с клиентами.",
      lead: "Обязательно регулярно общается с клиентами лично, а не через исследователя. Применяет разные методы тестирования текстов в своей работе.",
    },
  },
  {
    id: "initiative",
    title: "Инициатива",
    kind: "required",
    cells: {
      junior: "Чаще наблюдает. Если видит возможность для улучшений, обсуждает с руководителем.",
      middle: "Проявляет инициативу в рамках своих продуктовых команд. Предлагает продуктовые улучшения и доводит их до прода через продакта.",
      senior: "Драйвит инициативы в масштабе функции, юнита или кластера. Воплощает их в коннекте с юнит-лидом или главредом.",
      lead: "Драйвит инициативы в масштабе функции, юнита или кластера. Воплощает их в коннекте с юнит-лидом или главредом.",
    },
  },
  {
    id: "references",
    title: "Работа с референсами",
    cells: {
      junior: "С помощью руководителя ищет решения прямых конкурентов при работе над задачами.",
      middle: "Анализ решений прямых конкурентов встроен в базовый рабочий флоу.",
      senior: "Анализирует решения непрямых конкурентов, в том числе зарубежные сервисы.",
      lead: "Обладает большой начитанностью и насмотренностью. Вдохновляется референсами не только из IT, но и из литературы, музыки, кино, истории.",
    },
  },
  {
    id: "goals-contribution",
    title: "Вклад в выполнение целей",
    cells: {
      junior: "Понимает цель конкретной задачи.",
      middle: "Знает цели своих команд, кластера и вертикали.",
      senior: "Может объяснить, как его работа повлияла на метрики.",
      lead: "Показывает системный вклад в цели направления: может показать, на какую годовую цель повлияла его работа и как именно.",
    },
  },
  {
    id: "financial-impact",
    title: "Вклад в выполнение целей",
    subrow: true,
    countAsSkill: false,
    kinds: {
      senior: "extra",
      lead: "extra",
    },
    cells: {
      senior: "Есть инициативы редактора, которые привели к финансово измеримым результатам в его продукте. Подтверждение метриками и отзывом продакта.",
      lead: "Есть инициативы редактора, которые привели к финансово измеримым результатам в его продукте. Подтверждение метриками и отзывом продакта.",
    },
  },
  { type: "section", id: "communication", title: "Коммуникация" },
  {
    id: "interaction",
    title: "Взаимодействие",
    kind: "required",
    cells: {
      junior: "Продакты, дизайнеры, исследователи его команд.",
      middle: "Продакты, дизайнеры, исследователи его команд.",
      senior: "Продакты, дизайнеры, исследователи его команд, руководитель юнита. ",
      lead: "Продакты, дизайнеры, исследователи его команд, руководители юнитов и кластера. ",
    },
  },
  {
    id: "argumentation",
    title: "Аргументация",
    kind: "required",
    cells: {
      junior: "Учится находить убедительные аргументы для своего решения, часто привлекает наставника.",
      middle: "Учится находить убедительные аргументы для своего решения, часто привлекает наставника.",
      senior: "Аргументирует решения самостоятельно на языке бизнеса. В большинстве случаев самостоятельно доводит качественные решения до прода, редко привлекает руководителя.",
      lead: "Имеет налаженные отношения со стейкхолдерами, поэтому предвосхищает их комментарии. в сложных ситуациях разбирается без привлечения руководителя.",
    },
  },
  {
    id: "negotiation",
    title: "Переговоры",
    kind: "required",
    cells: {
      junior: "В случае разногласий спрашивает своего наставника, как поступить.",
      middle: "— Внутри своей команды проводит переговоры сам.\n— Если обсуждение решений выходит вовне, привлекает руководителя для принятия решений.\n— Понимает, в каком формате надо вести переговоры: чат или созвон",
      senior: "— В большинстве ситуаций сам понимает, когда стоит отстоять своё решение, а когда лучше отступить. Иногда может советоваться с руководителем.\n— Понимает, какой канал (чат или встреча) и состав участников лучше всего подойдёт для решения конфликта.\n— Чувствует, когда надо эскалировать ситуацию, и делает это. ",
      lead: "Во всех ситуациях разбирается сам. Информирует своего руководителя.",
    },
  },
  {
    id: "constructive-communication",
    title: "Конструктивная коммуникация",
    kind: "required",
    cells: {
      junior: "Только набирается опыта",
      middle: "Учится конструктивно общаться с коллегами, даже если не согласен с ними. Даёт обратную связь корректно и конструктивно.",
      senior: "Сохраняет конструктивный и профессиональный тон, даже если не согласен с коллегами. Умеет в любых сложных ситуациях спокойно предложить вариант решения.",
      lead: "Заряжает других конструктивным отношением к работе. Не допускает токсичных комментариев.",
    },
  },
  {
    id: "influence",
    title: "Влияние",
    kinds: {
      senior: "extra",
      lead: "extra",
    },
    cells: {
      junior: "Изучает, как работает продуктовая команда.",
      middle: "Чаще работает как исполнитель, учится предлагать идеи, которые команда возьмёт в работу.",
      senior: "Участвует в обсуждениях продуктовых решений, к нему часто прислушивается команда. Идеи редактора доходят до прода.",
      lead: "Участвует в продуктовых брейнштормах и стратсессиях, есть понятный импакт в планы продукта. Регулярно общается с юнит лидами в своей зоне ответственности.",
    },
  },
  {
    id: "work-presentation",
    title: "Презентация работы",
    cells: {
      junior: "Может рассказать своему руководителю и коллегам, как пришёл к конкретному решению.",
      middle: "При желании может рассказывать о своих проектах на общих встречах.",
      senior: "Не реже 1 раза в год выступает на общих встречах со своими проектами.",
      lead: "Регулярно рассказывает о своих рабочих проектах (не реже 1 раза в полгода).",
    },
  },
  {
    id: "adjacent-writing-functions",
    title: "Смежные пишущие функции",
    cells: {
      junior: "Не требуется.",
      middle: "Интересуется тем, что пишут копирайтеры и редакторы поддержки в его зоне ответственности.",
      senior: "Стремится влиять на качество текстов копирайтеров и редакторов поддержки в его зоне ответственности, налаживает отношения. Если видит критичные ошибки, предпринимает максимум усилий, чтобы их исправить.",
      lead: "Драйвит инициативы для повышения качества текстов других пишущих функций. Стремится не допускать появления критично плохих текстов в его зоне ответственности.",
    },
  },
  { type: "section", id: "processes", title: "Процессы" },
  {
    id: "discovery-work",
    title: "Дискавери-работа",
    kind: "required",
    cells: {
      junior: "Фокусируется на тексте и знакомится с дискавери-процессами в команде",
      middle: "Думает не только о тексте, но и о дизайне, стремится включаться в проработку гипотез",
      senior: "Интегрирован в дискавери: работает по крайней мере над частью задач наравне с дизайнером",
      lead: "Играет в дискавери значимую роль, может лидировать работу над фичами.",
    },
  },
  {
    id: "prioritization-planning",
    title: "Приоритизация и планирование",
    kind: "required",
    cells: {
      junior: "Участвует в планированиях и обращается за помощью с приоритизацией задач к руководителю",
      middle: "Сам планируется и расставляет приоритеты. В сложных случаях советуется с руководителем.",
      senior: "Сам выбирает не только приоритеты, но и формат вовлечения: где подключаться с нуля, где достаточно проверить запятые.",
      lead: "Помогает команде расставлять приоритеты в смежных задачах и заранее видит риски по срокам и загрузке.",
    },
  },
  {
    id: "expectation-management",
    title: "Управление ожиданиями",
    kind: "required",
    cells: {
      junior: "До начала работы согласует с заказчиком сроки и формат результата. Фиксирует, о чём договорились (минутки, комментарии). Сдаёт большинство задач в срок, при перегрузе зовёт руководителя.",
      middle: "Работает не в формате окна, а на результат: знает, что важнее всего — решить задачу и сохранить рабочие отношения с продактом.",
      senior: "Заранее подсвечивает риски и предлагает варианты, если договорённости нужно пересмотреть. Не ждёт аврала, чтобы об этом сказать.",
      lead: "Управляет ожиданиями нескольких стейкхолдеров одновременно. Помогает команде не терять темп в сложных и неопределённых задачах, даже когда сам в них не основной исполнитель.",
    },
  },
  {
    id: "testing",
    title: "Тестирование",
    kind: "required",
    cells: {
      junior: "Проверяет свои фичи на проде, когда появляется необходимость.",
      middle: "Регулярно тестирует и на проде, и на стейдже — до того, как ошибки увидят пользователи.",
      senior: "Создаёт тестовые учётки под нужные сценарии. Замечает не только текстовые недочёты, но и системные проблемы в сценарии.",
      lead: "Влияет на то, чтобы системные проблемы в сценариях исправлялись — через работу с дискавери- и деливери-командами, а не точечно.",
    },
  },
  {
    id: "manager-process",
    title: "Процесс с руководителем",
    kind: "required",
    cells: {
      junior: "Фиксирует все задачи и результаты в Джире, рассказывает о статусах на встречах и в чате. Показывает руководителю все тексты перед отдачей заказчику.",
      middle: "Показывает руководителю почти все тексты, кроме мелких доработок.",
      senior: "Показывает руководителю крупные итерации, доработки и мелкие состояния — на своё усмотрение. На встречах рассказывает не столько про задачи, сколько про ситуацию в продуктах.",
      lead: "Обсуждает тексты с руководителем на уровне ценностей, логики сценариев и бизнес-результатов. Детали — на своё усмотрение.",
    },
  },
  { type: "section", id: "personal-development", title: "Личное развитие" },
  {
    id: "learning-texts",
    title: "Обучение новому в текстах",
    cells: {
      junior: "Если позволяет загрузка, читает книги по специальности, проходит курсы или посещает конференции.",
      middle: "Регулярно занимается самообразованием, стремится сделать его системным.",
      senior: "Не только учится, но и следит за тем, что происходит с нашей профессией в России. Приносит наблюдения в команду.",
      lead: "Ориентируется в международной практике UX-писательства и адаптирует её под Авито: переносит подходы, форматы, метрики.",
    },
  },
  {
    id: "learning-adjacent-fields",
    title: "Обучение новому в смежных областях (ти-шейпинг)",
    cells: {
      junior: "Может учиться дизайну, UX-исследованиям или продакт-менеджменту, если есть время и интерес.",
      middle: "Учится одной-двум смежным дисциплинам целенаправленно — под свои задачи и продукты.",
      senior: "Помимо смежных дисциплин, следит за своим бизнес-направлением в России (монетизация, недвижимость, услуги и т. д.).",
      lead: "Знает международную практику в своём бизнес-направлении и использует её как источник идей и для калибровки решений команды.",
    },
  },
  {
    id: "neural-networks",
    title: "Нейросети",
    cells: {
      junior: "Знакомится с возможностями нейросетей",
      middle: "Знает, как и для чего можно использовать нейросети в работе",
      senior: "Регулярно использует нейросети в работе",
      lead: "Инициирует применение нейросетей для улучшения процессов в команде или редакции и понимает возможные ограничения",
    },
  },
  {
    id: "avito-structure",
    title: "Устройство Авито",
    cells: {
      junior: "Осваивается в своей команде: знакомится с людьми, ролями и процессами. Имеет самое общее представление об устройстве Авито и продолжает в нём разбираться.",
      middle: "Знает, как устроена его команда и какое место она занимает в Авито: в целом понимает её цели, знает смежников и ключевые процессы.",
      senior: "Знает, как связаны команды и функции за пределами своей зоны ответственности. Находит нужных людей и процессы без помощи руководителя.",
      lead: "Использует знание устройства Авито как рычаг для команды или редакции: подключает нужных людей под задачу, обходит организационные блокеры, эскалирует.",
    },
  },
  { type: "section", id: "editorial-development", title: "Развитие редакции" },
  {
    id: "hiring",
    title: "Найм",
    cells: {
      junior: "Не участвует в найме",
      middle: "Может помогать руководителю отсматривать тестовые",
      senior: "По просьбе руководителя помогает скринить резюме, отсматривать тестовые и проводить собеседования",
      lead: "По просьбе руководителя помогает скринить резюме, отсматривать тестовые и проводить собеседования",
    },
  },
  {
    id: "knowledge-sharing",
    title: "Шеринг знаний",
    cells: {
      junior: "Делится опытом и знаниями, если попросит руководитель или появится желание: на синках, командных встречах, в чатах",
      middle: "Делится опытом от случая к случаю — по мере того, как накапливается, что рассказывать.",
      senior: "Регулярно выступает на встречах редакции, команды или другого подразделения. Умеет упаковать опыт в презентацию, статью или гайд.",
      lead: "Учит редакторов применять знания на практике — через мастер-классы, кейсы и т. п. Опыт упаковывает в материалы, которыми реально пользуются.",
    },
  },
  {
    id: "mentoring",
    title: "Наставничество",
    cells: {
      junior: "Осваивается сам, работает с наставником",
      middle: "Может помогать освоиться новым членам команды",
      senior: "Помогает освоиться новым членам команды. Может менторить младшего или мидл-редактора, а также людей из других функций",
      lead: "Системно помогает освоиться новым членам команды, умеет менторить и развивать людей через обратную связь",
    },
  },
  {
    id: "guides-development",
    title: "Развитие гайдов",
    kinds: { senior: "extra", lead: "extra" },
    cells: {
      junior: "Пользуется существующими гайдами и договорённостями команды. Фиксирует наблюдения, если замечает неясности или пробелы.",
      middle: "Может оформить удачное решение в шаблон, гайд или правило",
      senior: "Регулярно улучшает гайды, шаблоны и рабочие практики команды. Помогает делать решения переиспользуемыми.",
      lead: "Формирует и развивает стандарты работы редакторов на уровне нескольких команд, юнита или редакции. Следит за тем, чтобы эти стандарты действительно применялись.",
    },
  },
];

const statusOrder = ["none", "yes", "no", "partial"];
const basicMinimum = 28;
const basicMinimumIcons = {
  empty: "assets/1.png?v=20260530-crop",
  progress: "assets/2.png?v=20260530-crop",
  complete: "assets/3.png?v=20260530-crop",
};
const skillStatsTooltips = {
  required: "Этими навыками должны владеть все редакторы Авито без исключения. Если есть проблемы с такими навыками, обсуди это с руководителем — надо срочно это исправлять.",
  extra: "Каждый старший и ведущий редактор должен владеть хотя бы одним из этих навыков.",
  basicMinimum: "Если хотя бы столько ячеек зелёные — всё отлично.",
};
const statusLabel = {
  none: "Без оценки",
  yes: "Есть",
  no: "Нет",
  partial: "Так-сяк",
};
const matrixStateVersion = 1;
const matrixHashParam = "matrix";
const matrixDraftsStorageKey = "editorMatrixDrafts";
const activeDraftStorageKey = "editorMatrixActiveDraftId";
const legacyStatusesStorageKey = "editorMatrixStatuses";
const statusToLinkCode = {
  yes: 1,
  no: 2,
  partial: 3,
};
const linkCodeToStatus = {
  1: "yes",
  2: "no",
  3: "partial",
};

function typographText(value) {
  if (!value || !value.trim()) return value;

  const smallWords = "а|в|во|и|к|ко|о|об|обо|от|до|за|из|на|не|ни|но|по|с|со|у|же|ли|бы|без|для|над|под|при|про";

  let result = value
    .replace(/"([^"]+)"/g, "«$1»")
    .replace(/(\d)[ \t\u00A0]*-[ \t\u00A0]*(?=\d)/g, "$1–")
    .replace(/[ \t\u00A0][-–—][ \t\u00A0]/g, "\u00A0— ")
    .replace(/(\d)[ \t\u00A0]+([%₽$€]|[а-яё]{1,5}\b)/gi, "$1\u00A0$2");

  for (let i = 0; i < 3; i += 1) {
    const smallWordPattern = new RegExp(`(^|[ \\t\\u00A0(«])(${smallWords})[ \\t\\u00A0]+`, "giu");
    const chainedSmallWordPattern = new RegExp(`\\u00A0(${smallWords})[ \\t\\u00A0]+`, "giu");
    result = result.replace(smallWordPattern, "$1$2\u00A0");
    result = result.replace(chainedSmallWordPattern, "\u00A0$1\u00A0");
  }

  return result;
}

function typographElement(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = typographText(node.nodeValue);
  });
}

function createDraftId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID().slice(0, 8);
  }

  return `m${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function getDefaultOpenGroups() {
  return rows
    .filter((row) => row.type === "section")
    .reduce((groups, row) => {
      groups[row.id] = true;
      return groups;
    }, {});
}

function readJsonStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getKnownRowIds() {
  return new Set(rows.filter((row) => row.type !== "section").map((row) => row.id));
}

function getKnownGradeIds() {
  return new Set(grades.map((grade) => grade.id));
}

function isKnownGrade(gradeId) {
  return gradeId === "all" || getKnownGradeIds().has(gradeId);
}

function cleanLinkCreatedAt(value) {
  if (!value) return "";

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function formatLinkCreatedAt(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function cleanStatuses(rawStatuses) {
  const rowIds = getKnownRowIds();
  const gradeIds = getKnownGradeIds();
  const clean = {};

  Object.entries(rawStatuses || {}).forEach(([key, status]) => {
    const [rowId, gradeId] = key.split(":");
    if (!rowIds.has(rowId) || !gradeIds.has(gradeId)) return;
    if (!statusToLinkCode[status]) return;
    clean[statusKey(rowId, gradeId)] = status;
  });

  return clean;
}

function getOpenGroupIds(openGroupMap) {
  return Object.entries(openGroupMap || {})
    .filter(([, isOpen]) => isOpen)
    .map(([groupId]) => groupId);
}

function getOpenGroupsFromIds(openGroupIds) {
  const groups = getDefaultOpenGroups();
  if (!Array.isArray(openGroupIds)) return groups;

  Object.keys(groups).forEach((groupId) => {
    groups[groupId] = openGroupIds.includes(groupId);
  });

  return groups;
}

function getMatrixState() {
  return {
    v: matrixStateVersion,
    draftId: currentDraftId,
    linkCreatedAt,
    linkDirty: isLinkDirty,
    grade: isKnownGrade(selectedGrade) ? selectedGrade : "all",
    statuses: cleanStatuses(statuses),
    openGroups: { ...openGroups },
  };
}

function applyMatrixState(state) {
  currentDraftId = state.draftId || createDraftId();
  isSnapshotMode = Boolean(state.fromSnapshot);
  linkCreatedAt = cleanLinkCreatedAt(state.linkCreatedAt);
  isLinkDirty = Boolean(state.linkDirty && linkCreatedAt);
  selectedGrade = isKnownGrade(state.grade) ? state.grade : "all";
  statuses = cleanStatuses(state.statuses);
  openGroups = {
    ...getDefaultOpenGroups(),
    ...(state.openGroups || {}),
  };
  updateLinkMeta();
}

function serializeMatrixState(state = getMatrixState()) {
  const statusEntries = Object.entries(cleanStatuses(state.statuses))
    .map(([key, status]) => {
      const [rowId, gradeId] = key.split(":");
      return [rowId, gradeId, statusToLinkCode[status]];
    })
    .sort(([rowA, gradeA], [rowB, gradeB]) => `${rowA}:${gradeA}`.localeCompare(`${rowB}:${gradeB}`));

  return {
    v: matrixStateVersion,
    d: state.draftId || createDraftId(),
    c: cleanLinkCreatedAt(state.linkCreatedAt),
    u: Boolean(state.linkDirty && state.linkCreatedAt),
    g: isKnownGrade(state.grade) ? state.grade : "all",
    s: statusEntries,
    o: getOpenGroupIds(state.openGroups),
  };
}

function deserializeMatrixState(serializedState) {
  const state = serializedState || {};
  const statusesFromLink = {};

  if (Array.isArray(state.s)) {
    const rowIds = getKnownRowIds();
    const gradeIds = getKnownGradeIds();

    state.s.forEach(([rowId, gradeId, statusCode]) => {
      const status = linkCodeToStatus[statusCode];
      if (!rowIds.has(rowId) || !gradeIds.has(gradeId) || !status) return;
      statusesFromLink[statusKey(rowId, gradeId)] = status;
    });
  }

  return {
    v: matrixStateVersion,
    draftId: typeof state.d === "string" && state.d ? state.d : createDraftId(),
    linkCreatedAt: cleanLinkCreatedAt(state.c || state.linkCreatedAt),
    linkDirty: Boolean(state.u || state.linkDirty),
    grade: isKnownGrade(state.g) ? state.g : "all",
    statuses: Array.isArray(state.s) ? statusesFromLink : cleanStatuses(state.statuses),
    openGroups: getOpenGroupsFromIds(state.o),
  };
}

function encodeBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeMatrixStateForUrl(state = getMatrixState()) {
  return encodeBase64Url(JSON.stringify(serializeMatrixState(state)));
}

function decodeMatrixStateFromUrl(value) {
  return deserializeMatrixState(JSON.parse(decodeBase64Url(value)));
}

function getHashMatrixValue() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return "";
  return new URLSearchParams(hash).get(matrixHashParam) || "";
}

function readDrafts() {
  const drafts = readJsonStorage(matrixDraftsStorageKey, {});
  return drafts && typeof drafts === "object" && !Array.isArray(drafts) ? drafts : {};
}

function saveMatrixState(state = getMatrixState()) {
  const serializedState = serializeMatrixState(state);
  const drafts = readDrafts();
  drafts[serializedState.d] = serializedState;
  writeJsonStorage(matrixDraftsStorageKey, drafts);
  localStorage.setItem(activeDraftStorageKey, serializedState.d);
  updateLinkMeta();
}

function loadMatrixState() {
  const hashValue = getHashMatrixValue();
  if (hashValue) {
    try {
      return {
        ...decodeMatrixStateFromUrl(hashValue),
        fromSnapshot: true,
      };
    } catch (error) {
      console.warn("Не удалось прочитать состояние матрицы из ссылки", error);
    }
  }

  const drafts = readDrafts();
  const activeDraftId = localStorage.getItem(activeDraftStorageKey);
  if (activeDraftId && drafts[activeDraftId]) {
    return {
      ...deserializeMatrixState(drafts[activeDraftId]),
      fromSnapshot: false,
    };
  }

  const firstDraft = Object.values(drafts)[0];
  if (firstDraft) {
    return {
      ...deserializeMatrixState(firstDraft),
      fromSnapshot: false,
    };
  }

  return {
    v: matrixStateVersion,
    fromSnapshot: false,
    draftId: createDraftId(),
    linkCreatedAt: "",
    linkDirty: false,
    grade: "all",
    statuses: cleanStatuses(readJsonStorage(legacyStatusesStorageKey, {})),
    openGroups: getDefaultOpenGroups(),
  };
}

function getMatrixSnapshotUrl(createdAt = new Date().toISOString()) {
  const url = new URL(window.location.href);
  url.hash = `${matrixHashParam}=${encodeMatrixStateForUrl({
    ...getMatrixState(),
    linkCreatedAt: createdAt,
    linkDirty: false,
  })}`;
  return url.toString();
}

function markLinkDirty() {
  if (!isSnapshotMode || !linkCreatedAt) return;
  isLinkDirty = true;
}

function updateLinkMeta() {
  if (!copyLinkMeta) return;

  if (!isSnapshotMode || !linkCreatedAt) {
    copyLinkMeta.textContent = "";
    return;
  }

  const date = formatLinkCreatedAt(linkCreatedAt);
  copyLinkMeta.textContent = isLinkDirty
    ? "Матрица изменилась — старая ссылка больше не актуальна"
    : `Матрица актуальна на ${date}`;
}

function fallbackCopyText(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "-1000px";
  field.style.left = "-1000px";
  document.body.append(field);
  field.select();

  try {
    return document.execCommand("copy");
  } finally {
    field.remove();
  }
}

async function copyText(text) {
  if (fallbackCopyText(text)) return true;

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  throw new Error("Copy command failed");
}

function setCopyLinkButtonText(text, restoreDelay = 1800) {
  if (!copyLinkButton) return;

  copyLinkButton.textContent = text;
  if (restoreDelay) {
    window.setTimeout(() => {
      copyLinkButton.textContent = "Скопировать ссылку";
      copyLinkButton.disabled = false;
    }, restoreDelay);
  }
}

let selectedGrade = "all";
let isSnapshotMode = false;
let linkCreatedAt = "";
let isLinkDirty = false;
let statuses = {};
let openGroups = getDefaultOpenGroups();
let currentDraftId = createDraftId();

const matrix = document.querySelector("#matrix");
const matrixPanel = matrix.parentElement;
const contentPanel = matrixPanel.parentElement;
const gradeButtons = document.querySelectorAll(".filter-chip");
const skillsSummaryTitle = document.querySelector("#skills-summary-title");
const skillsSummaryContent = document.querySelector("#skills-summary-content");
const downloadPdfButton = document.querySelector("#download-pdf");
const copyLinkButton = document.querySelector("#copy-link");
const copyLinkMeta = document.querySelector("#copy-link-meta");

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateMatrixLayoutVariables() {
  const panelWidth = matrixPanel.clientWidth;
  const firstColumnWidth = Math.round(clampNumber(window.innerWidth * 0.2, 240, 315));
  const gradeColumnWidth = Math.round(Math.max(320, (panelWidth - firstColumnWidth) / grades.length));
  const matrixWidth = firstColumnWidth + (gradeColumnWidth * grades.length);

  matrixPanel.style.setProperty("--first-column-width", `${firstColumnWidth}px`);
  matrixPanel.style.setProperty("--grade-column-width", `${gradeColumnWidth}px`);
  matrixPanel.style.setProperty("--matrix-render-width", `${matrixWidth}px`);
}

function statusKey(rowId, gradeId) {
  return `${rowId}:${gradeId}`;
}

function getStatus(rowId, gradeId) {
  return statuses[statusKey(rowId, gradeId)] || "none";
}

function setStatus(rowId, gradeId, status) {
  const key = statusKey(rowId, gradeId);
  if (status === "none") {
    delete statuses[key];
  } else {
    statuses[key] = status;
  }
  markLinkDirty();
  saveMatrixState();
}

function makeCell(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}

function getCellKind(row, gradeId) {
  return row.kinds?.[gradeId] || row.kind || null;
}

function getKindLabel(kind) {
  if (kind === "required") return "Обязательный навык";
  if (kind === "extra") return "Дополнительный навык";
  return "";
}

function countsAsSkill(row) {
  return row.countAsSkill !== false;
}

function getOrderedGrades() {
  if (selectedGrade === "all") return grades;

  const activeGrade = grades.find((grade) => grade.id === selectedGrade);
  if (!activeGrade) return grades;

  return [
    activeGrade,
    ...grades.filter((grade) => grade.id !== selectedGrade),
  ];
}

function restoreMatrixScroll(scrollTop, scrollLeft) {
  contentPanel.scrollTop = scrollTop;
  contentPanel.scrollLeft = scrollLeft;
}

function renderMatrix() {
  const previousScrollTop = contentPanel.scrollTop;
  const previousScrollLeft = contentPanel.scrollLeft;

  matrix.innerHTML = "";
  updateMatrixLayoutVariables();
  const visibleGrades = getOrderedGrades();
  const lastSkillId = rows.filter((item) => item.type !== "section").at(-1)?.id;
  matrixPanel.classList.toggle("is-collapsed", !Object.values(openGroups).some(Boolean));
  matrix.style.setProperty("--columns", grades.length);
  matrix.append(makeCell("div", "corner-head", "Компетенции"));

  visibleGrades.forEach((grade) => {
    const head = makeCell("div", "grade-head", "");
    head.dataset.grade = grade.id;
    if (selectedGrade !== "all" && selectedGrade !== grade.id) {
      head.classList.add("is-muted");
    }

    const img = document.createElement("img");
    img.src = grade.image;
    img.alt = "";
    head.append(img);

    const title = makeCell("div", "grade-title", "");
    title.innerHTML = `${grade.label.replace(" ", "<br>")}<small>${grade.caption}</small>`;
    head.append(title);

    matrix.append(head);
  });

  let currentGroup = null;
  rows.forEach((row, index) => {
    if (row.type === "section") {
      currentGroup = row.id;
      if (!(currentGroup in openGroups)) openGroups[currentGroup] = true;
      const trigger = makeCell("button", "accordion-trigger", row.title);
      trigger.type = "button";
      trigger.dataset.group = currentGroup;
      trigger.setAttribute("aria-expanded", String(openGroups[currentGroup]));
      matrix.append(trigger);
      return;
    }

    if (!openGroups[currentGroup]) return;
    const nextRow = rows[index + 1];
    const hasSubrow = Boolean(nextRow?.subrow && nextRow.title === row.title);

    if (row.subrow) {
      visibleGrades.forEach((grade, gradeIndex) => {
        const text = row.cells[grade.id] || "";
        if (!text) return;

        const kind = getCellKind(row, grade.id);
        const cell = makeCell("button", "skill-cell skill-cell--subrow", "");
        cell.type = "button";
        cell.dataset.row = row.id;
        cell.dataset.grade = grade.id;
        if (kind) cell.dataset.kind = kind;
        cell.dataset.status = getStatus(row.id, grade.id);
        cell.classList.toggle("is-last-matrix-row", row.id === lastSkillId);
        cell.style.gridColumn = String(gradeIndex + 2);
        cell.setAttribute("aria-label", `${row.title}, ${grade.label}: ${statusLabel[cell.dataset.status]}`);
        if (selectedGrade !== "all" && selectedGrade !== grade.id) {
          cell.classList.add("is-muted");
          cell.tabIndex = -1;
        }

        const body = makeCell("span", "cell-body", "");
        if (kind && kind !== row.kind) {
          body.append(makeCell("span", `tag tag--${kind} cell-tag`, getKindLabel(kind)));
        }
        body.append(document.createTextNode(text));
        cell.append(body);
        matrix.append(cell);
      });
      return;
    }

    const title = makeCell("div", "skill-title", "");
    title.classList.toggle("is-last-matrix-row", row.id === lastSkillId || (hasSubrow && nextRow?.id === lastSkillId));
    if (hasSubrow) {
      title.classList.add("is-merged-subrow");
    }
    const h = makeCell("h3", "", row.title);
    title.append(h);
    if (row.kind) {
      const tag = makeCell("div", `tag tag--${row.kind}`, getKindLabel(row.kind));
      title.append(tag);
    }
    matrix.append(title);

    visibleGrades.forEach((grade) => {
      const text = row.cells[grade.id] || "";
      const kind = getCellKind(row, grade.id);
      const cell = makeCell("button", "skill-cell", "");
      cell.type = "button";
      cell.dataset.row = row.id;
      cell.dataset.grade = grade.id;
      if (kind) cell.dataset.kind = kind;
      cell.dataset.status = getStatus(row.id, grade.id);
      const shouldMergeCell = hasSubrow && !nextRow.cells[grade.id];
      cell.classList.toggle("is-last-matrix-row", row.id === lastSkillId || (shouldMergeCell && nextRow.id === lastSkillId));
      if (shouldMergeCell) {
        cell.classList.add("is-merged-subrow");
      }
      cell.setAttribute("aria-label", `${row.title}, ${grade.label}: ${statusLabel[cell.dataset.status]}`);
      if (selectedGrade !== "all" && selectedGrade !== grade.id) {
        cell.classList.add("is-muted");
        cell.tabIndex = -1;
      }

      if (!text) {
        cell.disabled = true;
      } else {
        const body = makeCell("span", "cell-body", "");
        if (kind && kind !== row.kind) {
          body.append(makeCell("span", `tag tag--${kind} cell-tag`, getKindLabel(kind)));
        }
        body.append(document.createTextNode(text));
        cell.append(body);
      }

      matrix.append(cell);
    });
  });

  updateGradeControls();
  updateSidebarSkillStats();
  typographElement(document.body);
  restoreMatrixScroll(previousScrollTop, previousScrollLeft);
  requestAnimationFrame(() => restoreMatrixScroll(previousScrollTop, previousScrollLeft));
}

function updateGradeControls() {
  gradeButtons.forEach((button) => {
    const isActive = button.dataset.gradeFilter === selectedGrade;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function countGreenSkillsForGrade(gradeId, kind) {
  return rows
    .filter((row) => row.type !== "section")
    .filter((row) => row.cells[gradeId])
    .filter((row) => kind || countsAsSkill(row))
    .filter((row) => !kind || getCellKind(row, gradeId) === kind)
    .filter((row) => getStatus(row.id, gradeId) === "yes")
    .length;
}

function getSkillTotals(gradeId) {
  const skillRows = rows.filter((row) => row.type !== "section");
  const countedSkillRows = skillRows.filter(countsAsSkill);
  if (!gradeId) {
    return {
      total: countedSkillRows.length,
      required: countedSkillRows.filter((row) => grades.some((grade) => getCellKind(row, grade.id) === "required")).length,
      extra: skillRows.filter((row) => grades.some((grade) => getCellKind(row, grade.id) === "extra")).length,
    };
  }

  const rowsForGrade = gradeId ? skillRows.filter((row) => row.cells[gradeId]) : skillRows;
  const countedRowsForGrade = rowsForGrade.filter(countsAsSkill);
  return {
    total: countedSkillRows.length,
    required: countedRowsForGrade.filter((row) => getCellKind(row, gradeId) === "required").length,
    extra: rowsForGrade.filter((row) => getCellKind(row, gradeId) === "extra").length,
  };
}

function getGreenCountsForGrade(gradeId) {
  return {
    total: countGreenSkillsForGrade(gradeId),
    required: countGreenSkillsForGrade(gradeId, "required"),
    extra: countGreenSkillsForGrade(gradeId, "extra"),
  };
}

function getBasicMinimumStatsItem(greenCount) {
  if (greenCount === null) {
    return {
      text: `${basicMinimum} базовый минимум`,
      icon: basicMinimumIcons.empty,
      iconClass: "skills-summary__icon--basket",
      tooltip: skillStatsTooltips.basicMinimum,
    };
  }

  if (greenCount >= basicMinimum) {
    return {
      text: `${basicMinimum}+ базовый минимум собран`,
      icon: basicMinimumIcons.complete,
      iconClass: "skills-summary__icon--basket",
      tooltip: skillStatsTooltips.basicMinimum,
    };
  }

  return {
    text: `${greenCount} из ${basicMinimum} на базовый минимум`,
    icon: basicMinimumIcons.progress,
    iconClass: "skills-summary__icon--basket",
    tooltip: skillStatsTooltips.basicMinimum,
  };
}

function getRequiredStatsItem(text) {
  return {
    text,
    tooltip: skillStatsTooltips.required,
  };
}

function getExtraStatsItem(text) {
  return {
    text,
    tooltip: skillStatsTooltips.extra,
  };
}

function hasMarkedSkillsForGrade(gradeId) {
  return rows
    .filter((row) => row.type !== "section")
    .some((row) => getStatus(row.id, gradeId) !== "none");
}

function resetGradeStatuses(gradeId) {
  Object.keys(statuses)
    .filter((key) => key.endsWith(`:${gradeId}`))
    .forEach((key) => {
      delete statuses[key];
    });
  markLinkDirty();
  saveMatrixState();
}

function getGradeShortName(grade) {
  return grade.caption.split(" ")[0];
}

function createResetGradeButton(grade) {
  const button = document.createElement("button");
  button.className = "skills-summary__reset";
  button.type = "button";
  button.dataset.resetGrade = grade.id;
  button.title = "Сбросить";
  button.setAttribute("aria-label", `Сбросить оценки грейда ${getGradeShortName(grade)}`);
  return button;
}

function setSkillSummaryTitle(text, grade) {
  skillsSummaryTitle.innerHTML = "";
  skillsSummaryTitle.classList.toggle("has-reset", Boolean(grade));
  skillsSummaryTitle.append(document.createTextNode(text));
  if (grade) {
    skillsSummaryTitle.append(createResetGradeButton(grade));
  }
}

function createSkillStatsList(items) {
  const list = document.createElement("ul");
  list.className = "skills-summary__list";

  items.forEach((itemData) => {
    const data = typeof itemData === "string" ? { text: itemData } : itemData;
    const item = document.createElement("li");
    const icon = document.createElement("img");
    icon.className = "skills-summary__icon";
    if (data.iconClass) icon.classList.add(data.iconClass);
    icon.src = data.icon || "assets/skill-counter-mushroom.png?v=20260530";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    const value = document.createElement("span");
    value.className = "skills-summary__value";
    value.textContent = data.text;

    item.append(icon, value);
    if (data.tooltip) {
      const help = document.createElement("span");
      help.className = "skills-summary__help-wrap";

      const button = document.createElement("button");
      button.className = "skills-summary__help";
      button.type = "button";
      button.setAttribute("aria-label", data.tooltip);
      button.textContent = "?";

      const tooltip = document.createElement("span");
      tooltip.className = "skills-summary__tooltip";
      tooltip.textContent = data.tooltip;

      help.append(button, tooltip);
      item.append(help);
    }
    list.append(item);
  });

  return list;
}

function closeSkillTooltips(except = null) {
  document.querySelectorAll(".skills-summary__help-wrap.is-open").forEach((wrap) => {
    if (wrap !== except) wrap.classList.remove("is-open");
  });
}

function openSkillTooltip(button) {
  const wrap = button.closest(".skills-summary__help-wrap");
  if (!wrap) return;

  closeSkillTooltips(wrap);
  wrap.classList.add("is-open");
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

function waitForImages(root) {
  const images = [...root.querySelectorAll("img")];
  return Promise.all(images.map((image) => {
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();

    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }));
}

async function waitForExportAssets(root) {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
  await waitForImages(root);
  await waitForNextFrame();
}

function getPdfFileName() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `skills-matrix-${day}-${month}-${year}.pdf`;
}

function getMatrixActualDateText(date = new Date()) {
  return `Матрица актуальна на ${formatLinkCreatedAt(date.toISOString())}`;
}

function getPdfLibraries() {
  return {
    html2canvas: window.html2canvas,
    jsPDF: window.jspdf?.jsPDF,
  };
}

function savePageCanvasesAsPdf(canvases) {
  const { jsPDF } = getPdfLibraries();
  const firstCanvas = canvases[0];
  const pdf = new jsPDF({
    orientation: firstCanvas.width > firstCanvas.height ? "landscape" : "portrait",
    unit: "px",
    format: [firstCanvas.width, firstCanvas.height],
  });

  canvases.forEach((canvas, index) => {
    if (index > 0) {
      pdf.addPage([canvas.width, canvas.height], canvas.width > canvas.height ? "landscape" : "portrait");
    }
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.96), "JPEG", 0, 0, canvas.width, canvas.height);
  });

  pdf.save(getPdfFileName());
}

function createExportRoot() {
  const sourceRoot = document.querySelector(".app-layout");
  const previousOpenGroups = { ...openGroups };
  const previousScrollTop = contentPanel.scrollTop;
  const previousScrollLeft = contentPanel.scrollLeft;

  Object.keys(openGroups).forEach((groupId) => {
    openGroups[groupId] = true;
  });
  renderMatrix();

  const exportRoot = sourceRoot.cloneNode(true);
  exportRoot.classList.add("export-capture-root");
  const exportDate = document.createElement("p");
  exportDate.className = "skills-summary__export-date";
  exportDate.textContent = typographText(getMatrixActualDateText());
  exportRoot.querySelector(".skills-summary")?.append(exportDate);

  openGroups = previousOpenGroups;
  renderMatrix();
  restoreMatrixScroll(previousScrollTop, previousScrollLeft);
  requestAnimationFrame(() => restoreMatrixScroll(previousScrollTop, previousScrollLeft));

  return exportRoot;
}

function keepOnlyExportGroup(exportRoot, groupId) {
  const exportMatrix = exportRoot.querySelector("#matrix");
  const headerCellsCount = grades.length + 1;
  const children = [...exportMatrix.children];
  let currentGroupId = null;

  children.forEach((child, index) => {
    if (index < headerCellsCount) return;

    if (child.classList.contains("accordion-trigger")) {
      currentGroupId = child.dataset.group;
      if (currentGroupId !== groupId) child.remove();
      return;
    }

    if (currentGroupId !== groupId) child.remove();
  });
}

function mountExportRoot(exportRoot) {
  const host = document.createElement("div");
  host.className = "export-capture-host";
  host.append(exportRoot);
  document.body.append(host);
  return host;
}

async function captureExportRoot(exportRoot) {
  const { html2canvas } = getPdfLibraries();
  const exportHost = mountExportRoot(exportRoot);

  try {
    await waitForExportAssets(exportRoot);
    const width = exportRoot.scrollWidth;
    const height = exportRoot.scrollHeight;
    return await html2canvas(exportRoot, {
      backgroundColor: "#ffffff",
      scale: Math.min(2, window.devicePixelRatio || 1),
      width,
      height,
      windowWidth: width,
      windowHeight: height,
      scrollX: 0,
      scrollY: 0,
      useCORS: true,
      ignoreElements: (element) => element.classList?.contains("no-export"),
    });
  } finally {
    exportHost.remove();
  }
}

async function exportMatrixToPdf() {
  const { html2canvas, jsPDF } = getPdfLibraries();
  if (!html2canvas || !jsPDF) {
    throw new Error("PDF libraries are not loaded");
  }

  closeSkillTooltips();
  const fullExportRoot = createExportRoot();
  const sectionIds = rows
    .filter((row) => row.type === "section")
    .map((row) => row.id);
  const pageCanvases = [];

  for (const sectionId of sectionIds) {
    const pageExportRoot = fullExportRoot.cloneNode(true);
    keepOnlyExportGroup(pageExportRoot, sectionId);
    pageCanvases.push(await captureExportRoot(pageExportRoot));
  }

  savePageCanvasesAsPdf(pageCanvases);
}

function setPdfButtonLoading(isLoading) {
  if (!downloadPdfButton) return;
  downloadPdfButton.disabled = isLoading;
  downloadPdfButton.classList.toggle("is-loading", isLoading);
  downloadPdfButton.textContent = isLoading ? "Готовим PDF..." : "Скачать матрицу как PDF";
}

function getGradeSkillStatsItems(grade, totals) {
  const gradeTotals = getSkillTotals(grade.id);
  const counts = getGreenCountsForGrade(grade.id);
  const items = [
    `${counts.total} из ${totals.total} всего`,
    getRequiredStatsItem(`${counts.required} из ${gradeTotals.required} обязательно`),
  ];

  if (gradeTotals.extra > 0) {
    items.push(getExtraStatsItem(`${counts.extra} из ${gradeTotals.extra} дополнительно`));
  }

  items.push(getBasicMinimumStatsItem(counts.total));
  return items;
}

function appendGradeSkillSummary(grade, totals) {
  const section = document.createElement("section");
  section.className = "skills-summary__section";

  const title = document.createElement("h3");
  title.className = "skills-summary__title";
  title.append(
    document.createTextNode(`Навыки ${getGradeShortName(grade)}`),
    createResetGradeButton(grade),
  );

  section.append(
    title,
    createSkillStatsList(getGradeSkillStatsItems(grade, totals)),
  );

  skillsSummaryContent.append(section);
}

function updateSidebarSkillStats() {
  const totals = getSkillTotals();
  skillsSummaryContent.innerHTML = "";

  if (selectedGrade === "all") {
    const gradesWithMarkedSkills = grades.filter((grade) => hasMarkedSkillsForGrade(grade.id));

    if (gradesWithMarkedSkills.length === 0) {
      setSkillSummaryTitle("Навыки");
      skillsSummaryContent.append(createSkillStatsList([
        `${totals.total} всего`,
        getRequiredStatsItem(`${totals.required} обязательно`),
        getExtraStatsItem(`${totals.extra} дополнительно`),
        getBasicMinimumStatsItem(null),
      ]));
      return;
    }

    const firstGrade = gradesWithMarkedSkills[0];
    setSkillSummaryTitle(`Навыки ${getGradeShortName(firstGrade)}`, firstGrade);
    skillsSummaryContent.append(createSkillStatsList(getGradeSkillStatsItems(firstGrade, totals)));

    gradesWithMarkedSkills
      .slice(1)
      .forEach((grade) => appendGradeSkillSummary(grade, totals));
    return;
  }

  const selected = grades.find((grade) => grade.id === selectedGrade);
  setSkillSummaryTitle(`Навыки ${getGradeShortName(selected)}`, hasMarkedSkillsForGrade(selectedGrade) ? selected : null);
  skillsSummaryContent.append(createSkillStatsList(getGradeSkillStatsItems(selected, totals)));

  grades
    .filter((grade) => grade.id !== selectedGrade)
    .filter((grade) => hasMarkedSkillsForGrade(grade.id))
    .forEach((grade) => appendGradeSkillSummary(grade, totals));
}

skillsSummaryContent.addEventListener("click", (event) => {
  const helpButton = event.target.closest(".skills-summary__help");
  if (helpButton) {
    openSkillTooltip(helpButton);
    return;
  }

  const resetButton = event.target.closest("[data-reset-grade]");
  if (!resetButton) return;
  resetGradeStatuses(resetButton.dataset.resetGrade);
  renderMatrix();
});

skillsSummaryContent.addEventListener("pointerover", (event) => {
  const helpButton = event.target.closest(".skills-summary__help");
  if (!helpButton) return;
  openSkillTooltip(helpButton);
});

skillsSummaryContent.addEventListener("pointerout", (event) => {
  const helpWrap = event.target.closest(".skills-summary__help-wrap");
  if (!helpWrap || helpWrap.contains(event.relatedTarget)) return;
  helpWrap.classList.remove("is-open");
});

skillsSummaryContent.addEventListener("focusin", (event) => {
  const helpButton = event.target.closest(".skills-summary__help");
  if (!helpButton) return;
  openSkillTooltip(helpButton);
});

skillsSummaryContent.addEventListener("focusout", (event) => {
  const helpWrap = event.target.closest(".skills-summary__help-wrap");
  if (!helpWrap || helpWrap.contains(event.relatedTarget)) return;
  helpWrap.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".skills-summary__help-wrap")) return;
  closeSkillTooltips();
});

skillsSummaryTitle.addEventListener("click", (event) => {
  const resetButton = event.target.closest("[data-reset-grade]");
  if (!resetButton) return;
  resetGradeStatuses(resetButton.dataset.resetGrade);
  renderMatrix();
});

gradeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedGrade = button.dataset.gradeFilter;
    markLinkDirty();
    saveMatrixState();
    renderMatrix();
  });
});

if (copyLinkButton) {
  copyLinkButton.addEventListener("click", async () => {
    copyLinkButton.disabled = true;
    const snapshotCreatedAt = new Date().toISOString();
    const snapshotUrl = getMatrixSnapshotUrl(snapshotCreatedAt);

    try {
      await copyText(snapshotUrl);
      if (isSnapshotMode) {
        linkCreatedAt = snapshotCreatedAt;
        isLinkDirty = false;
        saveMatrixState();
      } else {
        updateLinkMeta();
      }
      setCopyLinkButtonText("✓ Ссылка скопирована");
    } catch (error) {
      console.error(error);
      setCopyLinkButtonText("Не удалось скопировать", 2200);
    }
  });
}

if (downloadPdfButton) {
  downloadPdfButton.addEventListener("click", async () => {
    setPdfButtonLoading(true);

    try {
      await exportMatrixToPdf();
    } catch (error) {
      console.error(error);
      downloadPdfButton.textContent = "Не удалось скачать PDF";
      window.setTimeout(() => setPdfButtonLoading(false), 2200);
      return;
    }

    setPdfButtonLoading(false);
  });
}

matrix.addEventListener("click", (event) => {
  const accordion = event.target.closest(".accordion-trigger");
  if (accordion) {
    openGroups[accordion.dataset.group] = !openGroups[accordion.dataset.group];
    markLinkDirty();
    saveMatrixState();
    renderMatrix();
    return;
  }

  const cell = event.target.closest(".skill-cell");
  if (!cell || cell.disabled) return;
  if (selectedGrade !== "all" && selectedGrade !== cell.dataset.grade) return;

  const current = getStatus(cell.dataset.row, cell.dataset.grade);
  const next = statusOrder[(statusOrder.indexOf(current) + 1) % statusOrder.length];
  setStatus(cell.dataset.row, cell.dataset.grade, next);
  renderMatrix();
});

window.addEventListener("resize", updateMatrixLayoutVariables);

window.addEventListener("hashchange", () => {
  if (!getHashMatrixValue()) return;

  applyMatrixState(loadMatrixState());
  saveMatrixState();
  renderMatrix();
});

applyMatrixState(loadMatrixState());
saveMatrixState();
renderMatrix();
