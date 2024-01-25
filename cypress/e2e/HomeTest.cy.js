import HomePage from "../PageObjects/HomePage"
import Login from "../PageObjects/LoginPage"

describe("Home page test",()=>{

    const login = new Login()
    const home = new HomePage()

    let URL;
    let userName;
    let Password;

    before("Load Config Data",()=>{
        cy.fixture("config").then((data)=>{
            URL = data.url
            userName = data.username
            Password = data.password
        })
    })

    beforeEach("Login to the Orange HRM",()=>{
        cy.visit(URL)
        login.loginToOrangeHRM(userName,Password)
    })

    it("Close and Open Navigation tab test",()=>{
        home.clickOnNavigationDrawrTab()
        cy.get(home.dashboardSearchTbx).should("have.class","oxd-input oxd-input--active toggled")
        home.clickOnNavigationDrawrTab()
        cy.get(home.dashboardSearchTbx).should("be.visible")
    })

    it("Verify Logout test",()=>{
        home.openProfileDropdown()
        home.clickOnLogoutBtn()

        })
  
})