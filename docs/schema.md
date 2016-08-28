USERS

id:
-integer
  -not null, primary key

username:
-string
  -not null, indexed, unique

full_name:
-string

password_digest:
-string
  -not null

session_token:
-string
  -not null, indexed, unique

bio:
-text

profile_pic_id:
-integer
  -foreign key (references photo), indexed

photos:
-integer
  -foreign keys (references photos), indexed

followers_id:
-integer
  -foreign keys (references followers' user.id), indexed

following_id:
-integer
  -foreign keys (references following user.id), indexed



PHOTOS

:id
  -integer
    -not null, primary key

:user_id
  -integer
    -not null, foreign key (references user), indexed




COMMENTS:

:id
  -integer
    -not null, primary key

:user_id
  -integer
    -not null, foreign key (references user), indexed

:photo_id
  -integer
    -not null, foreign key (references photo), indexed




LIKES:

:id
  -integer
    -not null, primary key

:user_id
  -integer
    -not null, foreign key (references user), indexed

:photo_id
  -integer
    -not null, foreign key (references photo), indexed
