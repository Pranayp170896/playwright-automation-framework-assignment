import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';


const settings = JSON.parse(fs.readFileSync('./settings.json', 'utf8'));

const runMode = settings.runMode || "headless";
const execMode = settings.executionMode || "parallel";

export default defineConfig({
  testDir: './tests',

  workers: execMode === "sequence" ? 1 : undefined,
  retries: settings.retries ?? 0,
  timeout: settings.timeout ?? 30000,

  use: {
    baseURL: "https://v2.convertapi.com",
    
    headless: runMode === "headless",
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  reporter: [
    ['html'],
    ["list"],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
