import { apiKey, loginEndpoint } from "../shared/api";

export async function loginUser() {
  try {
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Log in failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
