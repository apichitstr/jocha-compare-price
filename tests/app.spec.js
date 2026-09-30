const { test, expect } = require("@playwright/test");

async function openApp(page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
}

async function fillBasicComparison(page, values = {}) {
  const { priceA = 100, volumeA = 100, priceB = 150, volumeB = 100 } = values;
  await page.locator("#priceA").fill(String(priceA));
  await page.locator("#volumeA").fill(String(volumeA));
  await page.locator("#priceB").fill(String(priceB));
  await page.locator("#volumeB").fill(String(volumeB));
}

test.describe("comparison calculator", () => {
  test("calculates cost per unit and better-value percentage", async ({ page }) => {
    await openApp(page);
    await fillBasicComparison(page);
    await page.locator("#calcBtn").click();

    await expect(page.locator("#summaryText")).toContainText("33.33%");
    await expect(page.locator("#costChartRows")).toContainText("1.0000");
    await expect(page.locator("#costChartRows")).toContainText("1.5000");
  });

  test("applies coupon, pack quantity, and size multiplier", async ({ page }) => {
    await openApp(page);
    await fillBasicComparison(page, { priceA: 200, volumeA: 100, priceB: 100, volumeB: 100 });

    await page.locator("#couponEnabledA").check();
    await page.locator("#couponA").fill("10");
    await page.locator('input[name="modeA"][value="pack"]').check();
    await page.locator("#qtyA").fill("2");
    await page.locator("#factorEnabledA").check();
    await page.locator("#factorA").fill("1.5");
    await page.locator("#calcBtn").click();

    await expect(page.locator("#summaryText")).toContainText("40.00%");
    await expect(page.locator("#costChartRows")).toContainText("0.6000");
  });

  test("rejects incompatible measurement dimensions", async ({ page }) => {
    await openApp(page);
    await fillBasicComparison(page);
    await page.locator("#unitB").selectOption("g");
    await page.locator("#calcBtn").click();

    await expect(page.locator("#summaryText")).toHaveClass(/error/);
    await expect(page.locator("#costChart")).toBeHidden();
  });
});

test.describe("result image", () => {
  test("creates and downloads a PNG from the current result", async ({ page }) => {
    await openApp(page);
    await fillBasicComparison(page);
    await page.locator("#calcBtn").click();

    const image = await page.evaluate(async () => {
      const blob = await createResultImageBlob();
      const bitmap = await createImageBitmap(blob);
      return { type: blob.type, size: blob.size, width: bitmap.width, height: bitmap.height };
    });
    expect(image.type).toBe("image/png");
    expect(image.size).toBeGreaterThan(1000);
    expect(image.width).toBe(1200);
    expect(image.height).toBeGreaterThan(500);

    const filename = await page.evaluate(async () => {
      const originalClick = HTMLAnchorElement.prototype.click;
      let capturedFilename = "";
      HTMLAnchorElement.prototype.click = function captureDownload() {
        capturedFilename = this.download;
      };
      try {
        await downloadResultImage();
        return capturedFilename;
      } finally {
        HTMLAnchorElement.prototype.click = originalClick;
      }
    });
    expect(filename).toMatch(/^jocha-comparison-\d{4}-\d{2}-\d{2}\.png$/);
  });
});

test.describe("PWA lifecycle", () => {
  test("shows the update prompt and requests waiting worker activation", async ({ page }) => {
    await openApp(page);
    await page.evaluate(() => {
      window.testUpdateMessages = [];
      showAppUpdate({
        postMessage(message) {
          window.testUpdateMessages.push(message);
        },
      });
    });

    await expect(page.locator("#updateBanner")).toBeVisible();
    await page.locator("#updateAppBtn").click();
    await expect.poll(() => page.evaluate(() => window.testUpdateMessages)).toEqual([{ type: "SKIP_WAITING" }]);
  });

  test("caches the app shell and reloads while offline", async ({ page, context }) => {
    await openApp(page);
    await page.evaluate(async () => Boolean(await navigator.serviceWorker.ready));
    await expect.poll(() => page.evaluate(async () => (await caches.keys()).includes("jocha-app-v5"))).toBe(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true);

    await context.setOffline(true);
    try {
      await page.reload({ waitUntil: "domcontentloaded" });
      await expect(page.locator("h1")).toHaveText("Jocha Compares Prices");
      await expect(page.locator("#calcBtn")).toBeVisible();
    } finally {
      await context.setOffline(false);
    }
  });
});
