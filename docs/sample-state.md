{
  currentUser: {
    id: 1,
    username: "darryl",
    fullName: "Darryl Littman",
    bio: "sample bio",
    ProfilePic: {currentUser.photos.id: 1},
    photos: {
      1: {
        user_id: 1,
        location: "San Francisco",
        caption: "Golden Gate Bridge",
        timestamp: "2011-07-28T23:14:04Z",
        likes: ["fred123", "john99", "sam55"],
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
    },

    followers: {
      1: {
        user.id: 6,
        userName: "user6"
      },
      2: {
        user.id: 25,
        userName: "user25"
      },
      3: {
        user.id: 85,
        userName: "user85"
      }
    },

    following: {
      1: {
        user.id: 5,
        userName: "user5"
      },
      2: {
        user.id: 23,
        userName: "user23"
      }
    }
  },

  users: {
    1: {
      userName: "darryl",
      fullName: "Darryl Littman"
    },
    2: {
      userName: "MJ",
      fullName: "Michael Jordan"
    }
  }
}
