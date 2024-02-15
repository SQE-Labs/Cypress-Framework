class DashboardPage{

    adminsTab = "#Admins"

    clickOnAdminsTab(){
        cy.get(this.adminsTab).should("be.visible").click()
    }
}
export default DashboardPage;