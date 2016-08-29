```
{
  currentUser: {
    id: 1,
    username: "darryl",
    fullName: "Darryl Littman",
    bio: "sample bio",
    ProfilePic: {currentUser.photos.id: 1},
<!-- array of photo id's -->
    photos: [1, 4, 23, 5],
<!-- array of photo_id's -->
    comments: [3, 6, 5, 4, 3, 99],
<!-- array of follow_id/follower_id -->
    following: [5, 66, 3, 786],
    followers: [5, 66, 3, 786]

  users: {
    1: {
      userName: "darryl",
      fullName: "Darryl Littman",

<!-- array of photo.ids -->
      photos: [4, 77, 52, 406],
<!-- array of follow_ids/follower_id -->
      following: [23, 2],
      followers: [4, 97]
    },
    2: {
      userName: "MJ",
      fullName: "Michael Jordan",
<!-- array of photo.ids -->
      photos: [49, 707, 22, 450],
<!-- array of follow_id/follower_id -->
      following: [23, 1],
      followers: [4, 97]
  },

  allPhotos: {
    1: {
      user_id: 8,
<!-- array of likes.user_id -->
      likes: [3, 6, 5]

      comments: {
        1: {
          author_id: 5,
          body, "first comment"
        },
        2: {
          author_id: 3,
          body, "second comment"
        }
      }
    },
    2: {
      user_id: 8,
<!-- array of likes.user_id -->
      likes: [45, 54],
      comments: {
        1: {
          author_id: 5,
          body, "first comment"
        },
        2: {
          author_id: 3,
          body, "second comment"
        }
      }
    }
    ...
  }
}
```
