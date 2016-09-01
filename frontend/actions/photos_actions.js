export const PhotoConstants = {
  REQUEST_ALL_PHOTOS: "REQUEST_ALL_PHOTOS",
  RECEIVE_ALL_PHOTOS: "RECEIVE_ALL_PHOTOS",
  REQUEST_SINGLE_PHOTO: "REQUEST_SINGLE_PHOTO",
  RECEIVE_SINGLE_PHOTO: "RECEIVE_SINGLE_PHOTO",
  REQUEST_DELETE_PHOTO: "REQUEST_DELETE_PHOTO",
  REMOVE_PHOTO_FROM_STORE: "REMOVE_PHOTO_FROM_STORE",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const requestAllPhotos = () => ({
  type: PhotoConstants.REQUEST_ALL_PHOTOS
});

export const requestSinglePhoto = (id) => ({
  type: PhotoConstants.REQUEST_SINGLE_PHOTO,
  id
});

export const requestDeletePhoto = (id) => ({
  type: PhotoConstants.REQUEST_DELETE_PHOTO,
  id
});

export const removePhotoFromStore = (id) => ({
  type: PhotoConstants.REMOVE_PHOTO_FROM_STORE,
  id
});

export const receiveAllPhotos = (photos) => ({
  type: PhotoConstants.RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveSinglePhoto = (photo) => ({
  type: PhotoConstants.RECEIVE_SINGLE_PHOTO,
  photo
});

export const receiveErrors = (errors) => ({
  type: PhotoConstants.RECEIVE_ERRORS,
  errors
});
