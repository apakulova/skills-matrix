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
  { type: "section", title: "Работа с текстом" },
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
      senior: "Пишет выразительно: умеет с помощью синтаксиса расставлять акценты в тексте, грамотно пользуется экспрессивными конструкциями. Понимает важность порядка слов и актуальное членение предложения.",
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
      senior: "Знаком с основными законами и принципами композиции: цельностью, иерархией, ритмом и далее по списку. Понимает, как текст работает в сочетании с визуалом.",
      lead: "Обладает широким кругозором не только в области цифровых продуктов, но и в искусстве и массовой культуре. Умеет находить неожиданные ассоциации и превращать их в идеи.",
    },
  },
  {
    id: "storytelling",
    title: "Сторителлинг",
    kind: "extra",
    cells: {
      junior: "Последовательно рассказывает о простых вещах. Пользуется готовыми формулами, копируя решения коллег.",
      middle: "Умеет рассказывать о сложных вещах, раскладывая их по полочкам. Осмысленно управляет вниманием читателя, расставляя акценты по флоу.",
      senior: "Мастерски управляет вниманием, увлекательно рассказывает даже о скучных вещах.",
      lead: "",
    },
  },
  {
    id: "copywriting",
    title: "Копирайтинг",
    kind: "extra",
    cells: {
      junior: "Не стремится креативить, предпочитая безопасные, проверенные формулировки, так называемый safe choice. Первый приоритет - не навалить кринжа.",
      middle: "Добавляет креатив в небольших дозах: веселый заголовок, необычная кнопка, прикольчак внутри текста. Не перегибает палку и чувствует, когда художества неуместны.",
      senior: "Умеет придумывать креативные концепции и реализовывать их в больших и малых форматах: лендингах, онбордингах, флоу из большого числа экранов, неймингах и слоганах.",
      lead: "Умеет придумывать креативные концепции и реализовывать их в больших и малых форматах: лендингах, онбордингах, флоу из большого числа экранов, неймингах и слоганах.",
    },
  },
];

const statusOrder = ["none", "yes", "no", "partial"];
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
    .replace(/(\d)\s*-\s*(?=\d)/g, "$1–")
    .replace(/\s[-–—]\s/g, "\u00A0— ")
    .replace(/(\d)\s+([%₽$€]|[а-яё]{1,5}\b)/gi, "$1\u00A0$2");

  for (let i = 0; i < 3; i += 1) {
    const smallWordPattern = new RegExp(`(^|[\\s\\u00A0(«])(${smallWords})\\s+`, "giu");
    const chainedSmallWordPattern = new RegExp(`\\u00A0(${smallWords})\\s+`, "giu");
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
let openGroups = { text: true };

const matrix = document.querySelector("#matrix");
const gradeButtons = document.querySelectorAll(".filter-chip");
const skillsSummaryTitle = document.querySelector("#skills-summary-title");
const skillsSummaryContent = document.querySelector("#skills-summary-content");

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateMatrixLayoutVariables() {
  const panelWidth = matrix.parentElement.clientWidth;
  const firstColumnWidth = Math.round(clampNumber(window.innerWidth * 0.2, 240, 315));
  const gradeColumnWidth = Math.round(Math.max(320, (panelWidth - firstColumnWidth) / grades.length));
  const matrixWidth = firstColumnWidth + (gradeColumnWidth * grades.length);

  matrix.parentElement.style.setProperty("--first-column-width", `${firstColumnWidth}px`);
  matrix.parentElement.style.setProperty("--grade-column-width", `${gradeColumnWidth}px`);
  matrix.parentElement.style.setProperty("--matrix-render-width", `${matrixWidth}px`);
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
  matrix.parentElement.classList.toggle("is-collapsed", !openGroups.text);
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

  rows.forEach((row) => {
    if (row.type === "section") {
      const trigger = makeCell("button", "accordion-trigger", row.title);
      trigger.type = "button";
      trigger.dataset.group = "text";
      trigger.setAttribute("aria-expanded", String(openGroups.text));
      matrix.append(trigger);
      return;
    }

    if (!openGroups.text) return;

    const title = makeCell("div", "skill-title", "");
    title.classList.toggle("is-last-matrix-row", row.id === lastSkillId);
    const h = makeCell("h3", "", row.title);
    const tag = makeCell("div", `tag tag--${row.kind}`, row.kind === "required" ? "Обязательный навык" : "Дополнительный навык");
    title.append(h, tag);
    matrix.append(title);

    visibleGrades.forEach((grade) => {
      const text = row.cells[grade.id] || "";
      const cell = makeCell("button", "skill-cell", "");
      cell.type = "button";
      cell.dataset.row = row.id;
      cell.dataset.grade = grade.id;
      cell.dataset.kind = row.kind;
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
    .filter((row) => !kind || row.kind === kind)
    .filter((row) => row.cells[gradeId])
    .filter((row) => getStatus(row.id, gradeId) === "yes")
    .length;
}

function getSkillTotals() {
  const skillRows = rows.filter((row) => row.type !== "section");
  return {
    total: skillRows.length,
    required: skillRows.filter((row) => row.kind === "required").length,
    extra: skillRows.filter((row) => row.kind === "extra").length,
  };
}

function getGreenCountsForGrade(gradeId) {
  return {
    total: countGreenSkillsForGrade(gradeId),
    required: countGreenSkillsForGrade(gradeId, "required"),
    extra: countGreenSkillsForGrade(gradeId, "extra"),
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

  items.forEach((text) => {
    const item = document.createElement("li");
    const icon = document.createElement("img");
    icon.className = "skills-summary__icon";
    icon.src = "assets/skill-counter-mushroom.png?v=20260530";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    const value = document.createElement("span");
    value.textContent = text;

    item.append(icon, value);
    list.append(item);
  });

  return list;
}

function appendGradeSkillSummary(grade, totals) {
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
      `${counts.required} из ${totals.required} обязательно`,
      `${counts.extra} из ${totals.extra} дополнительно`,
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
      ]));
      return;
    }

    const firstGrade = gradesWithMarkedSkills[0];
    const firstCounts = getGreenCountsForGrade(firstGrade.id);
    setSkillSummaryTitle(`Навыки ${getGradeShortName(firstGrade)}`, firstGrade);
    skillsSummaryContent.append(createSkillStatsList([
      `${firstCounts.total} из ${totals.total} всего`,
      `${firstCounts.required} из ${totals.required} обязательно`,
      `${firstCounts.extra} из ${totals.extra} дополнительно`,
    ]));

    gradesWithMarkedSkills
      .slice(1)
      .forEach((grade) => appendGradeSkillSummary(grade, totals));
    return;
  }

  const selected = grades.find((grade) => grade.id === selectedGrade);
  setSkillSummaryTitle(`Навыки ${getGradeShortName(selected)}`, hasMarkedSkillsForGrade(selectedGrade) ? selected : null);
  skillsSummaryContent.append(createSkillStatsList([
    `${getGreenCountsForGrade(selectedGrade).total} из ${totals.total} всего`,
    `${getGreenCountsForGrade(selectedGrade).required} из ${totals.required} обязательно`,
    `${getGreenCountsForGrade(selectedGrade).extra} из ${totals.extra} дополнительно`,
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
