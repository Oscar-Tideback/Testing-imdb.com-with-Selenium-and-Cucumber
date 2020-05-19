Feature: I want to see if the help center search bar works when I search for ratings.
  As a user i want to see topics related to ratings when I search for ratings.

  Scenario:Search for ratings in help center bar.
    Given that i have clicked on the menu and chosen Help center
    When I type "ratings" in the help center bar + ENTER
    Then I should get related topics concerning "rating"