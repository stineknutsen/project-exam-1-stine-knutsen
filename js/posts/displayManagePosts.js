import { fetchPosts } from "../api/fetchPosts.js";
import { managePostsHtml } from "./managePostsHtml.js";

export async function displayManagePosts() {
  const userName = localStorage.getItem("userName");
  const welcomeUser = document.getElementById("welcome-user");
  welcomeUser.textContent = "Hello, " + userName + "!";
  try {
    const container = document.getElementById("posts-container");
    const posts = await fetchPosts();
    managePostsHtml(container, posts);
  } catch (error) {
    alert("Failed to display posts.");
  }
}
