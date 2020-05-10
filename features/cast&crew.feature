Feature: Can I as a contributor add Cast&Crew information to Suits
  As a contributor want to be able to add data to the Cast&Crew section
  of Suits.

  Scenario Outline: Add data to Suits Cast&Crew section
    Given that I am on the Suits page
    And that I have clicked the Edit button
    And that I haved clicked on the Add <X item> and the continue button
    When I add data in <Field> and click check these updates
    And I click the button Submit these updates
    Then the data I have submitted in <Field> should be sent

    Examples:
      | X item  | Field   |
      | Value 1 | Value 2 |
