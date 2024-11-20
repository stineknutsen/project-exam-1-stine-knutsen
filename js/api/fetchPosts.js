import { postsUrl } from "../js/constants/api.js";

export async function fetchPosts() {
  const response = await fetch(postsUrl);

  if (response.ok) {
    const posts = await response.json();
    console.log(posts);
    return posts;
  }

  throw new Error("Failed to fetch posts");
}
