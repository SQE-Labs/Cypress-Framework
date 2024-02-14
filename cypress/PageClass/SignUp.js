const locator_xpath = require("../locators/xpath/xpath.json");

class SignUp
{

    clickSignUp()
    {
        cy.xpath(locator_xpath.registerbtn).click();
        cy.xpath("//h5[.='Sign up']").should('be.visible');
    }
    
    setUserName(username)
    {
        cy.xpath(locator_xpath.txtusername).click().type(username);
    }
    setPassword(password)
    {
        cy.xpath(locator_xpath.txtpassword).click().type(password);
    }

    clickSubmit()
    {
        cy.xpath(locator_xpath.signUpbtn).click();
    }
    verifySuccessMsg(successMsg)
    {
     cy.on('window:alert',(t)=>{
        expect(t).to.contains(successMsg);
     })   
    }

    verifyUserexist(userExistMsg)
    {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(userExistMsg);
         })
    }

    verifyInvalidData(InvalidDataMsg)
    {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(InvalidDataMsg);
         })
    }
}

export default SignUp;