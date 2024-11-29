function isLoggedIn() {
  return !!localStorage.getItem("accessToken");
}

export function visitorRestriction() {
  document.addEventListener("DOMContentLoaded", () => {
    if (!isLoggedIn()) {
      alert("You must be logged in to access this page.");
      window.location.href = "../../account/login.html";
    }
  });
}
