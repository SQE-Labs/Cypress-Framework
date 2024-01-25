import HomePage from "../PageObjects/HomePage"
import Login from "../PageObjects/LoginPage"
import MyInfoPage from "../PageObjects/MyInfoPage";

describe("My Info Test",()=>{

    const home = new HomePage();
    const login = new Login();
    const myInfo = new MyInfoPage();

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

    beforeEach("Login To Orange HRM",()=>{
        cy.visit(URL)
        login.loginToOrangeHRM(userName,Password)
    })

    it("Update Name and Date of birth" ,()=>{
        home.clickOnMyInfoTab()
        myInfo.enterFirstName("George")
        myInfo.enterLastName("King")
        myInfo.selectDateOfBirth("15", "January", "1995" )
        myInfo.clickOnSaveBtn()
        cy.get(myInfo.toastMessageBox).should("have.text","Successfully Updated")
    })
})