import DashboardPage from "../PageObjects/DashboardPage";
import Login from "../PageObjects/LoginPage";
import AdminPage from "../PageObjects/AdminPage";
import DirectorsPage from "../PageObjects/DirectorsPage"
import {generateRandomString,generateRandomNumber} from "../support/utils"

describe("Super Admin Test ",()=>{
    const login = new Login();
    const dashboard = new DashboardPage();
    const admin = new AdminPage();
    const director = new DirectorsPage()

    let adminFirstName;
    let adminLastName ;
    let adminEmailAddress;
    let adminUserName;
    let admin_cell_Number;
    let directorFirstName;
    let directorLastName;
    let directoCellNumber;
    let directorLocation;
    let directorUsername;
    let directorEmail;

    beforeEach("Navigate to Login opage",()=>{
        cy.visit("https://topuptalent.com/Diagnosticlearning/#/")
        login.fillUserName("tim");
        login.fillPassword("123456");
        login.clickOnLoginBtn();
    })

    // afterEach("Logout",()=>{
    //     dashboard.clickLogoutBtn();
    // })

    it("Verify that SuperAdmin is able to View AdminList page or not", ()=> {
        cy.url().should("contain","/dashboard");
        cy.get(dashboard.superAdminHeader).should("have.text","SUPERADMIN")
    })

    it.only("Verify super admin is able to create Directors",()=>{
        directorFirstName="AU_"+generateRandomString(3) 
        directorLastName= "AU_"+generateRandomString(3);
        directoCellNumber= generateRandomNumber(10);
        directorLocation="Austin";
        directorUsername="AU"+generateRandomString(5)+generateRandomNumber(3);
        directorEmail="AU_"+ generateRandomString(3) + "12@yopmail.com";
        dashboard.clickDirectorTab()
        director.clickCreateDirectorBtn()
        director.createDirector(directorFirstName,directorLastName,directoCellNumber,directorEmail,directorLocation,directorUsername,"123456","123456")
        cy.get(director.searchTbx).type(directorFirstName)
        cy.get("tbody tr td:nth-child(2)").should('have.text',directorUsername)
        
   })

    it("Verify that SuperAdmin is able to create Admin or not", ()=>{ 
       adminFirstName = "AU_Ayla" + generateRandomString(3);
       adminLastName = "AU_Ari" + generateRandomString(3);
       adminEmailAddress = "AU_"+ generateRandomString(3) + "@yopmail.com";
       adminUserName = "AU_Flyn" + generateRandomString(3);
       admin_cell_Number = generateRandomNumber(10);
       dashboard.clickAdminsTab();
       admin.createAdmin(adminFirstName,adminLastName,admin_cell_Number,adminEmailAddress,adminUserName,"123456","123456");
       cy.get(admin.validationMsgBox).should("have.text","Admin Created Successfully")
    })

    

    it("SuperAdmin is able to search created admin or not",()=>{
        dashboard.clickAdminsTab();
        admin.fillSearchBox(adminUserName);
        // Validation for successful creation of admin
        cy.get(admin.firstUsernameOfTable).should("have.text",adminUserName)
    })

    it("5.6, 5.7 Super admin is able to edit the created admin or not -Bug raised",()=>{
        let adminEmailAddress1 = "AU_"+ generateRandomString(3) + "12@yopmail.com";
        dashboard.clickAdminsTab()
        admin.fillSearchBox(adminFirstName)
        admin.clickOnEditBtn()
        cy.get(admin.editUserHeader).should("have.text","Edit User")
        admin.editAdmin(adminEmailAddress1,"12345678")
        admin.fillSearchBox(adminFirstName)
        cy.get("tbody tr td:nth-child(4)").should("have.text",adminEmailAddress1)
    })

    it("Verify super admin is able to create Directors",()=>{
         directorFirstName="AU_"+generateRandomString(3) 
         directorLastName= "AU_"+generateRandomString(3);
         directoCellNumber= generateRandomNumber(10);
         directorLocation="Austin";
         directorUsername="AU"+generateRandomString(5)+generateRandomNumber(3);
         directorEmail="AU_"+ generateRandomString(3) + "12@yopmail.com";
         dashboard.clickDirectorTab()
         director.clickCreateDirectorBtn()
         director.createDirector(directorFirstName,directorLastName,directoCellNumber,directorEmail,directorLocation,directorUsername,"123456","123456")
         
    })

})