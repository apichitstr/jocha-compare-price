const STORAGE_KEYS = {
  lang: "jocha_compare_lang",
  theme: "jocha_compare_theme",
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
      unitPerItem: "หน่วยต่อชิ้น",
      productA: "สินค้า A",
      productB: "สินค้า B",
      name: "ชื่อสินค้า",
      price: "ราคา (บาท)",
      coupon: "ส่วนลดคูปอง",
      couponUnitBaht: "บาท",
      couponTypeA: "หน่วยส่วนลดคูปองสินค้า A",
      couponTypeB: "หน่วยส่วนลดคูปองสินค้า B",
      volume: "ปริมาตรต่อชิ้น",
      factor: "ความยาวเทียบปกติ (เท่า)",
      mode: "โหมดสินค้า",
      modeSingle: "ชิ้นเดียว",
      modePack: "แบบแพ็ก",
      qty: "จำนวนชิ้นในแพ็ก",
      calcBtn: "คำนวณความคุ้มค่า",
      resetBtn: "ล้างค่า",
      resultTitle: "ผลการเปรียบเทียบ",
      cpuA: "ต้นทุนต่อหน่วยของ A",
      cpuB: "ต้นทุนต่อหน่วยของ B",
      afterCoupon: "หลังหักคูปอง",
      summaryTitle: "สรุป",
      summaryIdle: "กรอกข้อมูลแล้วกดคำนวณ",
      tie: "ความคุ้มค่าเท่ากันพอดี",
      betterSuffix: "(ได้ปริมาตรต่อราคาดีกว่า)",
      better: "คุ้มค่ากว่า",
      unitFallback: "หน่วย",
      bahtPer: "บาท /",
      badInput: "กรุณากรอกข้อมูลราคา ปริมาตร และจำนวนชิ้นให้ถูกต้อง (มากกว่า 0)",
      badUnit: "หน่วยของสินค้าไม่อยู่ในระบบที่รองรับ",
      unitMismatch: "หน่วยของสินค้า 2 ชิ้นนี้เทียบกันไม่ได้โดยตรง (เช่น ของเหลวกับน้ำหนัก)",
      productPrefix: "สินค้า",
      historyTitle: "ประวัติการคำนวณ",
      historyClear: "ล้างประวัติ",
      historyEmpty: "ยังไม่มีประวัติการคำนวณ",
      historyAt: "เวลา",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
  en: {
    lang: "en-US",
    defaults: { a: "Product A", b: "Product B" },
    text: {
      title: "Jocha Compares Prices",
      eyebrow: "Value Calculator",
      subtitle: "Compare two products by price and volume to find which one gives better value and by what percent.",
      unitPerItem: "Unit per item",
      productA: "Product A",
      productB: "Product B",
      name: "Product name",
      price: "Price (THB)",
      coupon: "Coupon discount",
      couponUnitBaht: "THB",
      couponTypeA: "Coupon discount unit for product A",
      couponTypeB: "Coupon discount unit for product B",
      volume: "Volume per item",
      factor: "Length vs standard (x)",
      mode: "Product mode",
      modeSingle: "Single item",
      modePack: "Pack",
      qty: "Items in pack",
      calcBtn: "Calculate value",
      resetBtn: "Reset",
      resultTitle: "Comparison Result",
      cpuA: "Cost per unit of A",
      cpuB: "Cost per unit of B",
      afterCoupon: "after coupon",
      summaryTitle: "Summary",
      summaryIdle: "Fill in values and click calculate",
      tie: "Both products have equal value",
      betterSuffix: "(better volume per price)",
      better: "is better by",
      unitFallback: "unit",
      bahtPer: "THB /",
      badInput: "Please provide valid price, volume, and quantity values (greater than 0)",
      badUnit: "The selected unit is not supported",
      unitMismatch: "These units cannot be compared directly (for example, liquid volume vs weight)",
      productPrefix: "Product",
      historyTitle: "Calculation History",
      historyClear: "Clear history",
      historyEmpty: "No calculation history yet",
      historyAt: "Time",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
};

let currentLang = "th";
let currentTheme = "light";
let calculationHistory = [];

const ELEMENT_IDS = {
  eyebrowText: "eyebrow",
  subtitleText: "subtitle",
  productATitle: "productA",
  productBTitle: "productB",
  nameALabel: "name",
  nameBLabel: "name",
  priceALabel: "price",
  priceBLabel: "price",
  couponALabel: "coupon",
  couponBLabel: "coupon",
  couponAmountA: "couponUnitBaht",
  couponAmountB: "couponUnitBaht",
  volumeALabel: "volume",
  volumeBLabel: "volume",
  factorALabel: "factor",
  factorBLabel: "factor",
  unitALabel: "unitPerItem",
  unitBLabel: "unitPerItem",
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
  themeLight: "themeLight",
  themeDark: "themeDark",
};

const UNIT_MAP = {
  ml: { dimension: "volume", toBase: 1 },
  l: { dimension: "volume", toBase: 1000 },
  "fl oz": { dimension: "volume", toBase: 29.5735 },
  cup: { dimension: "volume", toBase: 240 },
  tbsp: { dimension: "volume", toBase: 15 },
  tsp: { dimension: "volume", toBase: 5 },
  cc: { dimension: "volume", toBase: 1 },
  g: { dimension: "weight", toBase: 1 },
  kg: { dimension: "weight", toBase: 1000 },
  oz: { dimension: "weight", toBase: 28.3495 },
  lb: { dimension: "weight", toBase: 453.592 },
  piece: { dimension: "count", toBase: 1 },
  pack: { dimension: "count", toBase: 1 },
  sheet: { dimension: "count", toBase: 1 },
  m: { dimension: "length", toBase: 100 },
  cm: { dimension: "length", toBase: 1 },
};

const BASE_UNITS = {
  volume: "ml",
  weight: "g",
  length: "cm",
  count: "piece",
};

function t(key) {
  return I18N[currentLang].text[key];
}

function loadState() {
  const storedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (storedLang && I18N[storedLang]) {
    currentLang = storedLang;
  }

  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (storedTheme === "light" || storedTheme === "dark") {
    currentTheme = storedTheme;
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

  document.getElementById("couponTypeA").setAttribute("aria-label", t("couponTypeA"));
  document.getElementById("couponTypeB").setAttribute("aria-label", t("couponTypeB"));

  const langTH = document.getElementById("langTH");
  const langEN = document.getElementById("langEN");
  langTH.classList.toggle("active", currentLang === "th");
  langEN.classList.toggle("active", currentLang === "en");

  const themeLight = document.getElementById("themeLight");
  const themeDark = document.getElementById("themeDark");
  themeLight.classList.toggle("active", currentTheme === "light");
  themeDark.classList.toggle("active", currentTheme === "dark");

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

function applyTheme() {
  document.body.classList.toggle("theme-dark", currentTheme === "dark");

  const themeLight = document.getElementById("themeLight");
  const themeDark = document.getElementById("themeDark");
  if (themeLight && themeDark) {
    themeLight.classList.toggle("active", currentTheme === "light");
    themeDark.classList.toggle("active", currentTheme === "dark");
  }
}

function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") {
    return;
  }

  currentTheme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  applyTheme();
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
  const couponRaw = document.getElementById(`coupon${prefix}`).value;
  const couponValue = couponRaw === "" ? 0 : Number(couponRaw);
  const couponType = document.getElementById(`couponType${prefix}`).value;
  const volume = parsePositiveNumber(`volume${prefix}`);
  const factorRaw = document.getElementById(`factor${prefix}`).value;
  const factor = factorRaw === "" ? 1 : Number(factorRaw);
  const qty = effectiveQty(`mode${prefix}`, `qty${prefix}`);
  const unit = document.getElementById(`unit${prefix}`).value;
  const unitMeta = UNIT_MAP[unit];
  const fallbackName = `${t("productPrefix")} ${prefix}`;
  const name = document.getElementById(`name${prefix}`).value.trim() || fallbackName;

  if (!price || !volume || !qty || !Number.isFinite(factor) || factor <= 0 || !Number.isFinite(couponValue) || couponValue < 0 || (couponType === "percent" && couponValue > 100)) {
    return { error: t("badInput") };
  }

  if (!unitMeta) {
    return { error: t("badUnit") };
  }

  const totalVolume = volume * qty * factor;
  const totalVolumeBase = totalVolume * unitMeta.toBase;
  const couponDiscount = couponType === "percent" ? price * couponValue / 100 : couponValue;
  const finalPrice = Math.max(0, price - couponDiscount);
  const costPerUnit = finalPrice / totalVolumeBase;

  return {
    name,
    price,
    couponValue,
    couponType,
    finalPrice,
    volume,
    factor,
    unit,
    unitMeta,
    qty,
    totalVolume,
    totalVolumeBase,
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

  cpuA.textContent = `${formatNumber(a.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel} (${t("afterCoupon")}: ${formatNumber(a.finalPrice)} ${t("couponUnitBaht")})`;
  cpuB.textContent = `${formatNumber(b.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel} (${t("afterCoupon")}: ${formatNumber(b.finalPrice)} ${t("couponUnitBaht")})`;

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

  if (a.error) {
    showError(`${t("productA")}: ${a.error}`);
    return;
  }

  if (b.error) {
    showError(`${t("productB")}: ${b.error}`);
    return;
  }

  if (a.unitMeta.dimension !== b.unitMeta.dimension) {
    showError(t("unitMismatch"));
    return;
  }

  const unitLabel = BASE_UNITS[a.unitMeta.dimension] || t("unitFallback");

  const result = renderResult(a, b, unitLabel);
  addHistoryEntry({
    time: new Date().toISOString(),
    summary: result.summary,
    unitInfo: `${a.name} (${a.unit}) vs ${b.name} (${b.unit}), ${unitLabel}`,
    lang: currentLang,
  });
}

function resetForm() {
  document.getElementById("nameA").value = I18N[currentLang].defaults.a;
  document.getElementById("nameB").value = I18N[currentLang].defaults.b;
  document.getElementById("priceA").value = "";
  document.getElementById("priceB").value = "";
  document.getElementById("couponA").value = "";
  document.getElementById("couponB").value = "";
  document.getElementById("couponTypeA").value = "percent";
  document.getElementById("couponTypeB").value = "percent";
  document.getElementById("volumeA").value = "";
  document.getElementById("volumeB").value = "";
  document.getElementById("factorA").value = "1.0";
  document.getElementById("factorB").value = "1.0";
  document.getElementById("unitA").value = "ml";
  document.getElementById("unitB").value = "ml";
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
  applyTheme();
  bindModeToggle("A");
  bindModeToggle("B");
  applyLanguage();
  resetForm();

  document.getElementById("calcBtn").addEventListener("click", calculate);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("clearHistoryBtn").addEventListener("click", clearHistory);
  document.getElementById("langTH").addEventListener("click", () => setLanguage("th"));
  document.getElementById("langEN").addEventListener("click", () => setLanguage("en"));
  document.getElementById("themeLight").addEventListener("click", () => setTheme("light"));
  document.getElementById("themeDark").addEventListener("click", () => setTheme("dark"));
}

init();
