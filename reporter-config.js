const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporterEnabled: 'mocha-junit-reporter, mochawesome',
  mochaJunitReporterReporterOptions: {
    mochaFile: 'cypress/results/junit/results-[hash].xml'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
})