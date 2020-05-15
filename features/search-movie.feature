Feature: As an user I want to search for a movie called "How to lose a guy in 10 days"

  Scenario: Search by a keyword
    Given that I am on the IMDB site
    When I enter the search text "How to lose a guy in 10 Days"
    And I click on the search button
    Then the first search result should contain the word "How to Lose a Guy in 10 Days"

  Scenario: When a keyword is entered in the search field
    Given that I am on the IMDB site
    When I enter the search text "How to lose a guy in 10 Days" + ENTER
    Then the first search result should contain the word "How to Lose a Guy in 10 Days"
