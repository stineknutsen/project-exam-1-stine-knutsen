import { apiRequest } from "../api/apiRequest.js";

const loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const data = await apiRequest("/auth/login", "POST", formData);
    localStorage.setItem("accessToken", data.data.accessToken);
    alert(`Login successful!`);
    console.log("Hello");
    window.location.href = "../account/index.html";
  } catch (error) {
    alert(`Error: Something went wrong`);
  }
});
