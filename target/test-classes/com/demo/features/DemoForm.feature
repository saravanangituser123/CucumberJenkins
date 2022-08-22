Feature: Check the Demo QA for user functionality

Background: Common Url launch
Given User enter Demo url

  Scenario: login into Demo QA  website and Enter basic details
    
    When User enter "Saravana" as Fullname and "mail1234@gmail.com" as Email
    And user enter "Chennai " as current address and " Dindigul " ad Permanent address
    And user able to click the submit button
    Then User able to verify the details
    
    Scenario: login into Demo QA  website and verify the option
    
    
    When User able to click Check Box option
    And User to click Expand button
   Then user able to verify the option   
   