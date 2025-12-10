UI-automation
Preconditon:
Node js should be installed

Clone repository:
git clone https://github.com/Pranayp170896/playwright-automation-framework-assignment.git

Execute below command:
npm install
npx playwright installx`

To execute test:
1.To run all test       :   npx playwright test
2.To run specific test  :   npx playwright test tests/login.spec.js

By default setting for UI automation is - test will be run in parallel and in headless mode (as per the valiue given in setting.json file)


Setting.json file -here value get change from paralled to sequence and  headless to headded
{
  "executionMode": "sequence",
  "runMode": "headed",
  "timeout": 40000, 
  "retries": 0
}
if we execute th npx playwright test -> wioth above changes then it will run in  sequence mode and in headed mode
