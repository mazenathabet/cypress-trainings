const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    specPattern: 'cypress/test-specs/**/*.{js,jsx,ts,tsx,feature}',
    env: {
      "nopCommerceApp": "https://demo.nopcommerce.com/"
    },
    viewportHeight: 800,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
  },
});
