Feature: As an user I want to see a list of upcoming releases for Austria so that I can see what new movies and shows are being released

  Scenario: View upcoming releases for Austria
    Given that I am on the IMDB site
    And I have clicked on the Menu button
    When I have clicked on Release Calendar
    Then I should see a list of upcoming releases for Austria by clicking on Austria