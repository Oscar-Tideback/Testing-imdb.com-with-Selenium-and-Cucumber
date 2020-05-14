Feature:As a company we would like to check the main menu function to be sure that it is working right

  Scenario Outline: Check all links in main menu
    Then we should beable to access all the main menues pages when I click the menu
    When I click the "<linkText>"
    Then I check that I'm on "<pageTitle>"
    Examples:
      | linkText                    | pageTitle                                                     |
      | Born Today                  | IMDb: Birth Month Day of                                      |
      | Most Popular Shows          | Most Popular TV - IMDb                                        |
      | Most Popular Celebs         | IMDb: Males/Females                                           |
      | Top Rated Shows             | IMDb Top 250 TV - IMDb                                        |
      | Top Box Office              | IMDb Top Box Office - IMDb                                    |
      | Most Popular Movies         | Most Popular Movies - IMDb                                    |
      | Top Rated Movies            | IMDb Top 250 - IMDb                                           |
      | Help Center                 | IMDb  Help                                                    |
      | Release Calendar            | IMDb: Upcoming Releases for United States - IMDb              |
      | DVD & Blu-ray Releases      | New and Upcoming VOD, DVD, and Blu-ray Releases - IMDb        |
      | Browse Movies by Genre      | Browse Movies and TV by Genre - IMDb                          |
      | Showtimes & Tickets         | Showtimes and Cinemas for Stockholm AB SE - IMDb              |
      | In Theaters                 | New Movies In Theaters - IMDb                                 |
      | Coming Soon                 | New Movies Coming Soon - IMDb                                 |
      | Movie News                  | Movie News - IMDb                                             |
      | India Movie Spotlight       | Top Rated Movies in Hindi, Tamil, Telugu and Malayalam - IMDb |
      | What's on TV & Streaming    | What's on TV and Streaming - IMDb                             |
      | Browse TV Shows by Genre    | Browse Movies and TV by Genre - IMDb                          |
      | TV News                     | TV News - IMDb                                                |
      | India TV Spotlight          | New Indian TV Shows You Must Watch This Week - IMDb           |
      | Oscars                      | Oscars Guide - IMDb                                           |
      | Best Picture Winners        | Best Picture-Winning (Sorted by Year Descending) - IMDb       |
      | Golden Globes               | Golden Globes - IMDb                                          |
      | Emmys                       | Emmys - IMDb                                                  |
      | San Diego Comic-Con         | San Diego Comic-Con - IMDb                                    |
      | New York Comic-Con          | New York Comic-Con - IMDb                                     |
      | Sundance Film Festival      | Sundance Film Festival - IMDb                                 |
      | Toronto Int'l Film Festival | Toronto International Film Festival - IMDb                    |
      | Awards Central              | Awards Central - IMDb                                         |
      | Festival Central            | Festival Central - IMDb                                       |
      | All Events                  | All Events - IMDb                                             |
      | Celebrity News              | Celebrity News - IMDb                                         |
      | IMDb Originals              | IMDb Original Videos - IMDb                                   |
      | Latest Trailers             | Movie & TV Trailers - IMDb                                    |
      | Contributor Zone            | IMDb Contribution: Home                                       |
      | Polls                       | Movie, TV and Celebrity Polls - IMDb                          |

