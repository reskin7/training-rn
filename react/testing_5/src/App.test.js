const puppeteer = require('puppeteer');

describe('H1 Text', () => {
  it(
    'h1 loads correctly',
    async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 500,
          height: 2400
        },
        userAgent: ''
      });

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.App-title');

      const html = await page.$eval('.App-title', e => e.innerHTML);
      expect(html).toBe('Welcome to React');

      browser.close();
    },
    16000
  );
});
