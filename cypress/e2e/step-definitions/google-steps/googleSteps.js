const { When } = require('@badeball/cypress-cucumber-preprocessor')


When(/^user search for "([^"]*)"$/, (search) => {
    cy.get('[name="q"]').type(search + '{enter}')

})