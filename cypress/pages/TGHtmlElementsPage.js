const TGBasePage = require('./TGBasePage')

class TGHtmlElementsPage extends TGBasePage {
    getButtons(){
        return cy.get('#register_button, #signin_button')
    }

    getButtonMessage(){
        return cy.get('.is-block')
    }

    getFirstDropdown(){
        return cy.get('#company_dropdown1')
    }

    getSecondDropdown(){
        return cy.get('#company_dropdown2')
    }

    clickButtonByText(buttonName){
        this.getButtons().contains(buttonName).click()
    }


}

module.exports = TGHtmlElementsPage