Feature: Loggin to Internet move database and change password for my account

  Scenario: When loggin to page
    Given an account is premade
    When I click the button to sign in
    Then I should be redirected to a page were I can select sign in method
    And click the first loggin method "Sign in with IMDb"
    And I should be redirected the signin page
    And type in username and tab to next
    And type password and press enter

  Scenario: When I enter my username and password and would like to change the password
    Given that I have logged in to my account
    Then clicked the user menu to account settings
    And clicked on Login and security
    And I clicked the edit button to change password
    And type the current password in current password field
    And typed a new password in the nwe password field
    And reenter the new password in the reenter password field

document.querySelector("a[href='/registration/signin?ref=nv_generic_lgin']")
$("a[href='/registration/signin?ref=nv_generic_lgin']")
