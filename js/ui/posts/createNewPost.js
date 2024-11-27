import { apiRequest } from "../api/apiRequest.js";
import { allPostsEndpoint } from "../../shared/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.querySelector(".create");

  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim();
    const altText = document.getElementById("alt_text").value.trim();

    if (!title || !content || !image || !altText) {
      throw new Error("Please fill in all required fields.");
    }

    const postData = {
      title: title,
      body: content,
      media: {
        url: image,
        alt: altText,
      },
      author: localStorage.getItem("username") || "Anonymous",
      created: new Date().toISOString,
    };

    try {
      await apiRequest(allPostsEndpoint, "POST", postData);
      alert("Post created successfully!");
      window.location.href = "/account.html";
    } catch (error) {
      alert(`Error creating post`);
    }
  });
});
