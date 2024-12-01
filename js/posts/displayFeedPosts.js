import { fetchPosts } from "../api/fetchPosts.js";
import { feedPostsHtml } from "./feedPostsHtml.js";

export async function displayFeedPosts() {
  try {
    const posts = await fetchPosts();

    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    const postThumbnails = posts.slice(0, 12);

    feedPostsHtml(container, postThumbnails);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
