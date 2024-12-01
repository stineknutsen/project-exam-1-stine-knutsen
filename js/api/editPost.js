import { updatePost } from "../api/updatePost.js";
import { deletePost } from "../api/deletePost.js";
import { getPostIdFromUrl } from "../shared/getPostIdFromUrl.js";
import { fetchPostById } from "./fetchPostById.js";

export async function editPost() {
  const postId = getPostIdFromUrl();

  if (!postId) {
    alert("No post ID found. Redirecting...");
    window.location.href = "/account.html";
    return;
  }

  const updateButton = document.getElementById("update-button");
  const deleteButton = document.getElementById("delete-button");

  try {
    const post = await fetchPostById(postId);

    if (post) {
      document.getElementById("title").value = post.title || "";
      document.getElementById("content").value = post.body || "";
      document.getElementById("image").value = post.media?.url || "";
      document.getElementById("alt_text").value = post.media?.alt || "";
    }
  } catch (error) {
    console.error(error);
    alert("Could not load the post data. Please try again later.");
    return;
  }

  updateButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const updatedData = {
      title: document.getElementById("title").value,
      body: document.getElementById("content").value,
      media: {
        url: document.getElementById("image").value,
        alt: document.getElementById("alt_text").value,
      },
    };

    await updatePost(postId, updatedData);
    window.location.href = `../post/index.html?id=${postId}`;
  });

  deleteButton.addEventListener("click", async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deletePost(postId);
      window.location.href = "/account/index.html";
    }
  });
}
