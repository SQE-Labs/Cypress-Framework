import Login from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Login Page test ",()=>{
    const login = new Login();
    const home = new HomePage();

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

    beforeEach("Navigate to Login opage",()=>{
        cy.visit(URL)
    })

    it("Validation for empty username and empty password",()=>{
         login.clickOnLoginBtn()
         cy.get(login.mandatoryFieldmsg).first().should("have.text","Required")
         cy.get(login.mandatoryFieldmsg).last().should("have.text","Required")
    })
    
    it("Validation for Invalid Username and Invalid password",()=>{
        login.enterUserName("admin")
        login.enterPassword("admin1234")
        login.clickOnLoginBtn()
        cy.get(login.validationMsg).should('have.text',"Invalid credentials")
    })

    it("Verify Successful login",()=>{
        login.enterUserName(userName)
        login.enterPassword(Password)
        login.clickOnLoginBtn()
        cy.get(home.pageHeader).should("have.text","Dashboard")
    })
})