import User from "../PageClass/CreateUser";

const locator_xpath = require("../locators/xpath/superadmin.json");
const createUser = new User();

class Director {
  clickDirectorCreationTab() {
    cy.xpath(locator_xpath.directorTab).click();
  }

  clickOnOpeningDirectorCreation() {
    cy.xpath(locator_xpath.directorCreationForm).click();
  }

  createDirector(
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
    createUser.selectUserLocation();
    createUser.enterUserName(userName);
    createUser.enterNewPassword(password);
    createUser.confirmPasswordField(confirmPassword);
  }

  clickOnCreateDirector() {
    cy.xpath(locator_xpath.directorCreationSubmission).click();
  }

  verifyDirectorOnDashboard(directorCreated) {
    cy.xpath(locator_xpath.directorListUsername).should(
      "have.text",
      directorCreated
    );
  }
}

export default Director;
