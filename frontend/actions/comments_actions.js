export const CommentsConstants = {
  REQUEST_ALL_COMMENTS: "REQUEST_ALL_COMMENTS",
  RECEIVE_ALL_COMMENTS: "RECEIVE_ALL_COMMENTS",
  REQUEST_SINGLE_COMMENT: "REQUEST_SINGLE_COMMENT",
  RECEIVE_SINGLE_COMMENT: "RECEIVE_SINGLE_COMMENT",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CREATE_COMMENT: "CREATE_COMMENT",
  REQUEST_DELETE_COMMENT: "REQUEST_DELETE_COMMENT",
  REMOVE_COMMENT_FROM_STORE: "REMOVE_COMMENT_FROM_STORE"
};

export const requestAllComments = () => ({
  type: CommentsConstants.REQUEST_ALL_COMMENTS
});

export const receiveAllComments = (comments) => ({
  type: CommentsConstants.RECEIVE_ALL_COMMENTS,
  comments
});

export const requestSingleComment = (id) => ({
  type: CommentsConstants.REQUEST_SINGLE_COMMENT,
  id
});

export const receiveSingleComment = (comment) => ({
  type: CommentsConstants.RECEIVE_SINGLE_COMMENT,
  comment
});

export const receiveErrors = (errors) => ({
  type: CommentsConstants.RECEIVE_ERRORS,
  errors
});

export const createComment = (comment) => ({
  type: CommentsConstants.CREATE_COMMENT,
  comment
});

export const requestDeleteComment = (id) => ({
  type: CommentsConstants.REQUEST_DELETE_COMMENT,
  id
});

export const removeCommentFromStore = (id) => ({
  type: CommentsConstants.REMOVE_COMMENT_FROM_STORE,
  id
});
