export const baseUrl = "https://v2.api.noroff.dev";
export const apiKey = "ee1394aa-e6c3-4f10-9cac-7a3e0835c62a";

export const blogName = "hotview_admin";
export const allPostsUrl = `${baseUrl}/blog/posts/${blogName}`;
export const singlePostUrl = (postId) =>
  `${baseUrl}/blog/posts/${blogName}/${postId}`;
