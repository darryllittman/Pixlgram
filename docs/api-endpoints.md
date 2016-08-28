# API ENDPOINTS

## HTML API:

- Root
- GET /
  - loads React web app



## JSON API:

### Users
  - POST /api/users
    - create user
  - PATCH /api/users/:user.id
    - user data updated
  - GET /api/users/:user.id
    - single user returned
  - GET /api/users
    - all users returned

### Session
  - POST /api/session
  - DELETE /api/session
  - GET /api/session

### Photos
  - POST /api/users/:user.id/photos
    - add photo
  - GET /api/photos
    - all photos returned
  - GET /api/users/:user.id/photos
    - all photos for user returned
  - GET /api/photos/:photo.id
    - photo at photo.id returned
  - DELETE /api/photos/:photo_id
    - deletes photo

### Followers/Following
  - GET /api/users/:user.id/followers
    - list of user.id's followers returned
  - GET /api/users/:user.id/following
    - list of user.id's follows returned
  - POST /api/users/user.id/following
    - adds current user to list of user.id's followers
  - DELETE /api/users/:user.id/following
    - deletes current user from list of user.id's followers

## Likes
  - POST /api/photos/:photo.id/likes
    - adds currentUser to photo's likes
  - DELETE /api/photos/:photo.id/likes/:likes.user.id
    - deletes current user from list of photo's likes

## Comments
  - POST /api/photos/:photo.id/comments
    - adds comment to photo at photo.id
  - DELETE /api/photos/:photo.id/comments/:comments.id
    - deletes photo's comment matching comment.id
