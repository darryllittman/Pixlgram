# SCHEMA


## USERS

| column name | data type | constraints |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| username  | string  | not null, indexed, unique |
| full_name | string | |
| password_digest | string | not null|
| session_token | string | not null, indexed, unique |
| bio | text | |
| profile_pic_id | integer | foreign key (photo) |


<!-- | photos | integer | foreign keys (references photos) indexed |
| follower_id | integer | foreign key (followers' user.id), indexed |
| follow_id | integer | foreign keys (following user.id), indexed | -->

<!-- - id:
  - integer
  - not null, primary key

- username:
  - string
  - not null, indexed, unique

- full_name:
  - string

- password_digest:
  - string
  - not null

- session_token:
  - string
  - not null, indexed, unique

- bio:
  - text

- profile_pic_id:
  - integer
  - foreign key (references photo), indexed

- photos:
  - integer
  - foreign keys (references photos), indexed

- follower_id:
  - integer
  - foreign keys (references followers' user.id), indexed

- follow_id:
  - integer
  - foreign keys (references following user.id), indexed -->



## PHOTOS
| column name | data type | constraints |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key (user) indexed |
| location | string | |
| caption | string | |

<!-- - id:
  - integer
  - not null, primary key

- user_id:
  - integer
  - not null, foreign key (references user), indexed

- location:
  - string

- caption:
  - string -->




## COMMENTS:
| column name | data type | constraints |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| body | text | not null |
| user_id | integer | not null, foreign key (user), indexed |
| photo_id | integer | not null, foreign key (photo), indexed |

<!-- - id:
  - integer
  - not null, primary key

- body:
  - text
  - not null

- user_id:
  - integer
  - not null, foreign key (references user), indexed

- photo_id:
  - integer
  - not null, foreign key (references photo), indexed
 -->



## LIKES:
| column name | data type | constraints |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| user_id  | integer  | not null, foreign key (user), indexed |
| photo_id | integer | not null, foreign key (photo), indexed |

<!--
- id:
  - integer
  - not null, primary key

- user_id:
  - integer
  - not null, foreign key (references user), indexed

- photo_id:
  - integer
  - not null, foreign key (references photo), indexed -->
## FOLLOWS:
| column name | data type | constraints |
| ------------- | ------------- | ------------- |
| id  | integer  | not null, primary key |
| follow_id| integer | not null, foreign key, indexed |
| follower_id| integer | not null, foreign key currentUser), indexed |
