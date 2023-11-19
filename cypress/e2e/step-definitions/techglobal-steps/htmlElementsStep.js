const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()



When('user click on the {string} card', (cardName) => {
    cy.contains(cardName).click()
})


Then('user should see the {string} page heading', (headingText) => {
    tgHtmlElementsPage.getHeading().should('have.text', headingText)
})


Then('the URL should contain {string}', (url) => {
    cy.url().should('contain', url)
})


When('user click on the {string} button', (button) => {
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


When(/^user select "([^"]*)" from the first dropdown menu$/, (dropdownOption) => {
	tgHtmlElementsPage.getFirstDropdown().select(dropdownOption)
})

When(/^user select "([^"]*)" from the second dropdown menu$/, (dropdownOption) => {
    tgHtmlElementsPage.getSecondDropdown().select(dropdownOption)

})

Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (value) => {
	tgHtmlElementsPage.getFirstDropdown().should('have.value', value)
})

Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (value) => {
    tgHtmlElementsPage.getSecondDropdown().should('have.value', value)
})

