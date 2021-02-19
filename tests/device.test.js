const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("my first test", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it("desktop device", async () => {
    await page.setViewport({ width: 1650, height: 1050 });
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
  });

  it("tablet device", async () => {
    const tablet = await puppeteer.devices["iPad landscape"];
    await page.emulate(tablet);
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
  });

  it("mobile device", async () => {
    const mobile = await puppeteer.devices["iPhone X"];
    await page.emulate(mobile);
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
  });
});
