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
    kinds: {
      senior: "extra",
      lead: "extra",
    },
    cells: {
      senior: "Есть инициативы редактора, которые привели к финансово измеримым результатам в его продукте. Подтверждение метриками и отзывом продакта.",
      lead: "Есть инициативы редактора, которые привели к финансово измеримым результатам в его продукте. Подтверждение метриками и отзывом продакта.",
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
const statusLabel = {
  none: "Без оценки",
  yes: "Есть",
  no: "Нет",
  partial: "Так-сяк",
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

let selectedGrade = "all";
let statuses = JSON.parse(localStorage.getItem("editorMatrixStatuses") || "{}");
let openGroups = { text: true, information: true, "product-thinking": true };

const matrix = document.querySelector("#matrix");
const matrixPanel = matrix.parentElement;
const gradeButtons = document.querySelectorAll(".filter-chip");
const skillsSummaryTitle = document.querySelector("#skills-summary-title");
const skillsSummaryContent = document.querySelector("#skills-summary-content");

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
  localStorage.setItem("editorMatrixStatuses", JSON.stringify(statuses));
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

function getOrderedGrades() {
  if (selectedGrade === "all") return grades;

  const activeGrade = grades.find((grade) => grade.id === selectedGrade);
  if (!activeGrade) return grades;

  return [
    activeGrade,
    ...grades.filter((grade) => grade.id !== selectedGrade),
  ];
}

function renderMatrix() {
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
  rows.forEach((row) => {
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

    const title = makeCell("div", "skill-title", "");
    title.classList.toggle("is-last-matrix-row", row.id === lastSkillId);
    if (!row.subrow) {
      const h = makeCell("h3", "", row.title);
      title.append(h);
    }
    if (row.kind && !row.subrow) {
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
      cell.classList.toggle("is-last-matrix-row", row.id === lastSkillId);
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
    .filter((row) => !kind || getCellKind(row, gradeId) === kind)
    .filter((row) => getStatus(row.id, gradeId) === "yes")
    .length;
}

function getSkillTotals(gradeId) {
  const skillRows = rows.filter((row) => row.type !== "section");
  if (!gradeId) {
    return {
      total: skillRows.length,
      required: skillRows.filter((row) => grades.some((grade) => getCellKind(row, grade.id) === "required")).length,
      extra: skillRows.filter((row) => grades.some((grade) => getCellKind(row, grade.id) === "extra")).length,
    };
  }

  const rowsForGrade = gradeId ? skillRows.filter((row) => row.cells[gradeId]) : skillRows;
  return {
    total: skillRows.length,
    required: rowsForGrade.filter((row) => getCellKind(row, gradeId) === "required").length,
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
    };
  }

  if (greenCount >= basicMinimum) {
    return {
      text: `${basicMinimum}+ значит базовый минимум есть`,
      icon: basicMinimumIcons.complete,
      iconClass: "skills-summary__icon--basket",
    };
  }

  return {
    text: `${greenCount} из ${basicMinimum} на базовый минимум`,
    icon: basicMinimumIcons.progress,
    iconClass: "skills-summary__icon--basket",
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
  localStorage.setItem("editorMatrixStatuses", JSON.stringify(statuses));
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
    value.textContent = data.text;

    item.append(icon, value);
    list.append(item);
  });

  return list;
}

function appendGradeSkillSummary(grade, totals) {
  const gradeTotals = getSkillTotals(grade.id);
  const counts = getGreenCountsForGrade(grade.id);
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
    createSkillStatsList([
      `${counts.total} из ${totals.total} всего`,
      `${counts.required} из ${gradeTotals.required} обязательно`,
      `${counts.extra} из ${gradeTotals.extra} дополнительно`,
      getBasicMinimumStatsItem(counts.total),
    ]),
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
        `${totals.required} обязательно`,
        `${totals.extra} дополнительно`,
        getBasicMinimumStatsItem(null),
      ]));
      return;
    }

    const firstGrade = gradesWithMarkedSkills[0];
    const firstTotals = getSkillTotals(firstGrade.id);
    const firstCounts = getGreenCountsForGrade(firstGrade.id);
    setSkillSummaryTitle(`Навыки ${getGradeShortName(firstGrade)}`, firstGrade);
    skillsSummaryContent.append(createSkillStatsList([
      `${firstCounts.total} из ${totals.total} всего`,
      `${firstCounts.required} из ${firstTotals.required} обязательно`,
      `${firstCounts.extra} из ${firstTotals.extra} дополнительно`,
      getBasicMinimumStatsItem(firstCounts.total),
    ]));

    gradesWithMarkedSkills
      .slice(1)
      .forEach((grade) => appendGradeSkillSummary(grade, totals));
    return;
  }

  const selected = grades.find((grade) => grade.id === selectedGrade);
  setSkillSummaryTitle(`Навыки ${getGradeShortName(selected)}`, hasMarkedSkillsForGrade(selectedGrade) ? selected : null);
  const selectedTotals = getSkillTotals(selectedGrade);
  const selectedCounts = getGreenCountsForGrade(selectedGrade);
  skillsSummaryContent.append(createSkillStatsList([
    `${selectedCounts.total} из ${totals.total} всего`,
    `${selectedCounts.required} из ${selectedTotals.required} обязательно`,
    `${selectedCounts.extra} из ${selectedTotals.extra} дополнительно`,
    getBasicMinimumStatsItem(selectedCounts.total),
  ]));
}

skillsSummaryContent.addEventListener("click", (event) => {
  const resetButton = event.target.closest("[data-reset-grade]");
  if (!resetButton) return;
  resetGradeStatuses(resetButton.dataset.resetGrade);
  renderMatrix();
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
    renderMatrix();
  });
});

matrix.addEventListener("click", (event) => {
  const accordion = event.target.closest(".accordion-trigger");
  if (accordion) {
    openGroups[accordion.dataset.group] = !openGroups[accordion.dataset.group];
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

renderMatrix();
