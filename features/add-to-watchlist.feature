Feature:2 As a user I would like to be able to add random film to my watchlist so I can save them for later

  Scenario:When I would like to add i random film to whatchlist
    Given There are no movies in my watchlist and I have a random film
    When I have signed in to the page
    Then I search IMDb for my random film and save the title
    And I click on my search result
    And save that movie title
    And add it to my watchlist
    And browse to my watchlist page
    And the same movie title should be present
