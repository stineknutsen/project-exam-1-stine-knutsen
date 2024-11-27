import { singlePostEndpoint } from "../constants/api.js";

export async function fetchPostById() {
  const response = await fetch(singlePostEndpoint);

  if (response.ok) {
    const post = await response.json().data;
    return post;
  }

  throw new Error("Failed to fetch post");
}
