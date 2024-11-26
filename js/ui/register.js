import { apiRequest } from "../api/apiRequest.js";

const registerForm = document.querySelector(".register");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const data = await apiRequest("/auth/register", "POST", formData);
    alert(`Registration successful! Redirecting to login`);
    window.location.href = "login.html";
  } catch (error) {
    alert(`Error: Something went wrong`);
  }
});
