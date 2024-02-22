import Login from "../../../PageClass/Login";
import Admin from "../../../PageClass/Admin";
import Diagnostician from "../../../PageClass/Diagnostician";
import Director from "../../../PageClass/Director";
import "../../../support/commands";
import {
  generateRandomString,
  generateRandomNumber,
} from "../../../support/utils";

const startTime = Date.now();
const loginObj = new Login();
const adminObj = new Admin();
const diagnosticianObj = new Diagnostician();
const directorObj = new Director();

describe("Validate User is Register", () => {
  beforeEach(() => {
    // Launch the application URL
    cy.visit("https://topuptalent.com/Diagnosticlearning/#/");
    cy.logger("application", "Launched Application-->Login Test");
    cy.fixture("login").then((registerUserdata) => {
      // loginObj.clickLogin();
      cy.wait(3000);
      loginObj.setUserName(registerUserdata.superAdminName);
      loginObj.setPassword(registerUserdata.superAdminPassword);
      cy.logger("application", "Entered User Details-->Login Test");
      loginObj.clickLoginbtn();
    });
  });

  it("Verify User is able to login", () => {
    cy.wait(6000);
    loginObj.verifyUserOnDashboard();
    cy.logger("application", "Validated SuperAdmin on Dashboard-->Login Test");
    const loadTime = Date.now() - startTime;
    cy.logger("performance", `TotalTime taken to LoginUser: ${loadTime}ms`);
  });

  it("Super Admin creates new Admin", () => {
    cy.fixture("admin").then((adminData) => {
      cy.wait(3000);
      const username = adminData.adminUserName + generateRandomString(3);
      adminObj.clickAdminCreationTab();
      adminObj.clickOnOpeningAdminCreation();
      adminObj.createAdmin(
        adminData.adminFirstName,
        adminData.adminLastName,
        adminData.adminMobileNumber,
        adminData.adminEmail,
        username,
        adminData.adminPassword,
        adminData.adminConfirmPassword
      );
      cy.logger(
        "application",
        "Form Filled for Admin creation on Dashboard-->Admin Creation"
      );
      adminObj.clickOnCreateAdmin();
      cy.logger(
        "application",
        "Clicked on Admin Creating button -->Admin Creation"
      );
      // loginObj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
      cy.wait(3000);
      adminObj.verifyAdminOnDashboard(username);
      cy.logger(
        "application",
        "Validated SuperAdmin on Dashboard-->Admin Creation"
      );
    });
  });

  it("Super Admin creates new Diagnostician", () => {
    cy.fixture("diagnostician").then((diagnosticianData) => {
      cy.wait(3000);
      const username =
        diagnosticianData.diagnosticianUserName + generateRandomString(3);
      diagnosticianObj.clickDiagnosticianCreationTab();
      diagnosticianObj.clickOnOpeningDiagnosticianCreation();
      diagnosticianObj.createDiagnostician(
        diagnosticianData.diagnosticianFirstName,
        diagnosticianData.diagnosticianLastName,
        diagnosticianData.diagnosticianMobileNumber,
        diagnosticianData.diagnosticianEmail,
        username,
        diagnosticianData.diagnosticianPassword,
        diagnosticianData.diagnosticianConfirmPassword
      );
      cy.logger(
        "application",
        "Form Filled for Diagnostician creation on Dashboard-->Diagnostician Creation"
      );
      diagnosticianObj.clickOnCreateDiagnostician();
      cy.logger(
        "application",
        "Clicked on Diagnostician Creating button -->Diagnostician Creation"
      );
      // loginObj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
      cy.wait(3000);
      diagnosticianObj.verifyDiagnosticianOnDashboard(username);
      cy.logger(
        "application",
        "Validated  newly created Diagnostician on Dashboard-->Diagnostician Test"
      );
    });
  });

  it("Super Admin creates new Director", () => {
    cy.fixture("director").then((directorData) => {
      cy.wait(3000);
      const username = directorData.directorUserName + generateRandomString(3);
      directorObj.clickDirectorCreationTab();
      directorObj.clickOnOpeningDirectorCreation();
      directorObj.createDirector(
        directorData.directorFirstName,
        directorData.directorLastName,
        directorData.directorMobileNumber,
        directorData.directorEmail,
        username,
        directorData.directorPassword,
        directorData.directorConfirmPassword
      );
      cy.logger(
        "application",
        "Form Filled for Director creation on Dashboard-->Director Creation"
      );
      directorObj.clickOnCreateDirector();
      // loginObj.verifyLoginSuccessMsg(registerUserdata.loginmsg);
      cy.wait(3000);
      directorObj.verifyDirectorOnDashboard(username);
      cy.logger(
        "application",
        "Validated Director on Dashboard-->Director Test"
      );
      cy.logger(
        "application",
        "Clicked on Director Creating button -->Director Creation"
      );
    });
  });
});
