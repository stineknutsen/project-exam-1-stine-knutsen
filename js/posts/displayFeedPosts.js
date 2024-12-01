import { fetchPosts } from "../api/fetchPosts.js";
import { feedPostsHtml } from "./feedPostsHtml.js";

// displayFeedPosts.js
export async function displayFeedPosts() {
  try {
    const posts = await fetchPosts();

    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Clear previous content

    // Use the 12 latest posts for the grid
    const postThumbnails = posts.slice(0, 12);

    feedPostsHtml(container, postThumbnails);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
