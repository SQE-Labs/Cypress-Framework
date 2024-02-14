const locator_xpath = require("../locators/xpath/xpath.json");

class Login {
  clickLogin() {
    cy.xpath(locator_xpath.loginbtn).click();
    cy.xpath("//h5[.='Log in']").should("be.visible");
  }

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
}

export default Login;
