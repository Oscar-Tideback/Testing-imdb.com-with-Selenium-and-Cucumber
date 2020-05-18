Feature:We would like to check footer for missing images, links, text on frontpage

  Scenario:Check footer for missing links or images and text
    When I browse the statpage
    Then the footer should contain the information
      | Link               |
      | Get the IMDb App   |
      | Help               |
      | Site Index         |
      | IMDbPro            |
      | Box Office Mojo    |
      | IMDb Developer     |
      | Press Room         |
      | Advertising        |
      | Jobs               |
      | Conditions of Use  |
      | Privacy Policy     |
      | Interest-Based Ads |
    And images and extrenal links to
      | Fields    |
      | Facebook  |
      | Instagram |
      | Twitch    |
      | Twitter   |
      | YouTube   |
    And the text "© 1990-2020 by IMDb.com, Inc."
    And that IMDb loggo is pressent

