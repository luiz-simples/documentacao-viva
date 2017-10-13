const chromedriver = require('chromedriver')
const seleniumServer = require('selenium-server')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--format', 'json:tests/reports/cucumber.json',
    '--require', 'tests/steps', 'tests/features'
  ]
})

module.exports = {
  output_folder: 'tests/reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  selenium: {
    server_path: seleniumServer.path,
    log_path: './tests',
    host: 'selenium.dev',
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: 'selenium.dev',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },

      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
}
