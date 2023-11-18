const TGBasePage = require('./TGBasePage')

class TGHtmlElementsPage extends TGBasePage {
    getButtons(){
        return cy.get('#register_button, #signin_button')
    }

    getButtonMessage(){
        return cy.get('.is-block')
    }

    clickButtonByText(buttonName){
        this.getButtons().contains(buttonName).click()
    }


}

module.exports = TGHtmlElementsPage