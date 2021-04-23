# Manual Tests for Dashboard (index.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :---: |:---------------------------------------------------------| :----------------------------------------|
| 1 | Type and enter pricereview.cf into browser                   | The home dashboard should be displayed   |
| 2 | Tap on the "Login" button                              	   | Redirects to the login.html    |
| 3 | Tap on the "Search" button                                   | Redirects to the search.html     |
| 4 | Tap on the "Continue reading..." hyperlink under "Trending"  | Redirects to the trending.html     |
| 5 | Tap on the "Top Reviews" card                                | Redirects to the topReviews.html     |
| 6 | Tap on the "Top Posts" card                                  | Redirects to the topPosts.html     |
| 7 | Tap on the "Top Items" card                                  | Redirects to the topItems.html     |
| 8 | Tap on the "Back to Top" hyperlink                           | Redirects to the top of the home page   |
| 9 | Tap on the "Price Review" hyperlink                          | Redirects to the home page index.html |
| 10| Tap on the "Rest Password" hyperlink                         | Redirects to the reset_pass.html  |


# Manual Tests for login system Page (login.html)

# 1- Manual Tests for sign-up process Page (login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | hit the login button 				           | The login screen should be displayed   |
| 3 | Tap on the "sign up" button     	   			   | A form will be displayed    |
| 4 | Enter full name                              		   | Enter full name. Format: "First Last name"     |
| 5 | Enter email address                                          | Enter email. Format: "mail@yahoo.com"   |
| 6 | Enter phone number                                           | Respect phone number format "2982987298"    |
| 7 | Enter password                              		   | Password length must be more than 5 and less than 45  |
| 8 | Confirm password                                             | Password must match the first password    |
| 9 | Tap on the "sign up" button                        	   | A confirmation code will be sent to the provided account if signed up   |
| 10 | Tap on the "Confirm Email" button                           | A modal form will showed up     |
| 11 | Tap the user email					   | Asks user to enter email respect Format:"mail@yahoo.com"    |
| 12 | Tap the user verification code provided by email		   | Asks user to enter verification code    |
| 13 | Tap on the "confirm email" button			   | A text will be show for each status   |

# 2- Manual Tests for resend verification code process (login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit the login button 				           | The login screen should be displayed   |
| 3 | Tap on the "sign up" button     	   			   | A form will be displayed    |
| 4 | Tap on the "Confirm Email" button                            | A modal form will showed up     |
| 5 | Tap the user email					   | Asks user to enter email    |
| 6 | Tap on the "Send new code" button				   | Check your email for new code   |

# 3- Manual Tests for Login process Page (login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Login" button        				   | A form will be displayed   |
| 4 | Enter email address                                          | Enter email. Format: "mail@yahoo.com"   |
| 5 | Enter password                              		   | Password length must be more than 5 and less than 45  |
| 6 | Tap on the "login in" button                                 | user dashboard will be displayed     |


# 4- Manual Tests for Reset password process Step 1: "Send reset password code" to provided email(login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Forgot password" button        	           | A modal page will be displayed   |
| 4 | Enter email address                                          | Enter email. Format: "mail@yahoo.com"   |
| 5 | Hit send rest code                              		   | A code will be sent to provided email  |


# 5- Manual Tests for Reset password process Step 2: "reset password " to provided email(login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Forgot password" button        	           | A modal page will be displayed   |
| 4 | Tap button "Reset password"                                  | A modal page will be displayed   |
| 5 | Fill the required inputs                      		   | Enter email, verification code and new password   |
| 6 | Tap "Reset password" button                                  | Password updated successfully  |

# 6- Manual Tests for Reset password process Step 3: "reset password failed: verification Code not correct" " to provided email(login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Forgot password" button        	           | A modal page will be displayed   |
| 4 | Tap button "Reset password"                                  | A modal page will be displayed   |
| 5 | Fill the required inputs                      		   | In case code doesn't match the one in DB   |
| 6 | Tap "Reset password" button                                  | "Code does not much our records" error  |

# 7- Manual Tests for Reset password process Step 4: "reset password failed: Provided email does not exist in the DB" to provided email(login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Forgot password" button        	           | A modal page will be displayed   |
| 4 | Tap button "Reset password"                                  | A modal page will be displayed   |
| 5 | Fill the required inputs                      		   | In case email doesn't match the one in DB   |
| 6 | Tap "Reset password" button                                  | "Email not found" error  |

# 8- Manual Tests for Reset password process Step 5: "reset password failed: Provided email is not comfirmed" to provided email(login.html)

| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Hit on the "Login" button 			     	   | The login screen should be displayed   |
| 3 | Tap on the "Forgot password" button        	           | A modal page will be displayed   |
| 4 | Tap button "Reset password"                                  | A modal page will be displayed   |
| 5 | Fill the required inputs                      		   | In case email doesn't match the one in DB   |
| 6 | Tap "Reset password" button                                  | "Email not confirmed" error  |



# 9- Manual Tests for Adding a review Step 1: "trying to add a review from index.html (index.html)
| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Scroll down to view items and click on "Review this item" for 1 item			     	   | The login screen should be displayed, as a user needs to be signed in  |
| 3 | Either sign in register                                              	           | A modal page will be displayed   |
| 4 | Now repeat step 2                                                             | A modal page will be displayed   |
| 5 | Fill the required inputs                      		                        | Review will not be added if all the information is not added  |
| 6 | Review will be posted                                                            |Review will display in "My reviews"|


# 10- Manual Tests for Adding a review Step 2: "trying to add a review from topitems.html(user is not signed in) (listofitems.html)
| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
|  2 | click on top items                                          | top items page will appear|
| 3 | Scroll down to view items and click on "Review this item" for 1 item			     	   | The login screen should be displayed, as a user needs to be signed in  |
| 4 | Either sign in register                                              	           | A modal page will be displayed   |
| 5 | Now repeat step 3                                                           | A modal page will be displayed   |
| 6 | Fill the required inputs                      		                        | Review will not be added if all the information is not added  |
| 7 | Review will be posted                                                            |Review will display in "My reviews"|


# 11- Manual Tests for Searching for a product: "trying to search for a product inde (index.html)
| No.  | Steps to Reproduce  | Expected Behaviour |
| :-----: |:-----------------------------------------------------: | :-----------------------------------------------------------------------|
| 1 | Type and enter pricereview.cf into the browser               | The main page should be displayed   |
| 2 | Scroll down to the bottom of the page to view items                            | Items should be displayed|
| 3 | Click on the search bar to search		     					| Search bar will allow you to type in |
| 4 | Type desired product to search                                    	           |Textbox should allow user to enter a product   |
| 5 | Click on the magnifying glass to commit a search                                             | Search should be conducted on the items in the database   |
| 6 | Scroll down to see new visible items                   		                        | Reduced items corresonding to keyword entry should be displayed  |







