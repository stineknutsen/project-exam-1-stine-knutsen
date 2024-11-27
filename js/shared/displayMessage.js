export function displayMessage(container, messageType, message) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  parent.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
