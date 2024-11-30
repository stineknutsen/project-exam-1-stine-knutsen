import { singlePostEndpoint } from "../constants/api.js";

export async function fetchPostById() {
  try {
    const response = await fetch(singlePostEndpoint);

    if (response.ok) {
      const post = await response.json();
      return post.data;
    } else {
      alert("Failed to fetch post");
    }
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
}
