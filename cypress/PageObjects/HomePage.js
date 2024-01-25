class HomePage{

    pageHeader = "span.oxd-topbar-header-breadcrumb"
    profileDropdown = "li.oxd-userdropdown"
    logoutBtn = "ul.oxd-dropdown-menu > li:nth-child(4)"
    navigationDrawerTabBtn = "button.oxd-icon-button.oxd-main-menu-button"
    dashboardSearchTbx = ".oxd-input.oxd-input--active"
    myInfoTab = 'My Info'

    clickOnLogoutBtn(){
        cy.get(this.logoutBtn).click()
    }

    openProfileDropdown(){
        cy.get(this.profileDropdown).click()
    }

    clickOnNavigationDrawrTab(){
        cy.get(this.navigationDrawerTabBtn).click()
    }

    clickOnMyInfoTab(){
        cy.contains(this.myInfoTab).click()
    }
}
export default HomePage;