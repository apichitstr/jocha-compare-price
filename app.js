const STORAGE_KEYS = {
  lang: "jocha_compare_lang",
  history: "jocha_compare_history",
};

const MAX_HISTORY = 20;

const I18N = {
  th: {
    lang: "th-TH",
    defaults: { a: "สินค้า A", b: "สินค้า B" },
    text: {
      title: "Jocha Compares Prices",
      eyebrow: "Value Calculator",
      subtitle: "เปรียบเทียบ 2 สินค้าด้วยราคาและปริมาตร เพื่อดูว่าชิ้นไหนคุ้มกว่า และคุ้มกว่ากี่เปอร์เซ็นต์",
      unitLabel: "หน่วยปริมาตร (ใช้หน่วยเดียวกันทั้งสองสินค้า)",
      productA: "สินค้า A",
      productB: "สินค้า B",
      name: "ชื่อสินค้า",
      price: "ราคา (บาท)",
      volume: "ปริมาตรต่อชิ้น",
      mode: "โหมดสินค้า",
      modeSingle: "ชิ้นเดียว",
      modePack: "แบบแพ็ก",
      qty: "จำนวนชิ้นในแพ็ก",
      calcBtn: "คำนวณความคุ้มค่า",
      resetBtn: "ล้างค่า",
      resultTitle: "ผลการเปรียบเทียบ",
      cpuA: "ต้นทุนต่อหน่วยของ A",
      cpuB: "ต้นทุนต่อหน่วยของ B",
      summaryTitle: "สรุป",
      summaryIdle: "กรอกข้อมูลแล้วกดคำนวณ",
      tie: "ความคุ้มค่าเท่ากันพอดี",
      betterSuffix: "(ได้ปริมาตรต่อราคาดีกว่า)",
      better: "คุ้มค่ากว่า",
      unitFallback: "หน่วย",
      bahtPer: "บาท /",
      badInput: "กรุณากรอกข้อมูลราคา ปริมาตร และจำนวนชิ้นให้ถูกต้อง (มากกว่า 0)",
      productPrefix: "สินค้า",
      historyTitle: "ประวัติการคำนวณ",
      historyClear: "ล้างประวัติ",
      historyEmpty: "ยังไม่มีประวัติการคำนวณ",
      historyAt: "เวลา",
    },
  },
  en: {
    lang: "en-US",
    defaults: { a: "Product A", b: "Product B" },
    text: {
      title: "Jocha Compares Prices",
      eyebrow: "Value Calculator",
      subtitle: "Compare two products by price and volume to find which one gives better value and by what percent.",
      unitLabel: "Volume unit (use the same unit for both products)",
      productA: "Product A",
      productB: "Product B",
      name: "Product name",
      price: "Price (THB)",
      volume: "Volume per item",
      mode: "Product mode",
      modeSingle: "Single item",
      modePack: "Pack",
      qty: "Items in pack",
      calcBtn: "Calculate value",
      resetBtn: "Reset",
      resultTitle: "Comparison Result",
      cpuA: "Cost per unit of A",
      cpuB: "Cost per unit of B",
      summaryTitle: "Summary",
      summaryIdle: "Fill in values and click calculate",
      tie: "Both products have equal value",
      betterSuffix: "(better volume per price)",
      better: "is better by",
      unitFallback: "unit",
      bahtPer: "THB /",
      badInput: "Please provide valid price, volume, and quantity values (greater than 0)",
      productPrefix: "Product",
      historyTitle: "Calculation History",
      historyClear: "Clear history",
      historyEmpty: "No calculation history yet",
      historyAt: "Time",
    },
  },
};

let currentLang = "th";
let calculationHistory = [];

const ELEMENT_IDS = {
  eyebrowText: "eyebrow",
  subtitleText: "subtitle",
  unitLabelText: "unitLabel",
  productATitle: "productA",
  productBTitle: "productB",
  nameALabel: "name",
  nameBLabel: "name",
  priceALabel: "price",
  priceBLabel: "price",
  volumeALabel: "volume",
  volumeBLabel: "volume",
  modeALegend: "mode",
  modeBLegend: "mode",
  modeASingleLabel: "modeSingle",
  modeBSingleLabel: "modeSingle",
  modeAPackLabel: "modePack",
  modeBPackLabel: "modePack",
  qtyALabel: "qty",
  qtyBLabel: "qty",
  calcBtn: "calcBtn",
  resetBtn: "resetBtn",
  resultTitle: "resultTitle",
  cpuATitle: "cpuA",
  cpuBTitle: "cpuB",
  summaryTitle: "summaryTitle",
  historyTitle: "historyTitle",
  clearHistoryBtn: "historyClear",
  historyEmpty: "historyEmpty",
};

