import User from "../PageClass/CreateUser";

const locator_xpath = require("../locators/xpath/superadmin.json");
const createUser = new User();

class Admin {
  clickAdminCreationTab() {
    cy.xpath(locator_xpath.adminTab).click();
  }

  clickOnOpeningAdminCreation() {
    cy.xpath(locator_xpath.adminCreationForm).click();
  }

  createAdmin(
    firstName,
    lastName,
    mobileNumber,
    email,
    userName,
    password,
    confirmPassword
  ) {
    createUser.enterFirstName(firstName);
    createUser.enterLastName(lastName);
    createUser.enterMobileNumber(mobileNumber);
    createUser.enterEmail(email);
    createUser.enterUserName(userName);
    createUser.enterNewPassword(password);
    createUser.confirmPasswordField(confirmPassword);
  }

  clickOnCreateAdmin() {
    cy.xpath(locator_xpath.adminCreationSubmission).click();
  }

  verifyAdminOnDashboard(adminCreated) {
    cy.xpath(locator_xpath.adminListUsername).should("have.text", adminCreated);
  }
}

export default Admin;
