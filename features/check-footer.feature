Feature:We would like to check footer for missing images or broken links on frontpage

  Scenario:Check footer for broken links or missing images
    When I browse the statpage
    Then the footer should contain the information
      | Fields | Value              | Sitetitle                                             |
      | Link   | Get the IMDb App   | ‎IMDb: Movies & TV Shows on the App Store            |
      | Link   | Help               | Help  IMDb                                            |
      | Link   | Site Index         | Help  IMDb                                            |
      | Link   | IMDbPro            | IMDbPro Official Site                                 |
      | Link   | Box Office Mojo    | Home - Box Office Mojo                                |
      | Link   | IMDb Developer     | IMDb Developer                                        |
      | Link   | Press Room         | Press Room - IMDb                                     |
      | Link   | Advertising        | Display ads - Increase your reach  Amazon Advertising |
      | Link   | Privacy Policy     | IMDb  Amazon.jobs                                     |
      | Link   | Conditions of Use  | Conditions of Use - IMDb                              |
      | Link   | Interest-Based Ads | Interest-Based Ads @ Amazon.com                       |
    And images and extrenal links to
      | Fields    | Value     | Sitetitle                                         |
      | ImageLink | Facebook  | IMDb - Startsida                                  |
      | ImageLink | Instagram | IMDb (@imdb) • Foton och videoklipp på Instagram |
      | ImageLink | Twitch    | IMDb - Twitch                                     |
      | ImageLink | Twitter   | IMDb (@IMDb) / Twitter                            |
      | ImageLink | Youtube   | IMDb - YouTube                                    |
    And the text "© 1990-2020 by IMDb.com, Inc."
    And that IMDb loggo is pressent

