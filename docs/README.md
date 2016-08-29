# Pixelgram

## Minimum Viable Product

Pixlgram is a photo sharing web application inspired by instagram and built on Ruby on Rails and React/Redux. A pixelgram user can can upload photos, view a photo feed, follow other users, like photos and comment on photos.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest login
- [ ] Images
- [ ] Likes
- [ ] Commenting on Images
- [ ] Following and Photo Feed
- [ ] **BONUS**: hashtags
- [ ] **BONUS**: direct messaging

## Design Docs
[Wireframes](./wireframes)  
[React Components](./component-heirarchy.md)  
[Sample State](./sample-state.md)  
[Redux Architecture](./redux-structure.md)  
[DB Schema](./schema.md)  
[API Endpoints](./api-endpoints.md)  

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective**: Functioning rails project with front end Authentication
- [ ] New Rails project
- [ ] User model/migration
- [ ] Back end authentication (session/password)

- [ ] Redux cycle for front end authentication
  - SessionReducer
  - Session Actions/Constants
  - Session API Util
  - AuthFormContainer
  - Action-Creators
    - signup
    - login
    - logout
    - receiveCurrentUser
    - receiveErrors
  - API functions
    - signup
    - login
    - logout
  - SessionMiddleware
  - Front End Routes
    - "/signup"
    - "/signin"
    - "/home"

- [ ] StaticPages controller and root view
- [ ] Webpack and react/redux modules
- [ ] APIUtil to interact with API
- [ ] User signup/login/logout/edit profile components
- [ ] Guest login
- [ ] Blank entry PhotoFeed component after successful signup/login
- [ ] Basic styling for signup/login/guest components
- [ ] Seed users

### Phase 2: Photos Model, API, PhotoFeed Component, Photo Hosting, React-Infinite(3 days)
- [ ] Photo Model
- [ ] Find and setup hosting service to host photos
- [ ] Ability to upload photos through hosting service
- [ ] Seed test data (to both hosting service and database)
- [ ] CRUD API for photos (PhotosController)
- [ ] JBuilder views for photos
- [ ] PhotoFeed components (AllPhotos, PhotoHeader, PhotoFooter) with Redux loops
- [ ] AddPhoto form
- [ ] Basic styling for PhotoFeed components
- [ ] React-Infinite (infinite scroll)

### Phase 3: Navbar, UserPageContainer, OtherUserContainer and PhotoViewContainer Components (2 days)
- [ ] Create Navbar component and all links/buttons
- [ ] Create UserPageContainer and redux cycles
- [ ] Create OtherUserContainer and redux cycles
- [ ] Create PhotoViewContainer and redux cycles
- [ ] Basic styling of Navbar, UserPageContainer, OtherUserContainer and PhotoViewContainer components

### Phase 4: FollowContainer Components, Comment Functionality and Likes functionality, final seeding (2 days)
- [ ] Create FollowContainer including followers list, following list and view
- [ ] Likes functionality of photos
- [ ] Comments functionality of photos
- [ ] Styling of following list
- [ ] Styling of followers list
- [ ] Final complete seeding of data

### Phase 5: Final Styling, Lots of testing
- [ ] Final touches on styling and bug fixes
- [ ] Ensure all MVP features are rock solid
