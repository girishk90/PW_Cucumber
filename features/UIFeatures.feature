Feature: Practice Page UI

Background: 
Given user is in Practice Page

@OptionSelection
Scenario:Select a Radio Button
When user clicks on Radio Button which is "Radio2"
Then "Radio2" button should be selected.

@InputData
Scenario: Suggestion input data.
When user enter "Ind" in the Suggestion Input field
Then user should see the list of suggestions and select "India" from the list
And Selected value "India" should be displayed in the Suggestion Input field.

@OptionSelection
Scenario: Select drop down value
When user clicks on the Dropdown and select "Option3" from the list
Then "Option3" should be selected in the dropdown.

@OptionSelection
Scenario: Select multiple checkboxes
When user clicks on the Checkboxes which are "Option1" and "Option3"
Then "Option1" and "Option3" should be selected
And "Option2" should not be selected.

@Redirection
Scenario: Switch to new window
When user clicks on "Open Window" button
Then user should be switched to new window
And url of the new window should be "https://www.qaclickacademy.com/"

@Redirection
Scenario: Switch to new tab
When user clicks on "Open Tab" button
Then user should be switched to new tab
And the page should display as  "Invalid SSL certificate"

@Redirection
Scenario: Switch to alert
When User enters "Girish" in the alert Input field
And user clicks on "Alert" button
Then user should see the alert with text "Hello Girish, share this practice page and share your knowledge"

@Redirection
Scenario: Accept confirm alert
When User enters "Logan" in the alert Input field
And user clicks on "Confirm" button
Then user should see the confirm alert with text "Hello Logan, Are you sure you want to confirm?"

@Redirection
Scenario: Decline confirm alert
When User enters "Scott" in the alert Input field
And user clicks on "Confirm" button
Then user should see the confirm alert with text "Hello Scott, Are you sure you want to confirm?"

@Misc
Scenario:Hide element on page
When user enter "Lumos" in the Hide Input field
And user clicks on "Hide" button
Then user should not see the Input field on the page.

@Misc
Scenario: Frame handling
When User mouse hovers to "More" Option available in frame
Then user should see the "About Us" available in the frame
When user clicks on "About Us" link available in the frame
Then a new page should be opened with url "https://qasummit.org/about-speaker"

