import {
  CommentsConstants,
  requestAllComments,
  receiveAllComments,
  requestSingleComment,
  receiveSingleComment,
  receiveErrors,
  createComment,
  requestDeleteComment,
  removeCommentFromStore,
} from '../actions/comments_actions';

import { fetchSingleComment, addComment, deleteComment }
  from '../util/comment_api_util';

import { hashHistory } from 'react-router';

const CommentsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = (data) => {
    dispatch(receiveErrors(data));
  };

  switch(action.type) {
    case CommentsConstants.REQUEST_SINGLE_COMMENT:
      success = (data) => {
        dispatch(receiveSingleComment(data));
      };

      fetchSingleComment(action.id, success, error);
      break;

    case CommentsConstants.CREATE_COMMENT:
      success = (data) => {
        dispatch(receiveSingleComment(data));
        hashHistory.push(`/photos/${data.photo_id}`);
      };

      addComment(action.comment, success, error);
      break;

    case CommentsConstants.REQUEST_DELETE_COMMENT:

      success = (data) => {
        dispatch(removeCommentFromStore(data));
      };

      deleteComment(action.id, success, error);
      break;

    default:
      return next(action);
  }
};

window.requestSingleComment = requestSingleComment;
window.createComment = createComment;
window.requestDeleteComment = requestDeleteComment;

export default CommentsMiddleware;
