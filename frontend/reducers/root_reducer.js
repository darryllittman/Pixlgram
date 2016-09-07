import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import { PhotosReducer } from './photos_reducer';
import { CommentsReducer } from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  comments: CommentsReducer
});

export default RootReducer;
