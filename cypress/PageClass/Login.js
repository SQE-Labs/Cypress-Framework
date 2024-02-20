const locator_xpath = require("../locators/xpath/superadmin.json");
import { generateRandomString, generateRandomNumber } from "../support/utils";

class Login {
  // clickLogin() {
  //   cy.xpath(locator_xpath.loginbtn).click();
  //   cy.xpath("//h5[.='Log in']").should("be.visible");
  // }

  setUserName(username) {
    cy.wait(2000);
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

  clickAdminCreationTab() {
    cy.xpath(locator_xpath.adminTab).click();
  }

  enterAdminFirstName(adminFirstName) {
    cy.xpath(locator_xpath.adminFirstName)
      .click()
      .type(adminFirstName + generateRandomString(3));
  }

  enterAdminLastName(adminLastName) {
    cy.xpath(locator_xpath.adminLastName)
      .click()
      .type(adminLastName + generateRandomString(3));
  }

  enterAdminMobileNumber(adminMobileNumber) {
    cy.xpath(locator_xpath.adminMobileNumber).click().type(adminMobileNumber);
  }

  enterAdminEmail(adminEmail) {
    cy.xpath(locator_xpath.adminEmail)
      .click()
      .type(adminEmail + generateRandomString(3) + "@yopmail.com");
  }

  enterUserName(userName) {
    cy.xpath(locator_xpath.adminUsername).click().type(userName);
  }

  enterNewPassword(passwordField) {
    cy.xpath(locator_xpath.adminCreatepassword).click().type(passwordField);
  }

  confirmPasswordField(confirmPasswordText) {
    cy.xpath(locator_xpath.adminConfirmpassword)
      .click()
      .type(confirmPasswordText);
  }

  clickOnCreateAdmin() {
    cy.xpath(locator_xpath.adminCreationSubmission).click();
  }

  clickOnOpeningAdminCreation() {
    cy.xpath(locator_xpath.adminCreationForm).click();
  }

  createAdmin(
    adminFirstName,
    adminLastName,
    adminMobileNumber,
    adminEmail,
    userName,
    password,
    confirmPassword
  ) {
    this.enterAdminFirstName(adminFirstName);
    this.enterAdminLastName(adminLastName);
    this.enterAdminMobileNumber(adminMobileNumber);
    this.enterAdminEmail(adminEmail);
    this.enterUserName(userName);
    this.enterNewPassword(password);
    this.confirmPasswordField(confirmPassword);
  }

  verifyAdminOnDashboard(adminCreated) {
    cy.xpath(locator_xpath.adminListUsername).should("have.text", adminCreated);
  }
}

export default Login;
