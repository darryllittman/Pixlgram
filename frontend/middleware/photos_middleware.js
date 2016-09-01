import
  { PhotoConstants,
    requestAllPhotos,
    requestSinglePhoto,
    requestDeletePhoto,
    receiveAllPhotos,
    receiveErrors,
    receiveSinglePhoto
    } from '../actions/photos_actions';

import { fetchPhotos, fetchSinglePhoto } from '../util/photo_api_util';

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

    default:
      return next(action);
  }
};

window.requestAllPhotos = requestAllPhotos;
window.requestSinglePhoto = requestSinglePhoto;
export default PhotosMiddleware;
