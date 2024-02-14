const locator_xpath = require("../locators/xpath/xpath.json");

class Monitor {
  isMonitorDisplayed() {
    cy.xpath(locator_xpath.monitorbtn).click();
    cy.xpath(locator_xpath.monitor1).should("be.visible");
    cy.xpath(locator_xpath.m1price).should("be.visible");
    cy.xpath(locator_xpath.monitor2).should("be.visible");
    cy.xpath(locator_xpath.m2price).should("be.visible");
  }

  ValidateMonitor1(data) {
    cy.xpath(locator_xpath.monitor1).should("have.text", data);
  }
  Validatemonitor1Price(data) {
    cy.xpath(locator_xpath.m1price).should("have.text", data);
  }

  ValidateMonitor2(data) {
    cy.xpath(locator_xpath.monitor2).should("have.text", data);
  }
  Validatemonitor2Price(data) {
    cy.xpath(locator_xpath.m2price).should("have.text", data);
  }
}

export default Monitor;
