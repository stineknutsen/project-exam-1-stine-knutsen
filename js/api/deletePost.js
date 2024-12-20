import { singlePostEndpoint } from "../shared/api.js";
import { getAccessToken } from "../shared/getAccessToken.js";

export async function deletePost(postId) {
  const accessToken = getAccessToken();

  try {
    const response = await fetch(singlePostEndpoint(postId), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete post. Please try again.");
    }

    alert("Post deleted successfully!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
