package com.demo.stepdefinitons;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DemoQAStep {
WebDriver driver;
	
	@Before
	public void browserSetup() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Saravanakumar_Thanga\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();	
		driver.manage().window().maximize();
		
	}
	

@Given("^User enter Demo url$")
public void user_enter_Demo_url() throws Throwable {
	driver.get("https://demoqa.com/text-box");
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
   
}



@When("^User enter \"([^\"]*)\"as Fullname and \"([^\"]*)\" as Email$")
public void user_enter_as_Fullname_and_as_Email(String fullname, String emailAddr) throws Throwable {
	WebElement fullName = driver.findElement(By.xpath("//*[@id='userName']"));
	fullName.sendKeys(fullname);
	WebElement emailAddrs = driver.findElement(By.xpath("//*[@id='userEmail']"));
	emailAddrs.sendKeys(emailAddr);
   
}

@When("^user enter \"([^\"]*)\"  and \"([^\"]*)\"$")
public void user_enter_and(String currentAddr, String pmtAddrs) throws Throwable {
	WebElement currentAddrs = driver.findElement(By.xpath("//*[@id='currentAddress']"));
	currentAddrs.sendKeys(currentAddr);
	WebElement permtAddrs = driver.findElement(By.xpath("//*[@id='permanentAddress']"));
	permtAddrs.sendKeys(pmtAddrs);
	}

@When("^user able to click the submit button$")
public void user_able_to_click_the_submit_button() throws Throwable {
	WebElement submitBtn = driver.findElement(By.xpath("//*[@id='submit']"));
	submitBtn.click();                  
}

@Then("^User able to verify the details$")
public void user_able_to_verify_the_details() throws Throwable {
	  java.util.List<WebElement> submitBtn = driver.findElements(By.xpath("//*[@id='output']"));
  	Assert.assertNotNull(submitBtn);  
}

@When("^User able to click Check Box option$")
public void user_able_to_click_Check_Box_option() throws Throwable {
	WebDriverWait wait = new WebDriverWait(driver,30);
	WebElement checkBox = driver.findElement(By.xpath("//span[text()='Check Box'][@class='text']"));
	
	wait.until(ExpectedConditions.elementToBeClickable(checkBox));                  
	Actions action = new Actions(driver);
	action.moveToElement(checkBox).perform();
	checkBox.click();}

@When("^User to click Expand button$")
public void user_to_click_Expand_button() throws Throwable {
	WebElement expandBtn = driver.findElement(By.xpath("//button[@title='Expand all']"));
	expandBtn.click();}

@Then("^user able to verify the option$")
public void user_able_to_verify_the_option() throws Throwable {
	java.util.List<WebElement> optCheck = driver.findElements(By.xpath("//span[text()='Desktop']"));
	Assert.assertNotNull(optCheck);   
}

@After
public void closeBrowser() {
	driver.quit();
}

}
