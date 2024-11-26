/*
function router() {
    const { pathname } = window.location;
  
    switch (pathname) {
      case "/":
      case "/index.html":
        //displayPosts();
        break;
      case "/product/index.html":
        //displaySinglePost();
        break;
      //case "/account/register.html":
        //displayCart();
        //break;
    }
  }
  
  router(); */

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
