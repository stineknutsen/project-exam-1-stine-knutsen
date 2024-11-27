import { baseUrl } from "../constants/api.js";

export async function fetchPosts() {
  const response = await fetch(baseUrl);

  if (response.ok) {
    const posts = await response.json().data;
    return posts;
  }

  throw new Error("Failed to fetch posts");
}
