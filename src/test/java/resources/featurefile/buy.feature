Feature: Search functionality


  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make  | model     | location     | price       |
      | BMW   | Any Model | ACT - All    | $15,000     |
      | Audi  | Any Model | NSW - All    | $25,000     |
      | Lexus | Any Model | SA - All     | $45,000     |
      | Audi  | A3        | Any Location | $50,000     |
      | Tesla | Any Model | Any Location | Price (max) |


  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click "Used" link
    Then I navigate to "Used Cars For Sale" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make          | model     | location     | price   |
      | BMW           | Any Model | ACT - All    | $15,000 |
      | Jeep          | Cherokee  | Any Location | $20,000 |
      | Hyundai       | Any Model | NSW - All    | $30,000 |
      | Ford          | Focus     | SA - All     | $20,000 |
      | Mercedes-Benz | A-Class   | ACT - All    | $50,000 |
      | Nissan        | LEAF      | Any Location | $30,000 |