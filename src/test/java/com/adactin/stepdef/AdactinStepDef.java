package com.adactin.stepdef;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinStepDef {
	WebDriver driver;

	@Given("^User is an adactin page$")
	public void user_is_an_adactin_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Saravanakumar_Thanga\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();	
		driver.manage().window().maximize();
		driver.get("http://www.adactin.com/HotelApp/");
	}

	@When("^User enters credentials and click login button$")
	public void user_enters_credentials_and_click_login_button(DataTable data) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> dataList = data.raw();
		driver.findElement(By.id("username")).sendKeys(dataList.get(1).get(0));
		driver.findElement(By.id("password")).sendKeys(dataList.get(1).get(1));
		driver.findElement(By.id("login")).click();
		
	   
	}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.quit();

	    
	}

}
