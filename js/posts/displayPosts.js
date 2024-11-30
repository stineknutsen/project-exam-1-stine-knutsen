import { fetchPosts } from "../api/fetchPosts.js";
import { createPostsHtml } from "./createPostsHtml.js";

export async function displayPosts() {
  try {
    const container = document.getElementById("posts-container");
    const posts = await fetchPosts();
    createPostsHtml(container, posts);
  } catch (error) {
    alert("Failed to display posts.");
  }
}

/*
async function main() {

  if (username === "hotview_admin") {
    posts = await fetchPostsFromAPI();
  } else {
    posts = fetchPostsFromLocalStorage();
  }

} */
