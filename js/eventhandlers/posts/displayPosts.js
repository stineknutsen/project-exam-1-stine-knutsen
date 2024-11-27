import { fetchPosts } from "../../api/fetchPosts";

export async function displayPosts() {
  const container = document.querySelector("#posts-container");

  try {
    const posts = await fetchPosts();
    createPostssHtml(container, posts);
  } catch (error) {
    displayMessage(container, "error", error.message);
  }
}
