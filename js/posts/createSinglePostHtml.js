export function createSinglepostHtml(container, post) {
  container.innerHTML = "";

  const { image, title, content } = post;

  updatePageTitle(title);

  const postCard = document.createElement("div");
  postCard.classList.add("post-card");

  const imageElement = document.createElement("img");
  imageElement.src = image.url;

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const bodyElement = document.createElement("p");
  bodyElement.textContent = content;

  container.append(imageElement, postCard);
  postCard.append(titleElement, bodyElement);
}
