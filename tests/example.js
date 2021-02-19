const puppeteer = require("puppeteer");

describe("my first test", () => {
  it("should launch browser", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
    await browser.close();
  });

  it("should wait for 3 seconds", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
    await browser.close();
  });

  it("should reload the page", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
    await page.reload();
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
    await browser.close();
  });

  it("should go back and forward", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
    await page.goto("https://dev.to/");
    await page.waitForSelector("#page-content-inner");
    await page.goBack();
    await page.waitForSelector("h1");
    await page.goForward();
    await page.waitForSelector("#page-content-inner");
    await browser.close();
  });

  it("interacting with inputs", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.type("#developer-name", "Abdallah");
    await browser.close();
  });

  it("interacting with buttons", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.click("#tried-test-cafe");
    await browser.close();
  });

  it("interacting with dropdown", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.select("#preferred-interface", "JavaScript API");
    await browser.close();
  });

  it.only("filling the form and submit", async () => {
    const browser = await puppeteer.launch(); //{ headless: false }
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.type("#developer-name", "Abdallah");
    await page.select("#preferred-interface", "JavaScript API");
    await page.click("#tried-test-cafe");
    await page.type("#comments", "This is my comment");
    await page.click("#submit-button");
    await page.waitForSelector("#article-header");
    // await page.waitForTimeout(5000);
    await browser.close();
  });
});
