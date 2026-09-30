const STORAGE_KEYS = {
  lang: "jocha_compare_lang",
  theme: "jocha_compare_theme",
  history: "jocha_compare_history",
  savedSets: "jocha_compare_saved_sets",
};

const MAX_HISTORY = 20;
const MAX_SAVED_SETS = 20;

const I18N = {
  th: {
    lang: "th-TH",
    defaults: { a: "สินค้า A", b: "สินค้า B", c: "สินค้า C" },
    text: {
      title: "Jocha Compares Prices",
      eyebrow: "Value Calculator",
      subtitleTwo: "เปรียบเทียบ 2 สินค้าด้วยราคาและปริมาณ เพื่อดูว่าชิ้นไหนคุ้มกว่า",
      subtitleThree: "เปรียบเทียบสินค้า 3 ชิ้นด้วยต้นทุนต่อหน่วย เพื่อดูอันดับความคุ้มค่า",
      compareTwo: "2 สินค้า",
      compareThree: "3 สินค้า",
      unitPerItem: "หน่วยต่อชิ้น",
      productA: "สินค้า A",
      productB: "สินค้า B",
      productC: "สินค้า C",
      name: "ชื่อสินค้า",
      price: "ราคา (บาท)",
      coupon: "ส่วนลดคูปอง",
      couponUnitBaht: "บาท",
      couponTypeA: "หน่วยส่วนลดคูปองสินค้า A",
      couponTypeB: "หน่วยส่วนลดคูปองสินค้า B",
      couponTypeC: "หน่วยส่วนลดคูปองสินค้า C",
      volume: "ปริมาตรต่อชิ้น",
      factorToggle: "กำหนดความยาวเทียบปกติ",
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
      cpuC: "ต้นทุนต่อหน่วยของ C",
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
      unitMismatch: "หน่วยของสินค้าต้องเป็นประเภทที่เทียบกันได้ (เช่น ของเหลวกับน้ำหนักเทียบกันไม่ได้)",
      rank: "อันดับ",
      productPrefix: "สินค้า",
      historyTitle: "ประวัติการคำนวณ",
      historyClear: "ล้างประวัติ",
      historyEmpty: "ยังไม่มีประวัติการคำนวณ",
      historyAt: "เวลา",
      historyRestore: "กดเพื่อเรียกค่ากลับมาแก้ไข",
      savedSetsTitle: "ชุดสินค้าที่บันทึก",
      setNamePlaceholder: "ชื่อชุดสินค้า",
      saveSet: "บันทึกชุดนี้",
      savedSetsEmpty: "ยังไม่มีชุดสินค้าที่บันทึก",
      loadSet: "เรียกใช้",
      deleteSet: "ลบ",
      defaultSetName: "ชุดสินค้า",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
  en: {
    lang: "en-US",
    defaults: { a: "Product A", b: "Product B", c: "Product C" },
    text: {
      title: "Jocha Compares Prices",
      eyebrow: "Value Calculator",
      subtitleTwo: "Compare two products by price and quantity to find which one gives better value.",
      subtitleThree: "Compare three products by cost per unit and see how they rank for value.",
      compareTwo: "2 products",
      compareThree: "3 products",
      unitPerItem: "Unit per item",
      productA: "Product A",
      productB: "Product B",
      productC: "Product C",
      name: "Product name",
      price: "Price (THB)",
      coupon: "Coupon discount",
      couponUnitBaht: "THB",
      couponTypeA: "Coupon discount unit for product A",
      couponTypeB: "Coupon discount unit for product B",
      couponTypeC: "Coupon discount unit for product C",
      volume: "Volume per item",
      factorToggle: "Set length multiplier",
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
      cpuC: "Cost per unit of C",
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
      unitMismatch: "All products must use comparable units (for example, liquid volume and weight cannot be compared directly)",
      rank: "Rank",
      productPrefix: "Product",
      historyTitle: "Calculation History",
      historyClear: "Clear history",
      historyEmpty: "No calculation history yet",
      historyAt: "Time",
      historyRestore: "Click to restore and edit these values",
      savedSetsTitle: "Saved Product Sets",
      setNamePlaceholder: "Set name",
      saveSet: "Save this set",
      savedSetsEmpty: "No saved product sets yet",
      loadSet: "Load",
      deleteSet: "Delete",
      defaultSetName: "Product set",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
};

let currentLang = "th";
let currentTheme = "light";
let comparisonMode = "two";
let calculationHistory = [];
let savedProductSets = [];

const ELEMENT_IDS = {
  eyebrowText: "eyebrow",
  compareTwoLink: "compareTwo",
  compareThreeLink: "compareThree",
  productATitle: "productA",
  productBTitle: "productB",
  productCTitle: "productC",
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
  factorToggleALabel: "factorToggle",
  factorToggleBLabel: "factorToggle",
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
  nameCLabel: "name",
  priceCLabel: "price",
  couponCLabel: "coupon",
  couponAmountC: "couponUnitBaht",
  volumeCLabel: "volume",
  factorToggleCLabel: "factorToggle",
  factorCLabel: "factor",
  unitCLabel: "unitPerItem",
  modeCLegend: "mode",
  modeCSingleLabel: "modeSingle",
  modeCPackLabel: "modePack",
  qtyCLabel: "qty",
  calcBtn: "calcBtn",
  resetBtn: "resetBtn",
  resultTitle: "resultTitle",
  cpuATitle: "cpuA",
  cpuBTitle: "cpuB",
  cpuCTitle: "cpuC",
  summaryTitle: "summaryTitle",
  historyTitle: "historyTitle",
  clearHistoryBtn: "historyClear",
  historyEmpty: "historyEmpty",
  savedSetsTitle: "savedSetsTitle",
  saveSetBtn: "saveSet",
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getProductPrefixes() {
  return comparisonMode === "three" ? ["A", "B", "C"] : ["A", "B"];
}

function setComparisonMode(mode) {
  comparisonMode = mode === "three" ? "three" : "two";
  const isThreeProductMode = comparisonMode === "three";
  document.body.classList.toggle("three-product-mode", isThreeProductMode);
  document.getElementById("cardC").hidden = !isThreeProductMode;
  document.getElementById("metricC").hidden = !isThreeProductMode;

  const compareTwo = document.getElementById("compareTwoLink");
  const compareThree = document.getElementById("compareThreeLink");
  compareTwo.classList.toggle("active", !isThreeProductMode);
  compareThree.classList.toggle("active", isThreeProductMode);
  compareTwo.setAttribute("aria-pressed", String(!isThreeProductMode));
  compareThree.setAttribute("aria-pressed", String(isThreeProductMode));
  applyLanguage();
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

  try {
    const rawSavedSets = localStorage.getItem(STORAGE_KEYS.savedSets);
    savedProductSets = rawSavedSets ? JSON.parse(rawSavedSets) : [];
    if (!Array.isArray(savedProductSets)) {
      savedProductSets = [];
    }
  } catch {
    savedProductSets = [];
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(calculationHistory));
}

function saveProductSets() {
  localStorage.setItem(STORAGE_KEYS.savedSets, JSON.stringify(savedProductSets));
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t("title");
  const prefixes = getProductPrefixes();
  document.getElementById("subtitleText").textContent = t(prefixes.includes("C") ? "subtitleThree" : "subtitleTwo");

  Object.entries(ELEMENT_IDS).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    if (id.includes("Mode") || id.includes("mode") && (id.includes("SingleLabel") || id.includes("PackLabel"))) {
      const input = el.querySelector("input");
      el.textContent = ` ${t(key)}`;
      if (input) {
        el.prepend(input);
      }
      return;
    }

    el.textContent = t(key);
  });

  prefixes.forEach((prefix) => {
    const couponType = document.getElementById(`couponType${prefix}`);
    if (couponType) {
      couponType.setAttribute("aria-label", t(`couponType${prefix}`) || `${t("coupon")} ${prefix}`);
    }
  });

  document.getElementById("compareTwoLink").classList.toggle("active", comparisonMode === "two");
  document.getElementById("compareThreeLink").classList.toggle("active", comparisonMode === "three");

  const langTH = document.getElementById("langTH");
  const langEN = document.getElementById("langEN");
  langTH.classList.toggle("active", currentLang === "th");
  langEN.classList.toggle("active", currentLang === "en");

  const themeLight = document.getElementById("themeLight");
  const themeDark = document.getElementById("themeDark");
  themeLight.classList.toggle("active", currentTheme === "light");
  themeDark.classList.toggle("active", currentTheme === "dark");

  prefixes.forEach((prefix) => {
    const nameInput = document.getElementById(`name${prefix}`);
    if (!nameInput.value.trim()) {
      nameInput.value = I18N[currentLang].defaults[prefix.toLowerCase()];
    }
  });

  renderHistory();
  document.getElementById("setNameInput").placeholder = t("setNamePlaceholder");
  renderSavedSets();
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
  const factorEnabled = document.getElementById(`factorEnabled${prefix}`).checked;
  const factorRaw = factorEnabled ? document.getElementById(`factor${prefix}`).value : "1";
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
  document.getElementById("results").classList.remove("result-ready");
  const summary = document.getElementById("summaryText");
  getProductPrefixes().forEach((prefix) => {
    document.getElementById(`cpu${prefix}`).textContent = "-";
  });
  summary.classList.remove("win", "tie", "error");
  summary.classList.add("error");
  summary.textContent = message;
}

function renderResult(products, unitLabel) {
  const summary = document.getElementById("summaryText");

  products.forEach((product, index) => {
    const prefix = ["A", "B", "C"][index];
    document.getElementById(`cpu${prefix}`).textContent = `${formatNumber(product.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel} (${t("afterCoupon")}: ${formatNumber(product.finalPrice)} ${t("couponUnitBaht")})`;
  });

  summary.classList.remove("win", "tie", "error");

  if (products.length === 3) {
    const ranked = [...products].sort((first, second) => first.costPerUnit - second.costPerUnit);
    if (ranked.every((product) => Math.abs(product.costPerUnit - ranked[0].costPerUnit) < 1e-12)) {
      summary.textContent = t("tie");
      summary.classList.add("tie");
      return { winner: null, betterPercent: 0, summary: summary.textContent };
    }

    let rank = 1;
    summary.textContent = ranked.map((product, index) => {
      if (index > 0 && Math.abs(product.costPerUnit - ranked[index - 1].costPerUnit) >= 1e-12) {
        rank = index + 1;
      }
      return `${t("rank")} ${rank}: ${product.name}`;
    }).join("\n");
    summary.classList.add("win");
    return { winner: ranked[0].name, betterPercent: null, summary: summary.textContent };
  }

  const [a, b] = products;

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

function animateResults() {
  const results = document.getElementById("results");
  results.classList.remove("result-ready");
  void results.offsetWidth;
  results.classList.add("result-ready");
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

function updateFactorVisibility(prefix) {
  const enabled = document.getElementById(`factorEnabled${prefix}`).checked;
  document.getElementById(`factorWrap${prefix}`).hidden = !enabled;
}

function bindFactorToggle(prefix) {
  document.getElementById(`factorEnabled${prefix}`).addEventListener("change", () => updateFactorVisibility(prefix));
  updateFactorVisibility(prefix);
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

  calculationHistory.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "history-item";
    if (item.products) {
      li.classList.add("history-item-restorable");
      li.dataset.historyIndex = String(index);
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("title", t("historyRestore"));
      li.setAttribute("aria-label", `${item.summary}. ${t("historyRestore")}`);
    }

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

function restoreHistoryEntry(index) {
  const entry = calculationHistory[index];
  if (!entry?.products) {
    return;
  }
  setComparisonMode(entry.comparisonMode);
  getProductPrefixes().forEach((prefix) => restoreProductForm(prefix, entry.products[prefix]));
  document.querySelector(".controls").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleHistoryRestore(event) {
  const item = event.target.closest(".history-item-restorable");
  if (!item || (event.type === "keydown" && event.key !== "Enter" && event.key !== " ")) {
    return;
  }
  event.preventDefault();
  restoreHistoryEntry(Number(item.dataset.historyIndex));
}

function captureProductForm(prefix) {
  return {
    name: document.getElementById(`name${prefix}`).value,
    price: document.getElementById(`price${prefix}`).value,
    coupon: document.getElementById(`coupon${prefix}`).value,
    couponType: document.getElementById(`couponType${prefix}`).value,
    volume: document.getElementById(`volume${prefix}`).value,
    factorEnabled: document.getElementById(`factorEnabled${prefix}`).checked,
    factor: document.getElementById(`factor${prefix}`).value,
    unit: document.getElementById(`unit${prefix}`).value,
    mode: getMode(`mode${prefix}`),
    qty: document.getElementById(`qty${prefix}`).value,
  };
}

function saveCurrentProductSet() {
  const nameInput = document.getElementById("setNameInput");
  const name = nameInput.value.trim() || `${t("defaultSetName")} ${savedProductSets.length + 1}`;
  savedProductSets.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    comparisonMode,
    products: Object.fromEntries(getProductPrefixes().map((prefix) => [prefix, captureProductForm(prefix)])),
  });
  savedProductSets = savedProductSets.slice(0, MAX_SAVED_SETS);
  saveProductSets();
  nameInput.value = "";
  renderSavedSets();
}

function restoreProductForm(prefix, product) {
  if (!product) {
    return;
  }
  document.getElementById(`name${prefix}`).value = product.name ?? "";
  document.getElementById(`price${prefix}`).value = product.price ?? "";
  document.getElementById(`coupon${prefix}`).value = product.coupon ?? "";
  document.getElementById(`couponType${prefix}`).value = product.couponType === "amount" ? "amount" : "percent";
  document.getElementById(`volume${prefix}`).value = product.volume ?? "";
  document.getElementById(`factorEnabled${prefix}`).checked = Boolean(product.factorEnabled);
  document.getElementById(`factor${prefix}`).value = product.factor || "1.0";
  document.getElementById(`unit${prefix}`).value = UNIT_MAP[product.unit] ? product.unit : "ml";
  const mode = product.mode === "pack" ? "pack" : "single";
  document.querySelector(`input[name="mode${prefix}"][value="${mode}"]`).checked = true;
  document.getElementById(`qty${prefix}`).value = product.qty || "1";
  document.getElementById(`qty${prefix}`).disabled = mode !== "pack";
  updateFactorVisibility(prefix);
}

function loadProductSet(id) {
  const savedSet = savedProductSets.find((item) => item.id === id);
  if (!savedSet) {
    return;
  }
  setComparisonMode(savedSet.comparisonMode);
  getProductPrefixes().forEach((prefix) => restoreProductForm(prefix, savedSet.products?.[prefix]));
  document.getElementById("results").classList.remove("result-ready");
  getProductPrefixes().forEach((prefix) => {
    document.getElementById(`cpu${prefix}`).textContent = "-";
  });
  const summary = document.getElementById("summaryText");
  summary.classList.remove("win", "tie", "error");
  summary.textContent = t("summaryIdle");
}

function deleteProductSet(id) {
  savedProductSets = savedProductSets.filter((item) => item.id !== id);
  saveProductSets();
  renderSavedSets();
}

function renderSavedSets() {
  const list = document.getElementById("savedSetsList");
  if (!savedProductSets.length) {
    list.innerHTML = `<p class="saved-sets-empty">${t("savedSetsEmpty")}</p>`;
    return;
  }

  list.innerHTML = savedProductSets.map((savedSet) => `
    <div class="saved-set-item">
      <div>
        <strong>${escapeHtml(savedSet.name)}</strong>
        <span>${savedSet.comparisonMode === "three" ? t("compareThree") : t("compareTwo")}</span>
      </div>
      <div class="saved-set-actions">
        <button type="button" class="saved-set-load" data-set-action="load" data-set-id="${savedSet.id}">${t("loadSet")}</button>
        <button type="button" class="saved-set-delete" data-set-action="delete" data-set-id="${savedSet.id}">${t("deleteSet")}</button>
      </div>
    </div>
  `).join("");
}

function handleSavedSetAction(event) {
  const button = event.target.closest("button[data-set-action]");
  if (!button) {
    return;
  }
  if (button.dataset.setAction === "load") {
    loadProductSet(button.dataset.setId);
  } else {
    deleteProductSet(button.dataset.setId);
  }
}

function calculate() {
  const products = getProductPrefixes().map((prefix) => ({
    prefix,
    data: getProductData(prefix),
  }));

  const invalidProduct = products.find(({ data }) => data.error);
  if (invalidProduct) {
    const productName = t(`product${invalidProduct.prefix}`);
    showError(`${productName}: ${invalidProduct.data.error}`);
    return;
  }

  const productData = products.map(({ data }) => data);
  if (productData.some((product) => product.unitMeta.dimension !== productData[0].unitMeta.dimension)) {
    showError(t("unitMismatch"));
    return;
  }

  const unitLabel = BASE_UNITS[productData[0].unitMeta.dimension] || t("unitFallback");

  const result = renderResult(productData, unitLabel);
  animateResults();
  const unitInfo = productData.map((product) => `${product.name} (${product.unit})`).join(" vs ");
  addHistoryEntry({
    time: new Date().toISOString(),
    summary: result.summary,
    unitInfo: `${unitInfo}, ${unitLabel}`,
    lang: currentLang,
    comparisonMode,
    products: Object.fromEntries(getProductPrefixes().map((prefix) => [prefix, captureProductForm(prefix)])),
  });
}

function resetForm() {
  document.getElementById("results").classList.remove("result-ready");
  getProductPrefixes().forEach((prefix) => {
    document.getElementById(`name${prefix}`).value = I18N[currentLang].defaults[prefix.toLowerCase()];
    document.getElementById(`price${prefix}`).value = "";
    document.getElementById(`coupon${prefix}`).value = "";
    document.getElementById(`couponType${prefix}`).value = "percent";
    document.getElementById(`volume${prefix}`).value = "";
    document.getElementById(`factor${prefix}`).value = "1.0";
    document.getElementById(`factorEnabled${prefix}`).checked = false;
    updateFactorVisibility(prefix);
    document.getElementById(`unit${prefix}`).value = "ml";
    document.querySelector(`input[name="mode${prefix}"][value="single"]`).checked = true;
    document.getElementById(`qty${prefix}`).value = "1";
    document.getElementById(`qty${prefix}`).disabled = true;
    document.getElementById(`cpu${prefix}`).textContent = "-";
  });

  const summary = document.getElementById("summaryText");
  summary.classList.remove("win", "tie", "error");
  summary.textContent = t("summaryIdle");
}

function init() {
  loadState();
  applyTheme();
  ["A", "B", "C"].forEach((prefix) => {
    bindModeToggle(prefix);
    bindFactorToggle(prefix);
  });
  applyLanguage();
  resetForm();

  document.getElementById("calcBtn").addEventListener("click", calculate);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("saveSetBtn").addEventListener("click", saveCurrentProductSet);
  document.getElementById("savedSetsList").addEventListener("click", handleSavedSetAction);
  document.getElementById("compareTwoLink").addEventListener("click", () => setComparisonMode("two"));
  document.getElementById("compareThreeLink").addEventListener("click", () => setComparisonMode("three"));
  document.getElementById("clearHistoryBtn").addEventListener("click", clearHistory);
  document.getElementById("historyList").addEventListener("click", handleHistoryRestore);
  document.getElementById("historyList").addEventListener("keydown", handleHistoryRestore);
  document.getElementById("langTH").addEventListener("click", () => setLanguage("th"));
  document.getElementById("langEN").addEventListener("click", () => setLanguage("en"));
  document.getElementById("themeLight").addEventListener("click", () => setTheme("light"));
  document.getElementById("themeDark").addEventListener("click", () => setTheme("dark"));
  setComparisonMode("two");
}

init();
