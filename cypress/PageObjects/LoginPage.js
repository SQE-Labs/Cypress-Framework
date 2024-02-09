class Login{

    // Locators (CSS Selectors)
    userNameTbx = "[placeholder='Username']"
    pwdTbx = "[placeholder='Password']"
    loginBtn = "#loginFormSubmit"
    validationMsg = "div.oxd-alert-content > p"
    mandatoryFieldmsg = "span.oxd-input-field-error-message"

    fillUserName(username){
        cy.get(this.userNameTbx).type(username)
    }

    fillPassword(password){
        cy.get(this.pwdTbx).type(password)
    }

    clickOnLoginBtn(){
        cy.get(this.loginBtn).click()
    }

    // Login to Orange HRM web application
    loginToDiagnosticLearning(username,password){
        this.fillUserName(username)
        this.fillPassword(password)
        this.clickOnLoginBtn()
    }
}
export default Login;