function t(key) {
  return I18N[currentLang].text[key];
}

function loadState() {
  const storedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (storedLang && I18N[storedLang]) {
    currentLang = storedLang;
  }

  try {
    const rawHistory = localStorage.getItem(STORAGE_KEYS.history);
    calculationHistory = rawHistory ? JSON.parse(rawHistory) : [];
  } catch {
    calculationHistory = [];
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(calculationHistory));
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t("title");

  Object.entries(ELEMENT_IDS).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    if (id === "modeASingleLabel" || id === "modeBSingleLabel" || id === "modeAPackLabel" || id === "modeBPackLabel") {
      const input = el.querySelector("input");
      el.textContent = ` ${t(key)}`;
      if (input) {
        el.prepend(input);
      }
      return;
    }

    el.textContent = t(key);
  });

  const langTH = document.getElementById("langTH");
  const langEN = document.getElementById("langEN");
  langTH.classList.toggle("active", currentLang === "th");
  langEN.classList.toggle("active", currentLang === "en");

  if (!document.getElementById("nameA").value.trim()) {
    document.getElementById("nameA").value = I18N[currentLang].defaults.a;
  }
  if (!document.getElementById("nameB").value.trim()) {
    document.getElementById("nameB").value = I18N[currentLang].defaults.b;
  }

  renderHistory();
}

function setLanguage(lang) {
  if (!I18N[lang]) {
    return;
  }
  currentLang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  applyLanguage();
}

