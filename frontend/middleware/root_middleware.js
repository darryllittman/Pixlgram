import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import CommentsMiddleware from './comments_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(logger(),
                       SessionMiddleware,
                       PhotosMiddleware,
                       CommentsMiddleware);

export default RootMiddleware;
