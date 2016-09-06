import
  { PhotoConstants,
    requestAllPhotos,
    requestSinglePhoto,
    requestDeletePhoto,
    receiveAllPhotos,
    receiveErrors,
    receiveSinglePhoto,
    createPhoto,
    removePhotoFromStore
    } from '../actions/photos_actions';

import { fetchPhotos, fetchSinglePhoto, addPhoto, deletePhoto }
  from '../util/photo_api_util';

import { hashHistory } from 'react-router';

const PhotosMiddleware = ({getState, dispatch}) => next => action => {


  let success;
  let error;
  switch(action.type) {
    case PhotoConstants.REQUEST_ALL_PHOTOS:
      success = (data) => {
        dispatch(receiveAllPhotos(data));
      };
      error = (data) => {
        dispatch(receiveErrors(data));
      };

      fetchPhotos(success, error);
      break;

    case PhotoConstants.REQUEST_SINGLE_PHOTO:
      success = (data) => {
        dispatch(receiveSinglePhoto(data));
      };
      error = (data) => {
        dispatch(receiveErrors(data));
      };

      fetchSinglePhoto(action.id, success, error);
      break;

    case PhotoConstants.CREATE_PHOTO:
      success = (data) => {
        dispatch(receiveSinglePhoto(data));
        hashHistory.push(`/photos/${data.id}`);

      };
      error = (data) => {
        dispatch(receiveErrors(data));
      };

      addPhoto(action.photo, success, error);
      break;

    case PhotoConstants.REQUEST_DELETE_PHOTO:
      console.log(action.id);
      success = (data) => {
        dispatch(removePhotoFromStore(data));
      };
      error = (data) => {
        dispatch(receiveErrors(data));
      };

      deletePhoto(action.id, success, error);
      break;

    default:
      return next(action);
  }
};

window.removePhotoFromStore = removePhotoFromStore;
window.createPhoto = createPhoto;
window.requestAllPhotos = requestAllPhotos;
window.requestSinglePhoto = requestSinglePhoto;
export default PhotosMiddleware;
