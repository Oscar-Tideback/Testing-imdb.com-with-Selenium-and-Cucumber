Feature: Top News links should show the ingress of the article
  As a user I want to click on the top news headline links and
  see the ingress to the article

  Scenario Outline: Test article headlines in Topnews
    Given that I am on the IMBd Celebrity news link page
    When I click on each <headline> that are shown in the top news section
    Then the page should display the articles ingress


    Examples:
      | Headline |
