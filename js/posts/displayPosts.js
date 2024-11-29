import { fetchPosts } from "../api/fetchPosts.js";

export async function displayPosts() {
  const container = document.getElementById("posts-container");

  try {
    const posts = await fetchPosts();
    createPostssHtml(container, posts);
  } catch (error) {
    alert("Failed to display posts.");
  }
}
