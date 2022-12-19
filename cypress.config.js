const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 6000,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://demo.nopcommerce.com/",
    watchForFileChanges: false,
    specPattern: ['cypress/test-specs/**/*.{js,jsx,ts,tsx,feature}'],
    excludeSpecPattern:['**/1-getting-started/*',"**/2-advanced-examples/*"],
    experimentalRunAllSpecs: true,
    videoUploadOnPasses: false,
  },

});
