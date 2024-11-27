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
    localStorage.setItem("userEmail", data.data.email);
    localStorage.setItem("userName", data.data.name);
    alert(`Login successful!`);
    window.location.href = "../account/index.html";
  } catch (error) {
    alert(`Error: Something went wrong`);
  }
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const nav = loginButton.parentElement;
  const userName = localStorage.getItem("userName");

  const authToken = localStorage.getItem("accessToken");

  if (authToken) {
    loginButton.textContent = "Hello, " + userName + "!";
    loginButton.href = "/account/index.html";

    // Remove the other buttons

    // Create and append a "Logout" button
    const logoutButton = document.createElement("a");
    logoutButton.href = "#";
    logoutButton.id = "logoutButton";
    logoutButton.textContent = "Log Out";
    nav.appendChild(logoutButton);

    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        alert("You have been logged out.");
        window.location.href = "/account/login.html";
      }
    });
  } else {
    // User is not logged in: Update Admin button
    loginButton.textContent = "Sign In";
    loginButton.href = "/account/login.html";
  }
});
*/
