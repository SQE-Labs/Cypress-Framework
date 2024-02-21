import { before } from "mocha";
import Login from "../../PageClass/Login";
import "../../support/commands";

const startTime = Date.now();
describe("Validate User is Register", () => {
  const loginobj = new Login();
  beforeEach(() => {
    // Launch the application URL
    cy.visit("https://topuptalent.com/Diagnosticlearning/#/");
    cy.logger("application", "Launched Application-->Login Test");
    cy.fixture("Testdata").then((registerUserdata) => {
      // loginobj.clickLogin();
      loginobj.setUserName(registerUserdata.UserName);
      loginobj.setPassword(registerUserdata.UserPassword);
      cy.logger("application", "Entered User Details-->Login Test");
      loginobj.clickLoginbtn();
    });
  });

  it("Verify User is able to login", () => {
    // loginobj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
    loginobj.verifyUserOnDashboard();
    cy.logger("application", "Validated SuperAdmin on Dashboard-->Login Test");
    const loadTime = Date.now() - startTime;
    cy.logger("performance", `TotalTime taken to LoginUser: ${loadTime}ms`);
  });
});
