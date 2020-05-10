Feature: See the page to the top 5 actors born on current day
  As a user I want to see the page of the top 5 actors that are born on the
  4th of July when clicked.

  Scenario Outline: Test celebrity home pages from birthdaysite
    Given that I am at the Birth Month Day of the 4th of July
    Then I should be taken to the <actors> page when I click on it.

    Examples:
      | actors  |
      | Value 1 |