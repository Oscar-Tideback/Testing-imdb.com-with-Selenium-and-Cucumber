Feature:2 As a user I would like to be able to add random film to my watchlist so I can save them for later

  Scenario: 2 When I have signed in, I would like to add tom my watchlist
    Given 2 There are no movies in my watchlist and I have signed in to the page
    Then 2 click add to watchlist on the first move on page
    And 2 save that movie name
    And 2 browse to my watchlist
    And 2 the same movie should be present
