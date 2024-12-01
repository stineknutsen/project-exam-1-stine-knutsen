export function updateHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const blogButton = document.getElementById("blogButton");
    const aboutButton = document.getElementById("aboutButton");
    const nav = loginButton.parentElement;

    const authToken = localStorage.getItem("accessToken");

    if (authToken) {
      loginButton.textContent = "Account";
      loginButton.href = "/account/index.html";

      blogButton.remove();
      aboutButton.remove();

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
      loginButton.textContent = "Sign In";
      loginButton.href = "/account/login.html";
    }
  });
}
