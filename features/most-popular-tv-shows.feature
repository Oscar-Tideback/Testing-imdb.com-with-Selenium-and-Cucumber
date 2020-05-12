Feature: As an user I want to view the most popular tv shows so that I can see what tv shows are popular.

  Scenario: Open menu.
    Given that I am on the IMDB site.
    When I click on the Menu button.
    Then I would like to see the menu of what IMDB has to offer.

  Scenario: View a list of the Most popular shows.
    Given that I am on the IMDB site.
    When I click on the text ”Most popular TV shows”.
    Then I should see a list of the Most popular TV shows.