import { fetchPosts } from "../api/fetchPosts.js";
import { feedPostsHtml } from "./feedPostsHtml.js";

export async function displayFeedPosts() {
  try {
    const container = document.getElementById("posts-container");
    const posts = await fetchPosts();
    feedPostsHtml(container, posts);
  } catch (error) {
    alert("Failed to display posts.");
  }
}
