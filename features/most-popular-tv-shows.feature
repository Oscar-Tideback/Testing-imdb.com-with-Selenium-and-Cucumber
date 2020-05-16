Feature: As an user I want to view the most popular tv shows so that I can see what tv shows are popular.

  Scenario: View a list of "Most popular shows"
    Given that I am on the IMDB site
    When I click on the Menu button
    Then I should see a list of popular shows by clicking on the link Most Popular Shows