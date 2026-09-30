const STORAGE_KEYS = {
  lang: "jocha_compare_lang",
  theme: "jocha_compare_theme",
  mobileColumns: "jocha_compare_mobile_columns",
  history: "jocha_compare_history",
  savedSets: "jocha_compare_saved_sets",
  exchangeRates: "jocha_compare_exchange_rates",
};

const MAX_HISTORY = 20;
const MAX_SAVED_SETS = 20;
const EXCHANGE_RATE_API = "https://open.er-api.com/v6/latest/USD";
const DEPLOYED_APP_URL = "https://apichitstr.github.io/jocha-compare-price/";
const DEFAULT_EXCHANGE_RATES = {
  THB: 1,
  USD: 32.5,
  EUR: 38,
  JPY: 0.22,
  CNY: 4.55,
  KRW: 0.023,
  GBP: 43,
  SGD: 25.5,
};

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
      price: "ราคา",
      coupon: "ส่วนลดคูปอง",
      couponToggle: "ใช้ส่วนลดคูปอง",
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
      chartTitle: "กราฟเปรียบเทียบต้นทุนต่อหน่วย",
      lowerIsBetter: "ต้นทุนยิ่งต่ำ ยิ่งคุ้มค่า",
      bestValue: "คุ้มที่สุด",
      shareResult: "คัดลอกลิงก์ผลลัพธ์",
      shareCopied: "คัดลอกลิงก์แล้ว",
      shareFailed: "คัดลอกไม่สำเร็จ",
      invalidShareLink: "ลิงก์ผลลัพธ์ไม่ถูกต้องหรือข้อมูลไม่ครบ",
      summaryTitle: "สรุป",
      summaryIdle: "กรอกข้อมูลแล้วกดคำนวณ",
      tie: "ความคุ้มค่าเท่ากันพอดี",
      betterSuffix: "(ได้ปริมาตรต่อราคาดีกว่า)",
      better: "คุ้มค่ากว่า",
      unitFallback: "หน่วย",
      bahtPer: "บาท /",
      badInput: "กรุณากรอกข้อมูลราคา ปริมาตร และจำนวนชิ้นให้ถูกต้อง (มากกว่า 0)",
      badExchangeRate: "กรุณากรอกอัตราแลกเปลี่ยนเป็นบาทให้มากกว่า 0",
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
      openSavedSets: "บันทึก",
      closeSavedSets: "ปิด",
      setNamePlaceholder: "ชื่อชุดสินค้า",
      saveSet: "บันทึกชุดนี้",
      savedSetsEmpty: "ยังไม่มีชุดสินค้าที่บันทึก",
      loadSet: "เรียกใช้",
      deleteSet: "ลบ",
      defaultSetName: "ชุดสินค้า",
      exchangeStatusTitle: "อัตราแลกเปลี่ยนออนไลน์",
      exchangeLoading: "กำลังอัปเดต...",
      exchangeUpdated: "อัปเดตล่าสุด",
      exchangeCached: "เรตที่บันทึกล่าสุด",
      exchangeFallback: "ออฟไลน์: ใช้อัตราสำรอง",
      refreshRates: "รีเฟรชเรต",
      themeLight: "Light",
      themeDark: "Dark",
      layoutGroup: "รูปแบบคอลัมน์บนมือถือ",
      layoutOne: "แสดงแบบ 1 คอลัมน์",
      layoutTwo: "แสดงแบบ 2 คอลัมน์",
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
      price: "Price",
      coupon: "Coupon discount",
      couponToggle: "Use coupon discount",
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
      chartTitle: "Cost per unit comparison",
      lowerIsBetter: "Lower cost means better value",
      bestValue: "Best value",
      shareResult: "Copy result link",
      shareCopied: "Link copied",
      shareFailed: "Could not copy link",
      invalidShareLink: "This result link is invalid or incomplete",
      summaryTitle: "Summary",
      summaryIdle: "Fill in values and click calculate",
      tie: "Both products have equal value",
      betterSuffix: "(better volume per price)",
      better: "is better by",
      unitFallback: "unit",
      bahtPer: "THB /",
      badInput: "Please provide valid price, volume, and quantity values (greater than 0)",
      badExchangeRate: "Please provide an exchange rate to THB greater than 0",
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
      openSavedSets: "Save",
      closeSavedSets: "Close",
      setNamePlaceholder: "Set name",
      saveSet: "Save this set",
      savedSetsEmpty: "No saved product sets yet",
      loadSet: "Load",
      deleteSet: "Delete",
      defaultSetName: "Product set",
      exchangeStatusTitle: "Online exchange rates",
      exchangeLoading: "Updating...",
      exchangeUpdated: "Last updated",
      exchangeCached: "Last saved rates",
      exchangeFallback: "Offline: using fallback rates",
      refreshRates: "Refresh rates",
      themeLight: "Light",
      themeDark: "Dark",
      layoutGroup: "Mobile product columns",
      layoutOne: "Show in 1 column",
      layoutTwo: "Show in 2 columns",
    },
  },
};

