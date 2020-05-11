Feature:As a user I would like to be able to add rating to random film so I can get my opinion heard

  Scenario: When I have signed in I would lik to add rating on objects
    Given that I have signed in to the page
    Then click the first move in "What to watch"
    And get name of movie
    And click 7 rating for that move
    And then the rating should be added to my rating page
    And check name of first move in list
    And that move should have 7 as a rating

      """<a class="" title="Click to rate: 7" rel="nofollow"><span>7</span></a>
https://www.imdb.com/user/ur118073436/ratings?ref_=nv_usr_rt_4
<span class="ipl-rating-star__rating">7</span>"""