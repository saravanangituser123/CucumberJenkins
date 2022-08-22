Feature: check the login adactin functionality 

Scenario: Login Adactin 
Given User is an adactin page 
When User enters credentials and click login button
|Saravanan|password123|
|Devendra|password1234| 
Then Message displayed Login Successfully 