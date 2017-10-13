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

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
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
