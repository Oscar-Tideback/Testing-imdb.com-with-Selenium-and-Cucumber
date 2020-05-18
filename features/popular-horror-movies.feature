Feature: As an user I want to browse through popular horror movies and tv shows so that I can see what horror movies are popular

  Scenario: Browse through popular horror movies
    Given that I am on the IMDB site
    And I have clicked on the Menu button
    When I have clicked on Most popular movies
    Then I click on horror link text to see a list of popular movies and tv shows.
