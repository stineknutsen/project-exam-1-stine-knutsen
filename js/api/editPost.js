import { getPostIdFromUrl } from "../shared/getPostIdFromUrl.js";

export function editPost() {
  const imageUrlInput = document.getElementById("image");
  const altTextInput = document.getElementById("alt_text");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");

  const postId = getPostIdFromUrl();
  console.log(postId);
}
