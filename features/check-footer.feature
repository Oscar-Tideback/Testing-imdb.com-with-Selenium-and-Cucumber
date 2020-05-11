Feature:We would like to check footer for missing images or broken links on frontpage

  Scenario:Check footer for broken links or missing images
    When I browse the statpage
    Then the footer should contain the links
    <Get the IMDb App>
    <Help>
    <Site Index>
    <IMDbPro>
    <Box Office Mojo>
    <Press Room>
    <Advertising>
    <Privacy Policy>
    <Conditions of Use>
    <Interest-Based Ads>
    And images and extrenal links to
    <Facebook> <Instagram> <Twitch> <Twitter> <Youtube>
    And the text "© 1990-2020 by IMDb.com, Inc."
    And that IMDb loggo is pressent

