const puppeteer = require("puppeteer");

describe("my first test", () => {
  it("should launch browser", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
    await browser.close();
  });

  it.only("should wait for 3 seconds", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
    await browser.close();
  });
});
