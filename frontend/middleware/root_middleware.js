import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(logger(),
                       SessionMiddleware,
                       PhotosMiddleware);

export default RootMiddleware;
