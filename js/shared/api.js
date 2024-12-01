const baseUrl = "https://v2.api.noroff.dev";
export const apiKey = "ee1394aa-e6c3-4f10-9cac-7a3e0835c62a";

export const registerEndpoint = `${baseUrl}/auth/register`;
export const loginEndpoint = `${baseUrl}/auth/login`;

const blogName = "hotview_admin";
export const allPostsEndpoint = `${baseUrl}/blog/posts/${blogName}`;
export const singlePostEndpoint = (postId) => `${allPostsEndpoint}/${postId}`;
