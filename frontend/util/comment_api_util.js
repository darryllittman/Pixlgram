export const fetchSingleComment = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/comments/${id}`,
    success,
    error
  });
};
