import DashboardPage from "../PageObjects/DashboardPage";
import Login from "../PageObjects/LoginPage";
import AdminPage from "../PageObjects/AdminPage";
import {generateRandomString,generateRandomNumber} from "../support/utils"

describe("Super Admin Test ",()=>{
    const login = new Login();
    const dashboard = new DashboardPage();
    const adminPage = new AdminPage();

    let adminFirstName
    let adminLastName 
    let adminEmailAddress
    let adminUserName
    let admin_cell_Number

    beforeEach("Navigate to Login opage",()=>{
        cy.visit("https://topuptalent.com/Diagnosticlearning/#/")
        login.fillUserName("tim");
        login.fillPassword("123456");
        login.clickOnLoginBtn();
    })

    afterEach("Logout",()=>{
        cy.get("a.text-danger",{timeout:20000}).click({force: true})
    })

    it("Verify that SuperAdmin is able to View AdminList page or not", ()=> {
        cy.url().should("contain","/dashboard");
    })

    it("Verify that SuperAdmin is able to create Admin or not", ()=>{ 
       adminFirstName = "AU_Ayla" + generateRandomString(3);
       adminLastName = "AU_Ari" + generateRandomString(3);
       adminEmailAddress = "AU_"+ generateRandomString(3) + "@yopmail.com";
       adminUserName = "AU_Flyn" + generateRandomString(3);
       admin_cell_Number = generateRandomNumber(10);
       dashboard.clickOnAdminsTab();
       adminPage.createAdmin(adminFirstName,adminLastName,admin_cell_Number,adminEmailAddress,adminUserName,"123456","123456");
       cy.get(adminPage.validationMsgBox).should("have.text","Admin Created Successfully")
    })

    it("SuperAdmin is able to search created admin or not",()=>{
        dashboard.clickOnAdminsTab();
        adminPage.clickOnFilterBtn();
        adminPage.fillSearchBox(adminUserName);
        cy.get("#appointmentTable > tbody > tr:nth-child(1) > td:nth-child(2)").should("have.text",adminUserName)
    })

    it("5.6, 5.7 Super admin is able to edit the created admin or not -Bug raised",()=>{
        let adminEmailAddress1 = "AU_"+ generateRandomString(3) + "12@yopmail.com";
        dashboard.clickOnAdminsTab()
        adminPage.clickOnEditBtn()
        cy.get(adminPage.editUserHeader).should("have.text","Edit User")
        adminPage.editAdmin(adminEmailAddress1,"12345678")
        cy.get(adminPage.validationMsgBox).should("have.text","Admin details updated successfully.")
    })

})