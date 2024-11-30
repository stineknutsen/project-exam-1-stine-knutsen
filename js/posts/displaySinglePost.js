import { fetchPostById } from "../api/fetchPostById.js";
import { getPostIdFromUrl } from "../shared/getPostIdFromUrl.js";
import { singlepostHtml } from "./singlePostHtml.js";

export async function displaySinglePost() {
  const postId = getPostIdFromUrl();
  console.log("Post Id:", postId);

  if (!postId) {
    window.location.href = "/";
  }

  const container = document.querySelector("#post-container");

  try {
    const post = await fetchPostById();
    singlepostHtml(container, post);
    const shareButton = document.getElementById("share-button");
    if (shareButton) {
      shareButton.addEventListener("click", function (event) {
        event.preventDefault();
        const postUrl = window.location.href;

        navigator.clipboard
          .writeText(postUrl)
          .then(() => {
            alert("Link copied to clipboard. Ready to share!");
          })
          .catch(() => {
            alert("Could not copy link. Please try again.");
          });
      });
    }
  } catch (error) {
    alert("Error displaying post");
  }
}