let currentLang = "th";
let currentTheme = "light";
let mobileColumns = 2;
let comparisonMode = "two";
let calculationHistory = [];
let savedProductSets = [];
let exchangeRates = { ...DEFAULT_EXCHANGE_RATES };
let exchangeRatesUpdatedAt = null;
let exchangeRatesOnline = false;
let lastChartData = null;
let lastChartUnitLabel = "";

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
  couponToggleALabel: "couponToggle",
  couponToggleBLabel: "couponToggle",
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
  couponToggleCLabel: "couponToggle",
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
  summaryTitle: "summaryTitle",
  chartTitle: "chartTitle",
  chartHint: "lowerIsBetter",
  shareResultBtn: "shareResult",
  historyTitle: "historyTitle",
  clearHistoryBtn: "historyClear",
  historyEmpty: "historyEmpty",
  savedSetsTitle: "savedSetsTitle",
  openSavedSetsBtn: "openSavedSets",
  saveSetBtn: "saveSet",
  exchangeStatusTitle: "exchangeStatusTitle",
  refreshRatesBtn: "refreshRates",
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

function encodeSharePayload(payload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function decodeSharePayload(value) {
  if (!value || value.length > 12000) {
    throw new Error("Invalid share payload");
  }
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function getProductPrefixes() {
  return comparisonMode === "three" ? ["A", "B", "C"] : ["A", "B"];
}

function setComparisonMode(mode) {
  comparisonMode = mode === "three" ? "three" : "two";
  clearCostChart();
  const isThreeProductMode = comparisonMode === "three";
  document.body.classList.toggle("three-product-mode", isThreeProductMode);
  document.getElementById("cardC").hidden = !isThreeProductMode;

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

  mobileColumns = localStorage.getItem(STORAGE_KEYS.mobileColumns) === "1" ? 1 : 2;

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

  try {
    const cachedRates = JSON.parse(localStorage.getItem(STORAGE_KEYS.exchangeRates));
    if (cachedRates?.rates && Object.keys(DEFAULT_EXCHANGE_RATES).every((code) => Number(cachedRates.rates[code]) > 0)) {
      exchangeRates = cachedRates.rates;
      exchangeRatesUpdatedAt = cachedRates.updatedAt || null;
    }
  } catch {
    exchangeRates = { ...DEFAULT_EXCHANGE_RATES };
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

  document.querySelector(".layout-switch").setAttribute("aria-label", t("layoutGroup"));
  ["layoutOne", "layoutTwo"].forEach((id) => {
    const button = document.getElementById(id);
    button.setAttribute("aria-label", t(id));
    button.title = t(id);
  });

  prefixes.forEach((prefix) => {
    const couponType = document.getElementById(`couponType${prefix}`);
    if (couponType) {
      couponType.setAttribute("aria-label", t(`couponType${prefix}`) || `${t("coupon")} ${prefix}`);
    }
    updateCurrencyUI(prefix);
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
  document.getElementById("closeSavedSetsBtn").setAttribute("aria-label", t("closeSavedSets"));
  renderSavedSets();
  renderExchangeStatus();
  if (lastChartData) {
    renderCostChart(lastChartData, lastChartUnitLabel);
  }
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

function applyMobileColumns() {
  document.body.classList.toggle("mobile-one-column", mobileColumns === 1);
  const layoutOne = document.getElementById("layoutOne");
  const layoutTwo = document.getElementById("layoutTwo");
  layoutOne.classList.toggle("active", mobileColumns === 1);
  layoutTwo.classList.toggle("active", mobileColumns === 2);
  layoutOne.setAttribute("aria-pressed", String(mobileColumns === 1));
  layoutTwo.setAttribute("aria-pressed", String(mobileColumns === 2));
}

function setMobileColumns(columns) {
  mobileColumns = columns === 1 ? 1 : 2;
  localStorage.setItem(STORAGE_KEYS.mobileColumns, String(mobileColumns));
  applyMobileColumns();
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

function formatExchangeRate(value) {
  const maximumFractionDigits = value < 0.1 ? 6 : value < 1 ? 4 : 2;
  return new Intl.NumberFormat(I18N[currentLang].lang, { maximumFractionDigits }).format(value);
}

function updateCurrencyUI(prefix) {
  const currency = document.getElementById(`currency${prefix}`).value;
  const rate = exchangeRates[currency] || 1;
  document.getElementById(`exchangeRateLabel${prefix}`).textContent = `1 ${currency} =`;
  document.getElementById(`exchangeRateValue${prefix}`).textContent = `${formatExchangeRate(rate)} THB`;
  document.getElementById(`couponAmount${prefix}`).textContent = currency;
  document.getElementById(`exchangeRate${prefix}`).value = String(rate);
}

function bindCurrency(prefix) {
  document.getElementById(`currency${prefix}`).addEventListener("change", () => updateCurrencyUI(prefix));
  updateCurrencyUI(prefix);
}

function renderExchangeStatus() {
  const status = document.getElementById("exchangeStatus");
  if (!exchangeRatesUpdatedAt) {
    status.textContent = t("exchangeFallback");
    return;
  }
  const label = exchangeRatesOnline ? t("exchangeUpdated") : t("exchangeCached");
  status.textContent = `${label}: ${new Date(exchangeRatesUpdatedAt).toLocaleString(I18N[currentLang].lang)}`;
}

async function refreshExchangeRates() {
  const button = document.getElementById("refreshRatesBtn");
  const status = document.getElementById("exchangeStatus");
  button.classList.remove("refresh-success");
  button.classList.add("is-refreshing");
  button.disabled = true;
  status.textContent = t("exchangeLoading");

  try {
    const response = await fetch(EXCHANGE_RATE_API, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Exchange rate request failed");
    }
    const data = await response.json();
    const usdRates = { USD: 1, ...data.rates };
    if (data.result !== "success" || !Number(usdRates.THB)) {
      throw new Error("Invalid exchange rate response");
    }

    const onlineRates = {};
    Object.keys(DEFAULT_EXCHANGE_RATES).forEach((currency) => {
      const currencyPerUsd = Number(usdRates[currency]);
      onlineRates[currency] = currency === "THB" ? 1 : Number(usdRates.THB) / currencyPerUsd;
      if (!Number.isFinite(onlineRates[currency]) || onlineRates[currency] <= 0) {
        throw new Error(`Missing exchange rate for ${currency}`);
      }
    });

    exchangeRates = onlineRates;
    exchangeRatesUpdatedAt = data.time_last_update_utc || new Date().toISOString();
    exchangeRatesOnline = true;
    localStorage.setItem(STORAGE_KEYS.exchangeRates, JSON.stringify({
      rates: exchangeRates,
      updatedAt: exchangeRatesUpdatedAt,
    }));
    ["A", "B", "C"].forEach(updateCurrencyUI);
    button.classList.add("refresh-success");
    window.setTimeout(() => button.classList.remove("refresh-success"), 900);
  } catch {
    exchangeRatesOnline = false;
  } finally {
    button.classList.remove("is-refreshing");
    button.disabled = false;
    renderExchangeStatus();
  }
}

function getProductData(prefix) {
  const price = parsePositiveNumber(`price${prefix}`);
  const currency = document.getElementById(`currency${prefix}`).value;
  const exchangeRate = parsePositiveNumber(`exchangeRate${prefix}`);
  const couponRaw = document.getElementById(`couponEnabled${prefix}`).checked
    ? document.getElementById(`coupon${prefix}`).value
    : "";
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

  if (!exchangeRate) {
    return { error: t("badExchangeRate") };
  }

  if (!unitMeta) {
    return { error: t("badUnit") };
  }

  const totalVolume = volume * qty * factor;
  const totalVolumeBase = totalVolume * unitMeta.toBase;
  const couponDiscount = couponType === "percent" ? price * couponValue / 100 : couponValue;
  const finalPriceOriginal = Math.max(0, price - couponDiscount);
  const finalPrice = finalPriceOriginal * exchangeRate;
  const costPerUnit = finalPrice / totalVolumeBase;

  return {
    name,
    price,
    currency,
    exchangeRate,
    couponValue,
    couponType,
    finalPrice,
    finalPriceOriginal,
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
  clearCostChart();
  const summary = document.getElementById("summaryText");
  summary.classList.remove("win", "tie", "error");
  summary.classList.add("error");
  summary.textContent = message;
}

function renderResult(products) {
  const summary = document.getElementById("summaryText");

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

function renderCostChart(products, unitLabel) {
  lastChartData = products.map((product) => ({ name: product.name, costPerUnit: product.costPerUnit }));
  lastChartUnitLabel = unitLabel;
  const ranked = [...lastChartData].sort((first, second) => first.costPerUnit - second.costPerUnit);
  const highestCost = Math.max(...ranked.map((product) => product.costPerUnit));
  const rows = document.getElementById("costChartRows");
  rows.replaceChildren();

  let rank = 1;
  ranked.forEach((product, index) => {
    if (index > 0 && Math.abs(product.costPerUnit - ranked[index - 1].costPerUnit) >= 1e-12) {
      rank = index + 1;
    }
    const isBest = Math.abs(product.costPerUnit - ranked[0].costPerUnit) < 1e-12;
    const row = document.createElement("div");
    row.className = `chart-row${isBest ? " chart-row-best" : ""}`;

    const heading = document.createElement("div");
    heading.className = "chart-row-heading";
    const name = document.createElement("strong");
    name.textContent = `${rank}. ${product.name}`;
    const value = document.createElement("span");
    value.textContent = `${formatNumber(product.costPerUnit, 4)} ${t("bahtPer")} ${unitLabel}`;
    heading.append(name, value);

    const track = document.createElement("div");
    track.className = "chart-track";
    const bar = document.createElement("div");
    bar.className = "chart-bar";
    const relativeWidth = highestCost > 0 ? product.costPerUnit / highestCost * 100 : 100;
    bar.style.width = `${Math.max(12, relativeWidth)}%`;
    bar.setAttribute("role", "img");
    bar.setAttribute("aria-label", `${product.name}: ${value.textContent}`);
    if (isBest) {
      const badge = document.createElement("span");
      badge.className = "chart-best-badge";
      badge.textContent = t("bestValue");
      bar.append(badge);
    }
    track.append(bar);
    row.append(heading, track);
    rows.append(row);
  });

  document.getElementById("costChart").hidden = false;
  document.getElementById("shareResultBtn").hidden = false;
}

function clearCostChart() {
  lastChartData = null;
  lastChartUnitLabel = "";
  const chart = document.getElementById("costChart");
  chart.hidden = true;
  document.getElementById("shareResultBtn").hidden = true;
  document.getElementById("shareStatus").textContent = "";
  document.getElementById("costChartRows").replaceChildren();
}

function animateResults() {
  const results = document.getElementById("results");
  results.classList.remove("result-ready");
  void results.offsetWidth;
  results.classList.add("result-ready");
}

function updateModeVisibility(prefix) {
  const qtyInput = document.getElementById(`qty${prefix}`);
  const isPack = getMode(`mode${prefix}`) === "pack";
  document.getElementById(`packWrap${prefix}`).hidden = !isPack;
  qtyInput.disabled = !isPack;
  if (!isPack) {
    qtyInput.value = "1";
  }
}

function bindModeToggle(prefix) {
  document.querySelectorAll(`input[name="mode${prefix}"]`).forEach((radio) => {
    radio.addEventListener("change", () => updateModeVisibility(prefix));
  });
  updateModeVisibility(prefix);
}

function updateCouponVisibility(prefix) {
  const enabled = document.getElementById(`couponEnabled${prefix}`).checked;
  document.getElementById(`couponWrap${prefix}`).hidden = !enabled;
  document.getElementById(`coupon${prefix}`).disabled = !enabled;
  document.getElementById(`couponType${prefix}`).disabled = !enabled;
}

function bindCouponToggle(prefix) {
  document.getElementById(`couponEnabled${prefix}`).addEventListener("change", () => updateCouponVisibility(prefix));
  updateCouponVisibility(prefix);
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
    currency: document.getElementById(`currency${prefix}`).value,
    exchangeRate: document.getElementById(`exchangeRate${prefix}`).value,
    couponEnabled: document.getElementById(`couponEnabled${prefix}`).checked,
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

function openSavedSetsModal() {
  const modal = document.getElementById("savedSetsModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  renderSavedSets();
  document.getElementById("setNameInput").focus();
}

function closeSavedSetsModal() {
  document.getElementById("savedSetsModal").hidden = true;
  document.body.classList.remove("modal-open");
  document.getElementById("openSavedSetsBtn").focus();
}

function restoreProductForm(prefix, product) {
  if (!product) {
    return;
  }
  document.getElementById(`name${prefix}`).value = product.name ?? "";
  document.getElementById(`price${prefix}`).value = product.price ?? "";
  document.getElementById(`currency${prefix}`).value = DEFAULT_EXCHANGE_RATES[product.currency] ? product.currency : "THB";
  updateCurrencyUI(prefix);
  document.getElementById(`couponEnabled${prefix}`).checked = product.couponEnabled ?? Boolean(product.coupon);
  document.getElementById(`coupon${prefix}`).value = product.coupon ?? "";
  document.getElementById(`couponType${prefix}`).value = product.couponType === "amount" ? "amount" : "percent";
  document.getElementById(`volume${prefix}`).value = product.volume ?? "";
  document.getElementById(`factorEnabled${prefix}`).checked = Boolean(product.factorEnabled);
  document.getElementById(`factor${prefix}`).value = product.factor || "1.0";
  document.getElementById(`unit${prefix}`).value = UNIT_MAP[product.unit] ? product.unit : "ml";
  const mode = product.mode === "pack" ? "pack" : "single";
  document.querySelector(`input[name="mode${prefix}"][value="${mode}"]`).checked = true;
  document.getElementById(`qty${prefix}`).value = product.qty || "1";
  updateCouponVisibility(prefix);
  updateModeVisibility(prefix);
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
  const summary = document.getElementById("summaryText");
  summary.classList.remove("win", "tie", "error");
  summary.textContent = t("summaryIdle");
  closeSavedSetsModal();
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

function calculate(options = {}) {
  const addToHistory = options.addToHistory !== false;
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

  const result = renderResult(productData);
  renderCostChart(productData, unitLabel);
  animateResults();
  if (!addToHistory) {
    return;
  }
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

function createShareUrl() {
  const rates = Object.fromEntries(Object.keys(DEFAULT_EXCHANGE_RATES).map((currency) => [currency, exchangeRates[currency]]));
  const payload = {
    version: 1,
    lang: currentLang,
    comparisonMode,
    exchangeRates: rates,
    exchangeRatesUpdatedAt,
    products: Object.fromEntries(getProductPrefixes().map((prefix) => [prefix, captureProductForm(prefix)])),
  };
  const shareHash = new URLSearchParams({ share: encodeSharePayload(payload) }).toString();
  const localUrl = new URL(window.location.href);
  localUrl.hash = shareHash;
  window.history.replaceState(null, "", localUrl);

  const shareUrl = new URL(window.location.protocol === "file:" ? DEPLOYED_APP_URL : window.location.href);
  shareUrl.hash = shareHash;
  return shareUrl.toString();
}

async function copyShareLink() {
  const status = document.getElementById("shareStatus");
  const url = createShareUrl();
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) {
        throw new Error("Copy failed");
      }
    }
    status.textContent = t("shareCopied");
  } catch (error) {
    status.textContent = t("shareFailed");
  }
}

function loadSharedComparison() {
  const encoded = new URLSearchParams(window.location.hash.slice(1)).get("share");
  if (!encoded) {
    return false;
  }

  try {
    const payload = decodeSharePayload(encoded);
    const prefixes = payload.comparisonMode === "three" ? ["A", "B", "C"] : ["A", "B"];
    if (payload.version !== 1 || !payload.products || prefixes.some((prefix) => !payload.products[prefix])) {
      throw new Error("Invalid shared comparison");
    }

    const rates = {};
    Object.keys(DEFAULT_EXCHANGE_RATES).forEach((currency) => {
      const rate = Number(payload.exchangeRates?.[currency]);
      if (!Number.isFinite(rate) || rate <= 0) {
        throw new Error("Invalid shared exchange rates");
      }
      rates[currency] = rate;
    });

    exchangeRates = rates;
    exchangeRatesUpdatedAt = typeof payload.exchangeRatesUpdatedAt === "string" ? payload.exchangeRatesUpdatedAt : null;
    exchangeRatesOnline = false;
    if (I18N[payload.lang]) {
      currentLang = payload.lang;
    }
    setComparisonMode(payload.comparisonMode);
    prefixes.forEach((prefix) => restoreProductForm(prefix, payload.products[prefix]));
    applyLanguage();
    calculate({ addToHistory: false });
    return true;
  } catch (error) {
    showError(t("invalidShareLink"));
    return false;
  }
}

function resetForm() {
  document.getElementById("results").classList.remove("result-ready");
  clearCostChart();
  getProductPrefixes().forEach((prefix) => {
    document.getElementById(`name${prefix}`).value = I18N[currentLang].defaults[prefix.toLowerCase()];
    document.getElementById(`price${prefix}`).value = "";
    document.getElementById(`currency${prefix}`).value = "THB";
    document.getElementById(`exchangeRate${prefix}`).value = "1";
    updateCurrencyUI(prefix);
    document.getElementById(`couponEnabled${prefix}`).checked = false;
    document.getElementById(`coupon${prefix}`).value = "";
    document.getElementById(`couponType${prefix}`).value = "percent";
    updateCouponVisibility(prefix);
    document.getElementById(`volume${prefix}`).value = "";
    document.getElementById(`factor${prefix}`).value = "1.0";
    document.getElementById(`factorEnabled${prefix}`).checked = false;
    updateFactorVisibility(prefix);
    document.getElementById(`unit${prefix}`).value = "ml";
    document.querySelector(`input[name="mode${prefix}"][value="single"]`).checked = true;
    document.getElementById(`qty${prefix}`).value = "1";
    updateModeVisibility(prefix);
  });

  const summary = document.getElementById("summaryText");
  summary.classList.remove("win", "tie", "error");
  summary.textContent = t("summaryIdle");
}

function init() {
  loadState();
  applyTheme();
  applyMobileColumns();
  ["A", "B", "C"].forEach((prefix) => {
    bindModeToggle(prefix);
    bindCouponToggle(prefix);
    bindFactorToggle(prefix);
    bindCurrency(prefix);
  });
  applyLanguage();
  resetForm();

  document.getElementById("calcBtn").addEventListener("click", calculate);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("shareResultBtn").addEventListener("click", copyShareLink);
  document.getElementById("openSavedSetsBtn").addEventListener("click", openSavedSetsModal);
  document.getElementById("closeSavedSetsBtn").addEventListener("click", closeSavedSetsModal);
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
  document.getElementById("layoutOne").addEventListener("click", () => setMobileColumns(1));
  document.getElementById("layoutTwo").addEventListener("click", () => setMobileColumns(2));
  document.getElementById("refreshRatesBtn").addEventListener("click", refreshExchangeRates);
  document.getElementById("savedSetsModal").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closeSavedSetsModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.getElementById("savedSetsModal").hidden) {
      closeSavedSetsModal();
    }
  });
  setComparisonMode("two");
  if (!loadSharedComparison()) {
    refreshExchangeRates();
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

init();
registerServiceWorker();
