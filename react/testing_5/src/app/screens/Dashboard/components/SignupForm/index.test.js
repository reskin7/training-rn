import Faker from 'faker';
import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../../../../../config/test';

// import { FIELDS } from './constants';

const person = {
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email()
};

describe('Signup Form (use FIELDS constants)', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await Puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });
  });

  beforeEach(async () => page.goto(TEST_BASE_URL));

  afterAll(() => browser.close());

  it('Can submit signup form', async () => {
    await page.waitForSelector('.signup-form');
    await page.click('input[name=firstName]');
    await page.type('input[name=firstName]', person.firstName);
    await page.click('input[name=email]');
    await page.type('input[name=email]', person.email);
    await page.click('input[name=lastName]');
    await page.type('input[name=lastName]', person.lastName);
    await page.click('button[type=submit]');
  });

  it(
    'Successful submit',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', person.firstName);
      await page.click('input[name=email]');
      await page.type('input[name=email]', person.email);
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', person.lastName);
      await page.click('button[type=submit]');
      await page.waitForSelector('span.result');

      const resultCount = await page.$$eval('span.result', e => e.length);
      expect(resultCount).toBe(1);
    },
    16000
  );

  it(
    '3 fields are required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('button[type=submit]');
      await page.waitForSelector('.error');

      const errorCount = await page.$$eval('.error', errors => errors.length);
      expect(errorCount).toBe(3);
    },
    16000
  );

  it(
    'First name is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=email]');
      await page.type('input[name=email]', person.email);
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', person.lastName);
      await page.click('button[type=submit]');
      await page.waitForSelector('.error');

      const html = await page.$eval('.error-firstName', e => e.innerHTML);
      expect(html).toBe('Required');

      const errorCount = await page.$$eval('.error', errors => errors.length);
      expect(errorCount).toBe(1);
    },
    16000
  );

  it(
    'Last name is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=email]');
      await page.type('input[name=email]', person.email);
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', person.lastName);
      await page.click('button[type=submit]');
      await page.waitForSelector('.error');

      const html = await page.$eval('.error-lastName', e => e.innerHTML);
      expect(html).toBe('Required');

      const errorCount = await page.$$eval('.error', errors => errors.length);
      expect(errorCount).toBe(1);
    },
    16000
  );

  it(
    'Email is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', person.email);
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', person.lastName);
      await page.click('button[type=submit]');
      await page.waitForSelector('.error');

      const html = await page.$eval('.error-email', e => e.innerHTML);
      expect(html).toBe('Required');

      const errorCount = await page.$$eval('.error', errors => errors.length);
      expect(errorCount).toBe(1);
    },
    16000
  );
});