		JavaScript
		Cypress
		npm
		TDD
		package.json
		e2e test file
		pages (POM)
		commands
		cypress.config.js
		assets folder
		CI/CD
		Git

		Reports
		Hooks
		ESLint
		Fixtures



		In our framework, JavaScript is the core programming language, and we design all tools around it. We use NodeJS for managining dependencies through npm. The package.json file in our framework contains meta data about the project, dependencies and their versions, and scripts for running tests. These scripts are defining browsers and options for our tests, helping us to do cross-browser testing, and managining environemnts and configurations inside the cypress.config.js

		We use Cypress for UI test automation, using its features for validations and assertions as well as as its browser features. Our framework is based on TDD, prioritizing writing automation scripts.
		Our tests are organized in e2e folder, and it includes some different testing types like smoke, integrationg, regression and end-to-end.

		We're using the Page Object model (POM) design pattern, which helping us to centralize page-related locators and methods inside the pages folder. With the help of this approach, we use inheritance to build relationship between pages to provide reusability. Additinoaly, custom commands are stored in commands.js to further our frameowrk efficiency.

		In framework. we use fixtures for efficient test data management. Stored in the fixtures folder in JSON format, it allow us to seperate test logic from the data, which improves maintainibility in the framework.

		We use cypress-grep for effective test grouping. This tool allows us to select the specific tests and run those tests based on specific configurations which improves our CLI integration

		We also using hooks like before, beforeEach, after, and afterEach in our testing framework that helping us to setup our tests, and readibility.

		We use Mochawesome reports for generating detailed HTML reports. These reports provide clear information about test outcomes, helping in better tracking and analysing test results.

		All configurations related to our framework, including timeouts, test retries, and browser configurations are centralized in the cypress.config.js file.

		Additionaliy, we use ESLint to maintain code quality and same standart all over the framework. It is helping us to ensure consistency.

		We are using BitBucket as version control system. We execute 2 important suites in our frameowrk which are Smoke, and Regression and they are integrated to our CI/CD. We are using Jenkins as a CI/CD tool and we currently have 12 smoke tests, and 365 regressions that are running on CI/CD
		
		We are running smoke tests every day 8 AM in the morning while we are running our Regression suite at the end of each sprint, or triggered after any hotfix.




















		BDD
		JavaScript
		Cypress
		Cucumber
		npm
		package.json
		Step defs
		Feature file
		pages (POM)
		commands
		cypress.config.js
		assets folder
		CI/CD
		Git

		Reports
		Hooks
		ESLint

		In our our framework, we are implement behavior-driven development with the help of Cucumber. Cucumber use of Gherkin syntax in feature files allows us to define test cases in more readable format and make it easy to understand for non-technical members in the company. This approach closes the gap between technical, and non-tech people.

		We use JavaScript is the core programming language, and we design all tools around it. We use NodeJS for managining dependencies through npm. The package.json file in our framework contains meta data about the project, dependencies and their versions, and scripts for running tests. These scripts are defining browsers and options for our tests, helping us to do cross-browser testing, and managining environemnts and configurations inside the cypress.config.js

		We're using the Page Object model (POM) design pattern, which helping us to centralize page-related locators and methods inside the pages folder. With the help of this approach, we use inheritance to build relationship between pages to provide reusability. Additinoaly, custom commands are stored in commands.js to further our frameowrk efficiency.

		We don't use fixtures to store test data in the framework, instead using cucumber, test-data is embedded directly with the feature files. This method makes each test case straightforward, with scenarios and their corresponsing data. Also, unlike traditional Cucumber frameworks, we are not using Cucumber as a main runner, so that's why we are not needing to use seperate runner file, we use CLI command to execute any test run.

		Then we have step-definitions folder which is code representation of our feature file to automate our test cases written in the Gherkin format.

		For test grouping, we use tags in Cucumber, to target specific test cases in the feature file.

		Our reporting is handled throguh Cucumbers built-in reporting tool, that offers different type of reports like JSON and HTML which improves readable results of our feature files in Gherkin and making it easy to read anyone who wants to reach to reports. With this one, we also implement multiple-cucumber-html-reporter to get another report in the framework, which is much more detailed compared to Cucumber built-in report.

		All configurations related to our framework, including timeouts, test retries, and browser configurations are centralized in the cypress.config.js file.

		Additionaliy, we use ESLint to maintain code quality and same standart all over the framework. It is helping us to ensure consistency.
		
		We are running smoke tests every day 8 AM in the morning while we are running our Regression suite at the end of each sprint, or triggered after any hotfix.




	
