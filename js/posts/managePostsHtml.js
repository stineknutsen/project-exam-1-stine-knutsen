import { deletePost } from "../api/deletePost.js";

export function managePostsHtml(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `<p>No blog posts to display.</p>`;
    return;
  }

  container.innerHTML = "";

  posts.forEach((post) => {
    const postThumbNail = document.createElement("div");
    postThumbNail.classList.add("thumbnail");

    const postWrapper = document.createElement("div");
    postWrapper.classList.add("post-wrapper");

    const imageUrl = post.media?.url;
    const imageAlt = post.media?.alt;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = imageAlt;

    const title = post.title;
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    editButton.dataset.id = post.id;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.id = post.id;

    container.append(postThumbNail);
    postThumbNail.append(postWrapper);
    postWrapper.append(imageElement, titleElement, buttonsDiv);
    buttonsDiv.append(editButton, deleteButton);
  });

  document.querySelectorAll(".edit-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const postId = event.target.dataset.id;
      window.location.href = `../post/edit.html?id=${postId}`;
    });
  });

  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const postId = event.target.dataset.id;
      if (confirm("Are you sure you want to delete this post?")) {
        await deletePost(postId);
        window.location.reload();
      }
    });
  });
}
