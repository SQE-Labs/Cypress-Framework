class MyInfoPage{

    //locators
    firstNameTbx = '[name="firstName"]'
    lastNameTbx = '[placeholder="Last Name"]'
    middleNameTbx = '[name="middleName"]'
    dobDatePicker = "form.oxd-form>div:nth-of-type(3) input[placeholder='yyyy-mm-dd']"
    dobMonthDropdown = "li.oxd-calendar-selector-month"
    dobYearDropDown = "li.oxd-calendar-selector-year"
    saveBtn = "form.oxd-form > div:nth-of-type(5) button"
    toastMessageBox = "p.oxd-text--toast-message"

    //Actions
    enterFirstName(firstName){
        cy.get(this.firstNameTbx).type(firstName)
    }

    enterLastName(lastName){
        cy.get(this.lastNameTbx).type(lastName)
    }

    selectDateOfBirth(day,month,year){
        cy.get(this.dobDatePicker).click()
        cy.get(this.dobMonthDropdown).click()
        cy.get(".oxd-calendar-dropdown--option").contains(month).click()  //Select Month
        cy.get(this.dobYearDropDown).click()
        cy.get(".oxd-calendar-dropdown--option").contains(year).click()   //Select Year
        cy.get(`div.oxd-calendar-date`).contains(day).click()
    }

    clickOnSaveBtn(){
        cy.get(this.saveBtn).click()
    }



}
export default MyInfoPage;