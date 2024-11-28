import { apiKey, registerEndpoint } from "../shared/api.js";

const registerForm = document.querySelector(".register");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  if (!formData.email.endsWith("@stud.noroff.no")) {
    alert("Please use a @stud.noroff.no email address");
    return;
  }

  try {
    const response = await fetch(registerEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to register");
    }
    alert(`Registration successful! Redirecting to login`);
    window.location.href = "login.html";
  } catch (error) {
    alert(`Error: Something went wrong during registration`);
  }
});
