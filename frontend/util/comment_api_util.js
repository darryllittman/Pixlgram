export const fetchSingleComment = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/comments/${id}`,
    success,
    error
  });
};

export const addComment = (comment, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/comments",
    data: {comment: {
      body: `${comment.body}`,
      photo_id: `${comment.photo_id}`
    }},
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
    success,
    error
  });
};
