import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(logger(), SessionMiddleware);

export default RootMiddleware;
