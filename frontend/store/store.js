import { createStore } from 'redux';
import { RootReducer } from '../reducers/root_reducer';
import SessionReducer from '../reducers/session_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    SessionReducer,
    preloadedState
  )
);

export default configureStore;
