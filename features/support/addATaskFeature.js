const { When, Then, Given, Before, AfterAll } = require("cucumber")
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('cucumber');
const { expect } = require("chai");

setDefaultTimeout(60 * 1000);
let browser, page;
Before( async function () {
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 10,
        devtools: false,
        args:
            [
                '--start-maximized',
                '--window-size=1920,1080'
            ]
    });
    page = await browser.newPage();
})

Given("I want to create a new task with valid name", async function () {
    await page.goto("http://localhost:8080/")
});

When('I click the Add Button, give valid input in the name field and press Done Button', async function () {
    let buttonSelector = ['.ant-btn-primary:not([disabled])'];
    await page.waitForSelector(buttonSelector);
    let button = await page.$(buttonSelector);
    await button.click();

    let textSelector = ['[type=text]'];
    await page.waitForSelector(textSelector);
    let input = await page.$(textSelector);
    await input.type('ExampleOne');

    let doneButtonSelector = ['.ant-btn-primary:not(.ant-btn-icon-only)'];
    await page.waitForSelector(doneButtonSelector);
    let doneButton = await page.$(doneButtonSelector);
    await doneButton.click();
});

Then('This task appears in the Todo list', async function () {
    let listSelector = ['.ant-list-items'];
    await page.waitForSelector(listSelector);
    let list = await page.$(listSelector);

    let listItemSelector = ['ul>div'];

    let listItems = await list.$$(listItemSelector);
    expect(listItems.length).to.equal(1);
});
AfterAll(async () => {
    await page.waitForTimeout(4000);
    await browser.close();
});
