Feature: Interaction with the TechGlobal Training Frontend

    Scenario: Validate HTML Elements card, Register and Sign In Buttons
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user click on the 'Register' button
        Then the text under it should be 'You clicked on “Register”'
        When user click on the 'Sign in' button
        Then the text under it should be 'You clicked on “Sign in”'


    Scenario: Validate HTML Elements card, Interact with text inputs - Choose options from dropdown menus
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user click on the 'Html Elements' card
        Then user should see the 'Html Elements' page heading
        Then the URL should contain 'elements'
        When user select "Apple" from the first dropdown menu
        And user select "Microsoft" from the second dropdown menu
        Then "Apple" should be the selected option in the first dropdown
        And "Microsoft" should be the selected option in the second dropdown