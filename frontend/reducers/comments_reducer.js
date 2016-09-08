import { CommentsConstants } from '../actions/comments_actions';
import { merge } from 'lodash';

const _nullComment = Object.freeze({
  comments: null,
  errors: []
});

export const selectComment = (comments, id) => (comments[id]);

export const CommentsReducer = function(state = _nullComment, action) {

  switch(action.type) {
    case CommentsConstants.RECEIVE_ALL_COMMENTS:
      const newState = {};
      action.comments.forEach ((comment) => {
        newState[comment.id] = comment;
      });
      return merge({}, state, newState);
    case CommentsConstants.RECEIVE_SINGLE_COMMENT:
      let commentId = action.comment.id;
      let comment = action.comment;

      let newCommentState = merge({}, state.comments, {[commentId]: comment});
      return merge({}, _nullComment, newCommentState);

    // case CommentsConstants.REMOVE_COMMENT_FROM_STORE:
    //
    //   const newS = Object.assign({}, state.comments);
    //   delete newS[action.id];
    //   return newS;

    default: return state;
  }
};
