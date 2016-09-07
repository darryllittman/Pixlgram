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

import { fetchSingleComment } from '../util/comment_api_util';

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
    // case CommentsConstants.REQUEST_ALL_COMMENTS:
    //   success = (data) => {
    //     dispatch(receiveAllComments);
    //   };
    //
    //   fetchComments(success, error);
    //   break;
    default:
      return next(action);
  }
};

window.requestSingleComment = requestSingleComment;

export default CommentsMiddleware;