function formatNumber(num, digits = 2) {
  return new Intl.NumberFormat(I18N[currentLang].lang, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(num);
}

function parsePositiveNumber(id) {
  const raw = document.getElementById(id).value;
  const val = Number(raw);
  return Number.isFinite(val) && val > 0 ? val : null;
}

function getMode(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "single";
}

function effectiveQty(modeName, qtyId) {
  const mode = getMode(modeName);
  if (mode === "single") {
    return 1;
  }

  const qty = Number(document.getElementById(qtyId).value);
  return Number.isFinite(qty) && qty > 0 ? Math.floor(qty) : null;
}

function getProductData(prefix) {
  const price = parsePositiveNumber(`price${prefix}`);
  const volume = parsePositiveNumber(`volume${prefix}`);
  const qty = effectiveQty(`mode${prefix}`, `qty${prefix}`);
  const fallbackName = `${t("productPrefix")} ${prefix}`;
  const name = document.getElementById(`name${prefix}`).value.trim() || fallbackName;

  if (!price || !volume || !qty) {
    return { error: t("badInput") };
  }

  const totalVolume = volume * qty;
  const costPerUnit = price / totalVolume;

  return {
    name,
    price,
    volume,
    qty,
    totalVolume,
    costPerUnit,
  };
}

function showError(message) {
  const summary = document.getElementById("summaryText");
  document.getElementById("cpuA").textContent = "-";
  document.getElementById("cpuB").textContent = "-";
  summary.classList.remove("win", "tie");
  summary.classList.add("error");
  summary.textContent = message;
}

function renderResult(a, b, unitLabel) {
  const cpuA = document.getElementById("cpuA");
  const cpuB = document.getElementById("cpuB");
  const summary = document.getElementById("summaryText");

  cpuA.textContent = `${formatNumber(a.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel}`;
  cpuB.textContent = `${formatNumber(b.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel}`;

  summary.classList.remove("win", "tie", "error");

  const diff = Math.abs(a.costPerUnit - b.costPerUnit);
  if (diff < 1e-12) {
    summary.textContent = t("tie");
    summary.classList.add("tie");
    return { winner: null, betterPercent: 0, summary: summary.textContent };
  }

  let winner;
  let loser;
  if (a.costPerUnit < b.costPerUnit) {
    winner = a;
    loser = b;
  } else {
    winner = b;
    loser = a;
  }

  const betterPercent = ((loser.costPerUnit - winner.costPerUnit) / loser.costPerUnit) * 100;

  if (currentLang === "th") {
    summary.textContent = `${winner.name} ${t("better")} ${formatNumber(betterPercent, 2)}% ${t("betterSuffix")}`;
  } else {
    summary.textContent = `${winner.name} ${t("better")} ${formatNumber(betterPercent, 2)}% ${t("betterSuffix")}`;
  }

  summary.classList.add("win");
  return { winner: winner.name, betterPercent, summary: summary.textContent };
}

function bindModeToggle(prefix) {
  const radios = document.querySelectorAll(`input[name="mode${prefix}"]`);
  const qtyInput = document.getElementById(`qty${prefix}`);

  function refresh() {
    const mode = getMode(`mode${prefix}`);
    const isPack = mode === "pack";
    qtyInput.disabled = !isPack;
    if (!isPack) {
      qtyInput.value = "1";
    }
  }

  radios.forEach((r) => r.addEventListener("change", refresh));
  refresh();
}

function addHistoryEntry(entry) {
  calculationHistory.unshift(entry);
  if (calculationHistory.length > MAX_HISTORY) {
    calculationHistory = calculationHistory.slice(0, MAX_HISTORY);
  }
  saveHistory();
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  if (!calculationHistory.length) {
    const li = document.createElement("li");
    li.className = "history-empty";
    li.id = "historyEmpty";
    li.textContent = t("historyEmpty");
    list.appendChild(li);
    return;
  }

  calculationHistory.forEach((item) => {
    const li = document.createElement("li");
    li.className = "history-item";

    const main = document.createElement("p");
    main.className = "history-main";
    main.textContent = item.summary;

    const sub = document.createElement("p");
    sub.className = "history-sub";
    const localTime = new Date(item.time).toLocaleString(I18N[currentLang].lang);
    sub.textContent = `${t("historyAt")}: ${localTime} | ${item.unitInfo}`;

    li.appendChild(main);
    li.appendChild(sub);
    list.appendChild(li);
  });
}

function clearHistory() {
  calculationHistory = [];
  saveHistory();
  renderHistory();
}

function calculate() {
  const a = getProductData("A");
  const b = getProductData("B");
  const unitLabelRaw = document.getElementById("unitLabel").value.trim();
  const unitLabel = unitLabelRaw || t("unitFallback");

  if (a.error) {
    showError(`${t("productA")}: ${a.error}`);
    return;
  }

  if (b.error) {
    showError(`${t("productB")}: ${b.error}`);
    return;
  }

  const result = renderResult(a, b, unitLabel);
  addHistoryEntry({
    time: new Date().toISOString(),
    summary: result.summary,
    unitInfo: `${a.name} vs ${b.name}, ${unitLabel}`,
    lang: currentLang,
  });
}

function resetForm() {
  document.getElementById("nameA").value = I18N[currentLang].defaults.a;
  document.getElementById("nameB").value = I18N[currentLang].defaults.b;
  document.getElementById("priceA").value = "";
  document.getElementById("priceB").value = "";
  document.getElementById("volumeA").value = "";
  document.getElementById("volumeB").value = "";
  document.getElementById("unitLabel").value = "ml";
  document.querySelector('input[name="modeA"][value="single"]').checked = true;
  document.querySelector('input[name="modeB"][value="single"]').checked = true;
  document.getElementById("qtyA").value = "1";
  document.getElementById("qtyB").value = "1";
  document.getElementById("qtyA").disabled = true;
  document.getElementById("qtyB").disabled = true;

  const summary = document.getElementById("summaryText");
  document.getElementById("cpuA").textContent = "-";
  document.getElementById("cpuB").textContent = "-";
  summary.classList.remove("win", "tie", "error");
  summary.textContent = t("summaryIdle");
}

function init() {
  loadState();
  bindModeToggle("A");
  bindModeToggle("B");
  applyLanguage();
  resetForm();

  document.getElementById("calcBtn").addEventListener("click", calculate);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("clearHistoryBtn").addEventListener("click", clearHistory);
  document.getElementById("langTH").addEventListener("click", () => setLanguage("th"));
  document.getElementById("langEN").addEventListener("click", () => setLanguage("en"));
}

init();
