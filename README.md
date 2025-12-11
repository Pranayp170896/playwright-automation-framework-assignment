UI-automation
Preconditon:
Node js should be installed

Clone repository:
git clone 

Execute below command:
npm install
npx playwright install

To execute test:
1.To run all test       :   npx playwright test
2.To run specific test  :   npx playwright test tests/ui/login.spec.js

By default setting for UI automation is - test will be run in parallel and in headless mode (as per the valiue given in setting.json file)


Setting.json file -here value get change from paralled to sequence and  headless to headded
{
  "executionMode": "sequence",
  "runMode": "headed",
  "timeout": 40000, 
  "retries": 0
}
if we execute th npx playwright test -> wioth above changes then it will run in  sequence mode and in headed mode


for API-automation
Single file run - npx playwright test tests/api
For running single test in terminal - npx playwright test -g "2.1. File download and reading file content and write it in file"

In Package.json file -we add 
"scripts": {
    "uiTest":"npx playwright test tests/ui",
    "apiTest":"npx playwright test tests/api"
  },

  If you want to run whole uiTest then use- npm run uiTest 
  If you want to run whole uiTest then use- npm run apiTest