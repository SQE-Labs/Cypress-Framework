import Login from "../../../PageClass/Login";
import "../../../support/commands";
import {
  generateRandomString,
  generateRandomNumber,
} from "../../../support/utils";

const startTime = Date.now();
const loginObj = new Login();

describe("Validate User is Register", () => {
  beforeEach(() => {
    // Launch the application URL
    cy.visit("https://topuptalent.com/Diagnosticlearning/#/");
    cy.logger("application", "Launched Application-->Login Test");
    cy.fixture("Testdata").then((registerUserdata) => {
      // loginObj.clickLogin();
      cy.wait(3000);
      loginObj.setUserName(registerUserdata.UserName);
      loginObj.setPassword(registerUserdata.UserPassword);
      cy.logger("application", "Entered User Details-->Login Test");
      loginObj.clickLoginbtn();
    });
  });

  it("Verify User is able to login", () => {
    cy.wait(3000);
    loginObj.verifyUserOnDashboard();
    cy.logger("application", "Validated SuperAdmin on Dashboard-->Login Test");
    const loadTime = Date.now() - startTime;
    cy.logger("performance", `TotalTime taken to LoginUser: ${loadTime}ms`);
  });

  it("Super Admin creates new Admin", () => {
    cy.fixture("admin").then((adminData) => {
      const username = adminData.userName + generateRandomString(3);
      loginObj.clickAdminCreationTab();
      loginObj.clickOnOpeningAdminCreation();
      loginObj.createAdmin(
        adminData.adminFirstName,
        adminData.adminLastName,
        adminData.adminMobileNumber,
        adminData.adminEmail,
        username,
        adminData.password,
        adminData.confirmPassword
      );
      cy.logger(
        "application",
        "Form Filled for Admin creation on Dashboard-->Admin Creation"
      );
      loginObj.clickOnCreateAdmin();
      // loginObj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
      cy.wait(3000);
      loginObj.verifyAdminOnDashboard(username);
      cy.logger(
        "application",
        "Validated SuperAdmin on Dashboard-->Login Test"
      );
      cy.logger(
        "application",
        "Clicked on Admin Creating button -->Admin Creation"
      );
      const loadTime = Date.now() - startTime;
      cy.logger("performance", `TotalTime taken to LoginUser: ${loadTime}ms`);
    });
  });
});
