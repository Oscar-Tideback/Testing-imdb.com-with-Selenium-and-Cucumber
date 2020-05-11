Feature: See the pages of the top 5 popular celebs when you click on their links
  As a user to see the top most popular celebs and see their pages when I can click
  on them.

  Scenario Outline: Test Top 5 Popular Celebs
    Given that I am on the Most Popular Celebs Page
    When I click on one of Top 5 Celeb links
    Then I should be taken to the <actor> Page

    Examples:
      | actor               |
      | Golshifteh Farahani |
      | Irrfan Khan         |
      | Julia Garner        |
      | Ana de Armas        |
      | Alexander Dreymon   |

