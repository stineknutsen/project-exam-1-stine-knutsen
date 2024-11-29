import { apiKey, loginEndpoint } from "../shared/api.js";
import { updateHeader } from "./updateHeader.js";

export function loginUser() {
  const loginForm = document.querySelector(".login");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(error.message || "Log in failed");
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("userEmail", data.data.email);
      localStorage.setItem("userName", data.data.name);

      alert(`Login successful!`);
      updateHeader();
      console.log("ok");
      window.location.href = "../account/index.html";
    } catch (error) {
      alert(`Error: Something went wrong during login`);
    }
  });
}
