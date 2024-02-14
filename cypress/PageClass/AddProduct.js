const locator_xpath = require("../locators/xpath/xpath.json");

class AddProduct {

  addProduct() {
    cy.xpath(locator_xpath.phonesbtn).click();
    cy.xpath(locator_xpath.mobile).click();
    cy.xpath(locator_xpath.price).should("have.text", "$360 *includes tax");
    cy.xpath(locator_xpath.addtoCart).click();
    cy.xpath(locator_xpath.cart).click();
    cy.xpath(locator_xpath.totalprice).should("have.text", "360");
    cy.wait(2500);
    cy.xpath("//div[@id='page-wrapper']").screenshot();
    cy.xpath(locator_xpath.placeOrder).click();
    cy.logger("application", "Product Added to Cart and Placed Order");
  }
  enterName(data) {
    cy.xpath(locator_xpath.name).click().type(data);
  }
  entercountry(data) {
    cy.xpath(locator_xpath.country).click().type(data);
  }
  entercity(data) {
    cy.xpath(locator_xpath.city).click().type(data);
  }
  entercard(data) {
    cy.xpath(locator_xpath.card).click().type(data);
  }
  entermonth(data) {
    cy.xpath(locator_xpath.month).click().type(data);
  }
  enteryear(data) {
    cy.xpath(locator_xpath.year).click().type(data);

    cy.xpath("//div[@id='page-wrapper']").screenshot();
  }
  clickPurchase() {
    cy.xpath(locator_xpath.purchasebtn).click();
    cy.logger("application", "User detaile entered & Clicked On Purchased");
  }
  validateOrder() {
    cy.xpath(locator_xpath.thankmsg).should("have.text", "Thank you for your purchase!");
    cy.xpath(locator_xpath.orderdetails).then(($value) => {
      let orderid = $value.text();
      cy.logger("application", "Order Id :" + orderid);
    });
    cy.xpath(locator_xpath.orderdetails).screenshot("OrderPurchased");
    cy.xpath(locator_xpath.okbtn).click();
    cy.xpath(locator_xpath.logout).click({ force: true });
    cy.xpath(locator_xpath.login).should("have.text", "Log in");
    cy.logger("application", "Validated Order & Logout");
  }
}
export default AddProduct;
