const locator_xpath = require("../locators/xpath/superadmin.json");
import { generateRandomString, generateRandomNumber } from "../support/utils";

class Login {
  setUserName(username) {
    cy.xpath(locator_xpath.usernametxt).click().type(username);
  }

  setPassword(password) {
    cy.xpath(locator_xpath.passwordtxt).click().type(password);
  }

  clickLoginbtn() {
    cy.xpath(locator_xpath.signInbtn).click();
  }

  verifyLoginSuccessMsg(successMsg) {
    cy.xpath(locator_xpath.welcomemsg).should("have.text", successMsg);
  }

  verifyUserOnDashboard() {
    cy.xpath(locator_xpath.dashboard).should("have.text", "Dashboard");
  }

  clickDiagnosticianCreationTab() {
    cy.xpath(locator_xpath.diagnosticiansTab).click();
  }

  chooseDiagostisianLocation() {
    cy.xpath(locator_xpath.chooseDiagnosticianLocation).click();
  }

  clickDirectorCreationTab() {
    cy.xpath(locator_xpath.directorTab).click();
  }
}

export default Login;
