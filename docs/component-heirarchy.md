Component Heirarchy:

AuthFormContainer
Greeting
  -button to GuestLogin
  -button to LoginForm
  -button to SignupForm
-SignupForm
  -Username, FullName, Password inputs
  -submit button
-LoginForm
  -Username, Password inputs
  -submit button
-Footer

NavbarContainer
-logo button to PhotoFeed
-SearchField
-button to RecentEvents dropdown
-button to AddPhoto
-button to UserPage
-button to AddPhoto
-explore button to popular users (bonus)

PhotoFeedContainer
-Navbar
-AllPhotos (sorted by most recent)
  -PhotoHeader
    (Username, location, relative timestamp)
  -Photo
  -PhotoFooter
    (number of likes, caption, list of comments, like button, add comment field)

UserPageContainer
-Navbar
-UserInfo
  -ProfilePic
  -Username, FullName, Bio
  -button to EditProfile
  -number of posts, number of followers, number following
-Photos (sorted by most recent)
  -button to load more photos
-Footer

OtherUserContainer
-Navbar
-UserInfo
  -ProfilePic
  -Username, FullName, Bio
  -number of posts, number of followers, number following
-Photos (sorted by most recent)
  -button to load more photos
-Footer

EditProfileContainer
-Navbar
-Sidebar
-ProfilePic
-Username
  -EditProfileForm
    -Name, Username, Textarea inputs
    -Submit button
-Footer

PhotoViewContainer
-Photo
-Sidebar
  -ProfilePic, Username
  -list of likes
  -caption
  -Comments

AddPhotoFormContainer
-header
-Sidebar
-ProfilePic, Username
-button to "Find on Computer by path"
-drag and drop field
-inputs for caption and location
-submit button
-footer

ExploreContainer (bonus)
  -Navbar
  -List of popular users
    -3 Photos, Username, FullName
    -button to Follow


Routes:
"/signup", "AuthFormContainer"
"/signin", "AuthFormContainer"
"/home", "PhotoFeedContainer"
"/users/:id", "UserPageContainer", "OtherUserContainer"
"/users/:id/add_photo", "AddPhotoFormContainer"
"/users/:id/edit", "EditProfileContainer"
"/users/:id/photos/:photo_id", "PhotoViewContainer"
"/home/explore", "ExploreContainer" (Bonus)
