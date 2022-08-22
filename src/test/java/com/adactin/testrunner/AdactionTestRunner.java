package com.adactin.testrunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Saravanakumar_Thanga\\PIP_Program\\DemoCucumberAutomation\\src\\test\\java\\com\\demo\\features\\AdactinLogin.feature",

glue = {"com.adactin.stepdef"},
monochrome = true,
plugin={"pretty","html:Report"})
public class AdactionTestRunner {

}
