class DashboardPage{

    adminsTab = "#Admins"
    logoutBtn = "a.text-danger"
    superAdminHeader = "[class='name'] h6"
    directorTab = "#Directors"

    clickAdminsTab(){
        cy.get(this.adminsTab).should("be.visible").click()
    }

    clickLogoutBtn(){
        cy.get(this.logoutBtn).click()
    }
    
    clickDirectorTab(){
        cy.get(this.directorTab).click()
    }
}
export default DashboardPage;