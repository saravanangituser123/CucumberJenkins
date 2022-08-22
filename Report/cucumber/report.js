$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Saravanakumar_Thanga/PIP_Program/FBAutomation/src/test/java/com/fb/features/Fbloginmultiuser.feature");
formatter.feature({
  "line": 1,
  "name": "Check the login fb functionality",
  "description": "",
  "id": "check-the-login-fb-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login fb",
  "description": "",
  "id": "check-the-login-fb-functionality;login-fb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User enter facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"\u003cUsername\u003e\" as username and \"\u003cPassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user able to click the login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "check-the-login-fb-functionality;login-fb;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 8,
      "id": "check-the-login-fb-functionality;login-fb;;1"
    },
    {
      "cells": [
        "vengat16",
        "Karthick"
      ],
      "line": 9,
      "id": "check-the-login-fb-functionality;login-fb;;2"
    },
    {
      "cells": [
        "ezhilarasan",
        "12345"
      ],
      "line": 10,
      "id": "check-the-login-fb-functionality;login-fb;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "login fb",
  "description": "",
  "id": "check-the-login-fb-functionality;login-fb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User enter facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"\u003cUsername\u003e\" as username and \"Karthick\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user able to click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_enter_facebook_url()"
});
formatter.result({
  "duration": 4593777900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 12
    },
    {
      "val": "Karthick",
      "offset": 41
    }
  ],
  "location": "LoginStepDef.user_enter_something_as_username_and_something_as_password(String,String)"
});
formatter.result({
  "duration": 173403800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_able_to_click_the_login_button()"
});
formatter.result({
  "duration": 84654900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "login fb",
  "description": "",
  "id": "check-the-login-fb-functionality;login-fb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User enter facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"\u003cUsername\u003e\" as username and \"12345\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user able to click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_enter_facebook_url()"
});
formatter.result({
  "duration": 3437489800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 41
    }
  ],
  "location": "LoginStepDef.user_enter_something_as_username_and_something_as_password(String,String)"
});
formatter.result({
  "duration": 166087000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_able_to_click_the_login_button()"
});
formatter.result({
  "duration": 84272600,
  "status": "passed"
});
});