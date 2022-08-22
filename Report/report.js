$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Saravanakumar_Thanga/PIP_Program/DemoCucumberAutomation/src/test/java/com/demo/features/DemoForm.feature");
formatter.feature({
  "line": 1,
  "name": "Check the Demo QA for user functionality",
  "description": "",
  "id": "check-the-demo-qa-for-user-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4059816600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Common Url launch",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User enter Demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoQAStep.user_enter_Demo_url()"
});
formatter.result({
  "duration": 1173357300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d104.0.5112.82)\n  (Driver info: chromedriver\u003d103.0.5060.134 (8ec6fce403b3feb0869b0732eda8bd95011d333c-refs/branch-heads/5060@{#1262}),platform\u003dWindows NT 10.0.19044 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 618 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027EPINBANW0188\u0027, ip: \u0027172.31.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60809}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d103.0.5060.134 (8ec6fce403b3feb0869b0732eda8bd95011d333c-refs/branch-heads/5060@{#1262}), userDataDir\u003dC:\\Users\\SARAVA~1\\AppData\\Local\\Temp\\scoped_dir39008_1601173795}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d104.0.5112.82, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 67b4599142f93c63533f6747db437754\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat com.demo.stepdefinitons.DemoQAStep.user_enter_Demo_url(DemoQAStep.java:34)\r\n\tat ✽.Given User enter Demo url(C:/Users/Saravanakumar_Thanga/PIP_Program/DemoCucumberAutomation/src/test/java/com/demo/features/DemoForm.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "login into Demo QA  website and Enter basic details",
  "description": "",
  "id": "check-the-demo-qa-for-user-functionality;login-into-demo-qa--website-and-enter-basic-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enter \"Saravana\" as Fullname and \"mail1234@gmail.com\" as Email",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Chennai \" as current address and \" Dindigul \" ad Permanent address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user able to click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User able to verify the details",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DemoQAStep.user_able_to_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoQAStep.user_able_to_verify_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1619237000,
  "status": "passed"
});
formatter.before({
  "duration": 3177563900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Common Url launch",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User enter Demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoQAStep.user_enter_Demo_url()"
});
formatter.result({
  "duration": 659916200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d104.0.5112.82)\n  (Driver info: chromedriver\u003d103.0.5060.134 (8ec6fce403b3feb0869b0732eda8bd95011d333c-refs/branch-heads/5060@{#1262}),platform\u003dWindows NT 10.0.19044 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 659 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027EPINBANW0188\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60835}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d103.0.5060.134 (8ec6fce403b3feb0869b0732eda8bd95011d333c-refs/branch-heads/5060@{#1262}), userDataDir\u003dC:\\Users\\SARAVA~1\\AppData\\Local\\Temp\\scoped_dir19900_2123783315}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d104.0.5112.82, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 5d24daf0455b43d010b95f9304a65800\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat com.demo.stepdefinitons.DemoQAStep.user_enter_Demo_url(DemoQAStep.java:34)\r\n\tat ✽.Given User enter Demo url(C:/Users/Saravanakumar_Thanga/PIP_Program/DemoCucumberAutomation/src/test/java/com/demo/features/DemoForm.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "login into Demo QA  website and verify the option",
  "description": "",
  "id": "check-the-demo-qa-for-user-functionality;login-into-demo-qa--website-and-verify-the-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User able to click Check Box option",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User to click Expand button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user able to verify the option",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoQAStep.user_able_to_click_Check_Box_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoQAStep.user_to_click_Expand_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DemoQAStep.user_able_to_verify_the_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1857342500,
  "status": "passed"
});
});