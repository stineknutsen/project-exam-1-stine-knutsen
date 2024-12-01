import { singlePostEndpoint } from "../shared/api.js";
import { getAccessToken } from "../shared/getAccessToken.js";

export async function updatePost(postId, updatedData) {
  const accessToken = getAccessToken();

  try {
    const response = await fetch(singlePostEndpoint(postId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update post. Please try again.");
    }

    const result = await response.json();
    alert("Post updated successfully!");
    return result;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
