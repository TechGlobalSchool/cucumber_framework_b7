Feature: Interaction with the TechGlobal Training Frontend

    Scenario: Validate HTML Elements card, Register and Sign In Buttons
        Given user navigates to 'https://techglobal-training.com/frontend'
        When I click on the 'Html Elements' card
        Then I should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When I click on the 'Register' button
        Then the text under it should be 'You clicked on “Register”'
        When I click on the 'Sign in' button
        Then the text under it should be 'You clicked on “Sign in”'