Feature: See the page to the top 5 actors born on August 5th
  As a user I want to see the page of the top 5 actors that are born on
  August 5th when clicked.

  Scenario Outline: Test celebrity home pages from birthdaysite
    Given that I am on the Birth Month Day of August 5th
    Then I should be taken to the <actors> page when I click on it.

    Examples:
      | actors       |
      | Janet McTeer |
      | Mark Strong  |
#| Jesse Williams    |
#| Stephanie Szostak |
#| James Gunn        |
