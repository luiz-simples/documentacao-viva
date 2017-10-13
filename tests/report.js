const {version} = require('../package.json')
const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber.json',
  output: './reports/index.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  brandTitle: `Documentação Viva ${version}`,
  metadata: {
    "App Version": version,
    "Test Environment": (process.env.ENVIRONMENT || 'development').toUpperCase()
  }
}

reporter.generate(options)
