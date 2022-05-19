package au.com.carsguide.steps;

import au.com.carsguide.pages.CarSearchPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyCarStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() throws InterruptedException {

        new HomePage().mouseHoverOn_BuyAndSellCar();
        Thread.sleep(2000);
    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().mouseHoverOn_SearchCars();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new CarSearchPage().selectMake(make);        
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
       new CarSearchPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new CarSearchPage().selectLocation(location);
      
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
      new CarSearchPage().selectPrice(price);  
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {
        new CarSearchPage().clickOnFindMyCar();

    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {

       Assert.assertTrue("Make you are looking for can't find ",new CarSearchPage().getMakeOfTheCar_AfterSearch().contains(make));

    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickLink(String usedCars) {
        new HomePage().mouseHoverOn_Used();
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String arg0) {

    }
}
