const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
    },
    
  },
  defaultCommandTimeout:20000,
});
