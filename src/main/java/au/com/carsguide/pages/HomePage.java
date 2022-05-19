package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyAndSellCar;
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;
    @FindBy(xpath = "//a[@data-gtm-label='sub nav used cars search']")
    WebElement used;




    public void mouseHoverOn_BuyAndSellCar(){

        mouseHoverToElement(buyAndSellCar);
        log.info("Mouse hover on buy and sell car : "+buyAndSellCar.toString());
    }

    public void mouseHoverOn_SearchCars(){

     clickOnElement(searchCars);
        log.info("Mouse hover and click on search cars : "+searchCars.toString());
    }

    public void mouseHoverOn_Used(){

        clickOnElement(used);
        log.info("Mouse hover and click on Used : "+used.toString());
    }




}
