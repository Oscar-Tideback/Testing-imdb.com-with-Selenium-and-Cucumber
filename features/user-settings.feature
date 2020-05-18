Feature: Loggin to Internet move database and change password for my account

  Scenario: When loggin to page
    Given an account is premade
    When I click the button to sign in
    Then I should be redirected to a page were I can select sign in method
    And click the first loggin method "Sign in with IMDb"
    And I should be redirected the signin page
    And type in username and tab to next
    And type password and press enter

  Scenario: When I enter my username and password and would like to change the password and user ID
    Given that I have logged in to my account
    Then clicked the user menu to account settings
    And clicked on Login and security
    And I clicked the edit button to change password
    And type the current password in current password field
    And typed a new password in the new password field
    And reenter the new password in the reenter password field
    And reset to old password
    And I clicked the edit button to change user ID
    And type the current user ID in current user ID field
    And typed a new user ID in the new user ID field
    And reenter the new user ID in the reenter user ID field
    And reset to old user ID
    And I clicked the add to BIO button to change my bio and save
    And check if new BIO is accurate


