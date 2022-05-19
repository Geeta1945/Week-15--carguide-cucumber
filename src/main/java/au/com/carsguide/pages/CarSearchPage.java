package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CarSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(CarSearchPage.class.getName());

    public CarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//select[@id='makes']")
    WebElement makes;

    @FindBy(xpath = "//select[@id='models']")
    WebElement models;
    @FindBy(xpath = "//select[@id='locations']")
    WebElement location;
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement price;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findButton;
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement checkMakeOfCar;

    public void selectMake(String myMake){
        selectByVisibleTextFromDropDown(makes,myMake);
        log.info("Selecting make from drop down"+makes.toString());
    }

    public void selectModel(String myModel){
        selectByVisibleTextFromDropDown(models,myModel);
        log.info("Selecting model from drop down"+models.toString());
    }
    public void selectLocation(String myLocation){
        selectByVisibleTextFromDropDown(location,myLocation);
        log.info("Selecting location from drop down"+location.toString());
    }
    public void selectPrice(String myPrice){
        selectByVisibleTextFromDropDown(price,myPrice);
        log.info("Selecting price from drop down"+myPrice.toString());
    }
    public void clickOnFindMyCar(){
        clickOnElement(findButton);
        log.info("Clicking on find my next car button : "+findButton.toString());
    }
    public String getMakeOfTheCar_AfterSearch(){
        log.info("Getting text from search : "+checkMakeOfCar.toString());
        return getTextFromElement(checkMakeOfCar);
    }


}
