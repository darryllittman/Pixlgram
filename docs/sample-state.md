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





-------------------------------------


{
  currentUser: {
    id: 1,
    username: "darryl",
    fullName: "Darryl Littman",
    bio: "sample bio",
    ProfilePic: {currentUser.photos.id: 1},
#FIXME
    <!-- array of photo id's -->
    photos: [1, 4, 23, 5],
    <!-- array of photo_id's -->
    comments: [3, 6, 5, 4, 3, 99],
    <!-- array of follow_id/follower_id -->
    following: [5, 66, 3, 786]
    followers: [5, 66, 3, 786]

    <!-- photos: {
      1: {
        user_id: 1,
        location: "San Francisco",
        caption: "Golden Gate Bridge",
        timestamp: "2011-07-28T23:14:04Z",
        likes: ["fred123", "john99", "sam55"], -->
#FIXME


        <!-- comments: {
          1: {
            author_id: 5,
            body, "first comment"
          },
          2: {
            author_id: 3,
            body, "second comment"
          }
        }
      } -->
    <!-- }, -->
#FIXME
    <!-- followers: {
      1: {
        user.id: 6,
        userName: "user6",
        follower_id: 5
      },
      2: {
        user.id: 25,
        userName: "user25",
        follower_id: 9
      },
      3: {
        user.id: 85,
        userName: "user85",
        follower_id: 10
      }
    },

    following: {
      1: {
        user.id: 5,
        userName: "user5",
        follow_id: 54
      },
      2: {
        user.id: 23,
        userName: "user23",
        follow_id: 24
      }
    }
  }, -->

  users: {
    1: {
      userName: "darryl",
      fullName: "Darryl Littman",

#FIXME
<!-- array of photo.ids -->
      photos: [4, 77, 52, 406],
      <!-- photos: {
        photo.id: 4,
        photo.id: 77,
        photo.id: 52,
        photo.id: 406
      }, -->
<!-- array of follow_ids/follower_id -->
      following: [23, 2],
      followers: [4, 97]
      <!-- following: {
        follow_id: 23,
        follow_id: 2
      },
      followers: {
        follower_id: 4,
        follower_id: 8
      } -->
    },
    2: {
      userName: "MJ",
      fullName: "Michael Jordan",
#FIXME
<!-- array of photo.ids -->
      photos: [49, 707, 22, 450],
      <!-- photos: {
        photo.id: 49,
        photo.id: 707,
        photo.id: 22,
        photo.id: 450
      }, -->
<!-- array of follow_id/follower_id -->
      following: [23, 1],
      followers: [4, 97]
      <!-- following: {
        follow_id: 23,
        follow_id: 1
      },

      followers: {
        follower_id: 4,
        follower_id: 97
      }
    } -->
  },

  allPhotos: {
    1: {
      user_id: 8,
#FIXME
<!-- array of likes.user_id -->
      likes: [3, 6, 5]
<!-- likes: [sam, john99], -->
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
