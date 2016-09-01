

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

export const addPhoto = (photo, success, error) => {
  // debugger
  $.ajax({
    method: "POST",
    url: "/api/photos",
    data: {photo: {
                              caption: `${photo.caption}`,
                              id: `${photo.id}`,
                              user_id: `${photo.user_id}`,
                              location: `${photo.location}`
                          
                    }
          },
    success,
    error
  });
};

export const deletePhoto = (id, success, error) => {
  // debugger
  $.ajax({
    method: "DELETE",
    url: `/api/photos/${id}`,
    success,
    error
  });
};
