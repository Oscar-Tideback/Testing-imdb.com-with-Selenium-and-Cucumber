Feature:As a user I would like to be able to add rating to random film so I can get my opinion heard

  Scenario: When I have signed in I would like to add rating on objects
    Given that I have signed in to the page
    Then click the first move in "What to watch"
    And get name of movie
    And click 7 rating for that move
    And then the rating should be added to my rating page
    And check name of first move in list
    And that move should have 7 as a rating
