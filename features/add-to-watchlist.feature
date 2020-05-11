Feature:As a user I would like to be able to add random film to my watchlist so I can save them for later

  Scenario: When I have signed in I would lik to add rating on objects
    Given that I have signed in to the page
    Then Click add to watchlist on the first move on page
    And save that movie name
    And browse to my watchlist
    And the same movie should be present
