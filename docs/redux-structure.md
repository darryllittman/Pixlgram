Auth Cycles:

Session API Request Actions:
-signUp
  -invoked from SignupForm onSubmit
  -POST /api/users is called
  -receiveCurrentUser is set as the success callback
-logIn
  -invoked from LoginForm onSubmit
  -POST /api/session is called
  -receiveCurrentUser is set as the success callback
-logOut
  -invoked from Navbar onClick
  -DELETE /api/session is called
  -removeCurrentUser is set as the success callback
-fetchCurrentUser
  -invoked from App in componentDidMount
  -GET /api/session is called
  -receiveCurrentUser is set as the success callback

Session API Response Actions:
-receiveCurrentUser
  -invoked from an API callback
  -SessionReducer stores currentUser in the application's state
-removeCurrentUser
  -invoked from an API callback
  -SessionReducer removes currentUser from the application's state

Error Cycles:
-setErrors
  -Invoked from API callbacks on error for actions that generate POST requests
  -ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
-removeErrors
  -Invoked from API callbacks on success for actions that generate POST requests
  -ErrorReducer removes errors for a given form in the application's state



User API Request Actions:

fetchAllFollowers
-invoked from UserPage at UserInfo (number of followers) onClick
-GET /api/users/:currentUser.id/followers
-receiveFollowers is set as the success callback

fetchAllFollowing
-invoked from UserPage at UserInfo (number of following) onClick
-GET /api/users/:currentUser.id/following
-receiveFollowing is set as the success callback

updateProfile
-invoked from EditProfile at EditProfileForm onSubmit
-POST /api/users/:currentUser.id is called
-receiveUserInfo is set as the success callback


User API Response Actions:

receiveFollowers
-invoked from an API callback
-UsersReducer updates currentUser.followers in the application's state

receiveFollowing
-invoked from an API callback
-UsersReducer updates currentUser.following in the application's state

receiveUserInfo
-invoked from an API callback
-UsersReducer updates currentUser.username, currentUser.ProfilePic and currentUser.bio in the application's state





Photo API Request Actions

fetchAllUserPhotos
-invoked from UserPage OR OtherUserPage on componentDidMount
-GET /api/users/:user.id/photos is called
-receiveAllUserPhotos is set as the success callback

fetchSinglePhoto
-invoked from any single photo (ie UserPage OR OtherUserPage OR PhotoFeed) onClick
-GET /api/photos/:photo.id
-receiveSinglePhoto is set as the success callback

addPhoto
-invoked from Navbar onClick
-POST /api/users/:currentUser.id/photos
-receiveNewPhoto is set as the callback

destroyPhoto
-invoked from any of currentUser's photos onClick
-Post /api/photos/:currentUser.id/photos/:photo.id
-removePhoto is set as the success callback




Photo API Response Actions

receiveAllUserPhotos
-invoked from an API callback
-UsersReducer updates currentUser.photos and users.photos in the application's state
-PhotosReducer updates allPhotos in the application's state

receiveSinglePhoto
-invoked from an API callback
-UsersReducer updates currentUser.photos and users.photos in the application's state
-PhotosReducer updates allPhotos in the application's state

receiveNewPhoto
-invoked from an API callback
-UsersReducer updates currentUser.photos in the application's state
-PhotosReducer updates allPhotos in the application's state

removePhoto
-invoked from an API callback
-UsersReducer updates currentUser.photos in the application's state
-PhotosReducer updates allPhotos in the application's state




Follow API Request Actions

newFollow
-invoked from Follow button onClick
-POST /api/users/:currentUser.id/following is called
-addFollow is set as the success callback

unFollow
-invoked from Follow button onClick
-POST /api/users/:currentUser.id/following is called
-removeFollower is set as the success callback


Follow API Response Actions

addFollow
-invoked from an API callback
-UsersReducer updates currentUser.following in the application's state
-UsersReducer updates users[follower_id].followers in the application's state

removeFollow
-invoked from an API callback
-UsersReducer updates currentUser.following in the application's state
-UsersReducer updates users[follower_id].followers in the application's state



Like API Request Actions

likePhoto
-invoked from photo's like button onClick
-POST /api/photos/:photo.id/likes/currentUser.id
-addLike is set as the success callback

unlikePhoto
-invoked from photo's like button onClick
-DELETE /api/photos/:photo.id/likes/currentUser.id
-removeLike is set as the success callback


Like API Response Actions

addLike
-invoked from an API callback
-LikesReducer updates allPhotos.likes in the application's state

removeLike
-invoked from an API callback
-LikesReducer updates allPhotos.likes in the application's state



Comment API Request Actions

addComment
-invoked from photo's comment input onEnter
-POST /api/photos/:photo.id/comments/:comment.id
-receiveComment is set as the success callback

removeComment
-invoked from photo's comment "x" onClick
-DELETE /api/photos/:photo.id/comments/:comment.id
-destroyComment is set as the success callback


Like API Response Actions

receiveComment
-invoked from an API callback
-CommentsReducer add allPhotos.comments[comment.id] in the application's state

removeLike
-invoked from an API callback
-CommentsReducer removes allPhotos.comments[comment.id] in the application's state
