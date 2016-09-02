

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
  $.ajax({
    method: "POST",
    url: "/api/photos",
    data: {photo: {
                    caption: `${photo.caption}`,
                    url: `${photo.url}`,
                    id: `${photo.id}`,
                    location: `${photo.location}`
                  }
          },
    success,
    error
  });
};

export const deletePhoto = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/photos/${id}`,
    success,
    error
  });
};
