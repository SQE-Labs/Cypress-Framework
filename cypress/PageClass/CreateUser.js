const locator_xpath = require("../locators/xpath/superadmin.json");
import { generateRandomString, generateRandomNumber } from "../support/utils";

class CreateUser {
  enterFirstName(firstName) {
    cy.xpath(locator_xpath.userFirstName)
      .click()
      .type(firstName + generateRandomString(3));
  }

  enterLastName(lastName) {
    cy.xpath(locator_xpath.userLastName)
      .click()
      .type(lastName + generateRandomString(3));
  }

  enterMobileNumber(mobileNumber) {
    cy.xpath(locator_xpath.userMobileNumber).click().type(mobileNumber);
  }

  enterEmail(email) {
    cy.xpath(locator_xpath.userEmail)
      .click()
      .type(email + generateRandomString(3) + "@yopmail.com");
  }

  enterUserName(userName) {
    cy.xpath(locator_xpath.userUsername).click().type(userName);
  }

  enterNewPassword(passwordField) {
    cy.xpath(locator_xpath.userCreatepassword).click().type(passwordField);
  }

  confirmPasswordField(confirmPasswordText) {
    cy.xpath(locator_xpath.userConfirmpassword)
      .click()
      .type(confirmPasswordText);
  }

  selectUserLocation() {
    cy.xpath(locator_xpath.userLocation).select("Plano");
  }
}

export default CreateUser;
