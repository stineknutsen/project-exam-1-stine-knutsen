import { allPostsEndpoint, apiKey } from "../shared/api.js";

export async function fetchPosts() {
  try {
    const response = await fetch(allPostsEndpoint);

    if (response.ok) {
      const posts = await response.json();
      return posts.data;
    } else {
      alert("Failed to fetch posts");
    }
  } catch (error) {
    alert(`Error fetching posts. Please try again`);
  }
}
