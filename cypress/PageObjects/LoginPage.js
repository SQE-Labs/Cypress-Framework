class Login{

    // Locators (CSS Selectors)
    userNameTbx = ""
    userNameTbx = "[name='username']"
    pwdTbx = '[name="password"]'
    loginBtn = ".orangehrm-login-button"
    validationMsg = "div.oxd-alert-content > p"
    mandatoryFieldmsg = "span.oxd-input-field-error-message"

    enterUserName(username){
        cy.get(this.userNameTbx).type(username)
    }

    enterPassword(password){
        cy.get(this.pwdTbx).type(password)
    }

    clickOnLoginBtn(){
        cy.get(this.loginBtn).click()
    }

    // Login to Orange HRM web application
    loginToOrangeHRM(username,password){
        this.enterUserName(username)
        this.enterPassword(password)
        this.clickOnLoginBtn()
    }
}
export default Login;