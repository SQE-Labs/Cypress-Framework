class AdminPage{

    createAdminBtn = "[class='theme-button']"
    firstNameTbx = "[placeholder='First Name']"
    lastNameTbx = "[placeholder='Last Name']"
    phoneNumberTbx = "input[placeholder='Cell Number']"
    emailTbx = "[placeholder='Email']"
    userNameTbx = "[formcontrolname='username']"
    createPasswordTbx = "[formcontrolname='password']"
    confirmPasswordTbx = "[placeholder='Confirm Password']"
    createAdminSubmitBtn = "[class='theme-button float-md-right']"
    validationMsgBox = "div.alert-success"
    filterBtn = ".page-header.d-flex.align-items-center > a"
    searchBox = "[type='search']"
    editBtn = "[data-target='#editDiaInfo']"
    editUserHeader = "h5.text-green"
    editEmailTbx = "[formcontrolname='email']"
    editPasswordTbx = "[formcontrolname='password']"
    editConfirmPasswordTbx = "div.col-lg-4.col-md-6:nth-child(7) input"
    toggleBtn = "[class='slider round']"
    updateBtn = "#createDiagnosticianFormSubmit"
    firstUsernameOfTable = "tbody tr td:nth-child(2)"

    clickOnCreateAdmin(){
        cy.get(this.createAdminBtn).click()
    }

    fillFirstName(firstName){
        cy.get(this.firstNameTbx).type(firstName)
    }

    fillLastName(lastName){
        cy.get(this.lastNameTbx).type(lastName)
    }

    fillPhoneNumber(phoneNumber){
        cy.get(this.phoneNumberTbx).type(phoneNumber)
    }

    fillEmail(email){
        cy.get(this.emailTbx).type(email)
    }

    fillUserName(userName){
        cy.get(this.userNameTbx).type(userName)
    }

    fillCreatePassword(createPassword){
        cy.get(this.createPasswordTbx).type(createPassword)
    }

    fillConfirmPassword(confirmPassword){
        cy.get(this.confirmPasswordTbx).type(confirmPassword)
    }

    clickOnCreateAdminSubmitBtn(){
        cy.get(this.createAdminSubmitBtn).click()
    }

    createAdmin(firstName,lastName,phoneNumber,email,userName,createPassword,confirmPassword){
        this. clickOnCreateAdmin()
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillPhoneNumber(phoneNumber)
        this.fillEmail(email)
        this.fillUserName(userName)
        this.fillCreatePassword(createPassword)
        this.fillConfirmPassword(confirmPassword)
        this.clickOnCreateAdminSubmitBtn()
    }

    clickOnFilterBtn(){
        cy.get(this.filterBtn).click()
    }

    fillSearchBox(searchText){
        cy.get(this.searchBox).type(searchText)
    }

    clickOnEditBtn(){
        cy.get(this.editBtn).first().click()
    }

    fillEditEmailTbx(newEmail){
        cy.get(this.editEmailTbx).clear() 
        cy.wait(1000)
        cy.get(this.editEmailTbx).type(newEmail) 
    }

    fillEditPasswordField(newPassword){
        cy.get(this.editPasswordTbx).type(newPassword)
    }

    fillEditConfirmPasswordTbx(newPassword){
        cy.get(this.editConfirmPasswordTbx).type(newPassword)
    }

    clickOnToggle(){
        cy.get(this.toggleBtn).click()
    }

    clickOnUpdateBtn(){
        cy.get(this.updateBtn).click()
    }

    editAdmin(newEmail,newPassword){
        cy.wait(1000)
        this.fillEditEmailTbx(newEmail)
        cy.wait(1000)
        this.fillEditPasswordField(newPassword)
        cy.wait(1000)
        this.fillEditConfirmPasswordTbx(newPassword)
        this.clickOnToggle()
        this.clickOnUpdateBtn()
    }

}

export default AdminPage;