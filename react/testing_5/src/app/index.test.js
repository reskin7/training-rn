import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../config/test';

describe('H1 Text', () => {
  it(
    'h1 loads correctly',
    async () => {
      const browser = await Puppeteer.launch();
      const page = await browser.newPage();

      page.emulate({
        viewport: {
          width: 500,
          height: 2400
        },
        userAgent: ''
      });

      await page.goto();
      await page.waitForSelector('.App-title');

      const html = await page.$eval('.App-title', e => e.innerHTML);
      expect(html).toBe('Welcome to React');

      browser.close();
    },
    16000
  );
});
