import { allPostsEndpoint } from "../shared/api.js";

export async function fetchPosts() {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(allPostsEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },

      body: JSON.stringify(postData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      alert("Failed to fetch posts");
    }
  } catch (error) {
    alert(`Error fetching posts. Please try again`);
  }
}
