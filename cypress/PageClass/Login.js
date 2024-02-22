const locator_xpath = require("../locators/xpath/superadmin.json");

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

  clickDiagnosticianCreationTab() {
    cy.wait(2000);
    cy.xpath(locator_xpath.diagnosticiansTab).click();
  }

  chooseDiagostisianLocation() {
    cy.xpath(locator_xpath.chooseDiagnosticianLocation).click();
  }

  clickDirectorCreationTab() {
    cy.wait(2000);
    cy.xpath(locator_xpath.directorTab).click();
  }
}

export default Login;
