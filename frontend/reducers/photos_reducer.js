import { PhotoConstants } from '../actions/photos_actions';
import { merge } from 'lodash';

const _nullPhoto = Object.freeze({
  photos: null,
  errors: []
});

export const selectPhoto = (photos, id) => (photos[id]);

export const PhotosReducer = function(state = _nullPhoto, action) {
  switch(action.type) {

    case PhotoConstants.RECEIVE_ALL_PHOTOS:
      const newState = {};
      action.photos.forEach ((photo) => {
        newState[photo.id] = photo;
      });
      return merge({}, state, newState);

    case PhotoConstants.RECEIVE_SINGLE_PHOTO:
      let photoId = action.photo.id;
      let photo = action.photo;
  
      let newPhotoState = merge({}, state.photos, {[photoId]: photo});
      return merge({}, _nullPhoto, {photos: newPhotoState});

    case PhotoConstants.REMOVE_PHOTO_FROM_STORE:
      const newS = Object.assign({}, state.photos);
      delete newS[action.id];
      return newS;

    case PhotoConstants.RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});



    default: return state;
  }
};
