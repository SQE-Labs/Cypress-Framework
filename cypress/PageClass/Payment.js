class Payment {
  clickPaymentsOpeningTab() {
    cy.xpath(locator_xpath.paymentsTab).click();
  }

  verifyUserOnPaymentDashboard() {
    cy.xpath(locator_xpath.paymentsDashboard).should("have.text", "Payments");
  }

  clickOnSearchPayments() {
    cy.xpath(locator_xpath.paymentSearch).click();
  }

  verifyPaymentsDetailOnDashboard(directorCreated) {
    cy.xpath(locator_xpath.directorListUsername).should(
      "have.text",
      directorCreated
    );
  }
}
export default { Payment };
