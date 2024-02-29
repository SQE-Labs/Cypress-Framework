describe("Actions performed by Diagnostician", () => {
  beforeEach(() => {
    cy.visit("https://topuptalent.com/Diagnosticlearning/#/");
    cy.logger("application", "Launched Application--> Diagonstician");
    cy.fixture("login").then((registerAdminUser) => {});
  });
});
