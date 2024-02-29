class Appointments {
  clickOnAppointmentOpeningTab() {
    cy.xpath(locator_xpath.directorTab).click();
  }

  clickOnViewAll() {
    cy.xpath(locator_xpath.directorTab).click();
  }

  verifyUserOnAppointmentPage() {
    cy.xpath(locator_xpath.directorTab).click();
  }

  searchForAppointmentOnDashboard() {
    cy.xpath(locator_xpath.directorTab).click();
  }

  verifyAppointmentDetailOnDashboard(appointment) {
    cy.xpath(locator_xpath.directorListUsername).should(
      "have.text",
      appointment
    );
  }
}

export { Appointments };
