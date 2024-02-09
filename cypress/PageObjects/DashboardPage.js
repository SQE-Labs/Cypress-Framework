class DashboardPage{

    adminsTab = "#Admins"

    clickOnAdminsTab(){
        cy.get(this.adminsTab,{ timeout: 10000 }).should("be.visible").click()
    }
}
export default DashboardPage;