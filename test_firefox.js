const { Builder } = require('selenium-webdriver');
require('geckodriver');

async function run() {
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://example.com');
  console.log("Firefox öppnades!");
  await driver.quit();
}

run();