const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("my first test", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch(); //{ headless: false }
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should launch browser", async () => {
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
  });

  it("should wait for 3 seconds", async () => {
    await page.goto("http://example.com");
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
  });

  it("should reload the page", async () => {
    await page.goto("http://example.com");
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
    await page.reload();
    await page.waitForTimeout(300);
    await page.waitForSelector("h1");
  });

  it("should go back and forward", async () => {
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
    await page.goto("https://dev.to/");
    await page.waitForSelector("#page-content-inner");
    await page.goBack();
    await page.waitForSelector("h1");
    await page.goForward();
    await page.waitForSelector("#page-content-inner");
  });

  it("interacting with inputs", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.type("#developer-name", "Abdallah");
  });

  it("interacting with buttons", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.click("#tried-test-cafe");
  });

  it("interacting with dropdown", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.select("#preferred-interface", "JavaScript API");
  });

  it("filling the form and submit", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.type("#developer-name", "Abdallah");
    await page.select("#preferred-interface", "JavaScript API");
    await page.click("#tried-test-cafe");
    await page.type("#comments", "This is my comment");
    await page.click("#submit-button");
    await page.waitForSelector("#article-header");
    // await page.waitForTimeout(5000);
  });

  it("should get page title and url", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    const title = await page.title();
    console.log(title);
    const url = await page.url();
    console.log(url);
  });

  it("should get element text", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    const rateText = await page.$eval(
      "legend",
      (element) => element.textContent
    );
    console.log(rateText);
  });

  it("should get elements count", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    const legendCount = await page.$$eval(
      "legend",
      (element) => element.length
    );
    console.log(`# of legend is ${legendCount}`);
  });

  it("should get elements count using assertion", async () => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    const legendCount = await page.$$eval(
      "legend",
      (element) => element.length
    );
    expect(legendCount).to.equal(6);
  });

  it("using keyboard press", async () => {
    await page.goto("http://zero.webappsecurity.com/");
    await page.waitForSelector("#searchTerm");
    await page.type("#searchTerm", "credit");
    await page.keyboard.press("Enter");
  });

  it("using xpath", async () => {
    await page.goto("http://zero.webappsecurity.com/");
    await page.waitForXPath("//a[normalize-space()='More Services']");
  });

  it.only("should element not exist", async () => {
    await page.goto("http://zero.webappsecurity.com/");
    await page.waitForSelector("#signin_button");
    await page.click("#signin_button");
    await page.waitForSelector("#signin_button", { hidden: true }); //
  });
});
