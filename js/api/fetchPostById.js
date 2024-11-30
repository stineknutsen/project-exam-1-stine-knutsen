import { singlePostEndpoint } from "../shared/api.js";
import { getPostIdFromUrl } from "../shared/getPostIdFromUrl.js";

export async function fetchPostById(postId) {
  postId = getPostIdFromUrl();
  try {
    const response = await fetch(singlePostEndpoint(postId));

    if (response.ok) {
      const post = await response.json();
      return post.data;
    } else {
      alert("Failed to fetch post");
    }
  } catch (error) {
    throw new Error("Failed to fetch post, sorry");
  }
}
