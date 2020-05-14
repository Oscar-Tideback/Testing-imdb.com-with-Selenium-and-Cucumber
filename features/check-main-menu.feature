Feature:As a company we would like to check the main menu function to be sure that it is working right

  Scenario Outline: Check all links in main menu
    Then we should beable to access all the main menues pages when I click the menu
    When I click the "<menuLink>"
    Then I check that I'm on "<pageTitle>"
    Examples:
      | menuLink                                               | pageTitle                                              |
      | https://www.imdb.com/calendar/?ref_=nv_mv_cal          | IMDb: Upcoming Releases for United States - IMDb       |
      | https://www.imdb.com/list/ls016522954/?ref_=nv_tvv_dvd | New and Upcoming VOD, DVD, and Blu-ray Releases - IMDb |

