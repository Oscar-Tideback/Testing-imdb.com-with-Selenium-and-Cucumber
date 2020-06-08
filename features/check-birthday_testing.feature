Feature:Check if todays 1-50 first birthdays are the same as on wikipedia on celebrities page - Born today

  Scenario: Cross-check our date of birth with the celebrities wikipedia pages https://en.wikipedia.org/wiki/ https://www.famousbirthdays.com/people/
    When I browse to Birth Month Day of todays
    Then the first 50 names should be saved to a list
    And if the list contains white space replace that with _
    And add "https://everipedia.org/wiki/lang_en/" before the name
    And browse to that page
    And find birthday on that page and check if it is today
