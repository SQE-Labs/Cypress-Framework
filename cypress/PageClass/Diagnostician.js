import User from "../PageClass/CreateUser";

const locator_xpath = require("../locators/xpath/superadmin.json");
const createUser = new User();

class Diagnostician {
  clickDiagnosticianCreationTab() {
    cy.xpath(locator_xpath.diagnosticianTab).click();
  }

  clickOnOpeningDiagnosticianCreation() {
    cy.xpath(locator_xpath.diagnosticianCreationForm).click();
  }

  createDiagnostician(
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

  clickOnCreateDiagnostician() {
    cy.xpath(locator_xpath.diagnosticianCreationSubmission).click();
  }

  verifyDiagnosticianOnDashboard(diagnosticianCreated) {
    cy.xpath(locator_xpath.diagnosticianListUsername).should(
      "have.text",
      diagnosticianCreated
    );
  }
}
export default Diagnostician;
