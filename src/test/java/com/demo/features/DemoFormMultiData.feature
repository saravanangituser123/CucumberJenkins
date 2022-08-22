Feature: Check the Demo QA for user functionality

Background: Common Url launch
Given User enter Demo url

  Scenario Outline: login into Demo QA  website
    
    When User enter "<Fullname>"as Fullname and "<Email>" as Email
    And user enter "<CurrentAddr>"  and "<PermananetAddrs>" 
    And user able to click the submit button
    Then User able to verify the details
     Examples:
|Fullname|Email|CurrentAddr|PermananetAddrs|
|vengat|Karthick@gmail.com|Chennai|Dindigul|
|ezhilarasan|Test12345@gmail.com|Coimbatore|Hyderabad|
    
    Scenario: login into Demo QA  website
    
    
    When User able to click Check Box option
    And User to click Expand button
   Then user able to verify the option   
    