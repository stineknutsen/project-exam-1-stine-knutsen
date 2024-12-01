import { allPostsEndpoint } from "../shared/api.js";
import { getAccessToken } from "../shared/getAccessToken.js";

export async function createPost() {
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
        author: localStorage.getItem("userName"),
      };

      const accessToken = getAccessToken();

      try {
        const response = await fetch(allPostsEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },

          body: JSON.stringify(postData),
        });
        console.log("hello");

        if (response.ok) {
          alert("Post created successfully!");
          postForm.reset();
          window.location.href = "../account/index.html";
        } else {
          const error = await response.json();
          alert("Failed to create post");
        }
      } catch (error) {
        alert(`Error creating post. Please try again`);
      }
    });
  });
}
