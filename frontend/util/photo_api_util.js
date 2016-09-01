

export const fetchPhotos = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/photos",
    success,
    error
  });
};

export const fetchSinglePhoto = (id, success, error) => {

  $.ajax({
    method: "GET",
    url: `/api/photos/${id}`,
    success,
    error
  });
};

// export const createPhoto = (photo, success, error) => {
//   $.ajax({
//     method: "POST",
//     url: "/api/photos",
//     data: {photo: {user_id: 1, location: "SF", caption: "Netflix and Chill"}},
//     success,
//     error
//   });
// };


// $.ajax({
//   method: "POST",
//   url: "/api/photos",
//   data: {photo: {user_id: 1, location: "SF", caption: "Netflix and Chill"}},
//   success: (data)=> (console.log(data)),
//   error: (data)=> (console.log(data))
// });


// $.ajax({
//   method: "DELETE",
//   url: "/api/photos",
//   success: (data)=> (console.log(data)),
//   error: (data)=> (console.log(data))
// });
