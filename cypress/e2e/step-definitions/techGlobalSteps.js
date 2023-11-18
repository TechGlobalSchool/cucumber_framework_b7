const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()



When('I click on the {string} card', (cardName) => {
    cy.contains(cardName).click()
})


Then('I should see the {string} page heading', (headingText) => {
    tgHtmlElementsPage.getHeading().should('have.text', headingText)
})


Then('the URL should contain {string}', (url) => {
    cy.url().should('contain', url)
})


When('I click on the {string} button', (button) => {
    switch (button) {
        case 'Register':
        case 'Sign in':
            tgHtmlElementsPage.clickButtonByText(button)
            break
        default:
    }
})


Then('the text under it should be {string}', (message) => {
    tgHtmlElementsPage.getButtonMessage().should('have.text', message)
})

