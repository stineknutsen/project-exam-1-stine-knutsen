export function singlepostHtml(container, post) {
  container.innerHTML = "";

  if (!post) {
    container.innerHTML = `<p>No blog posts to display.</p>`;
    return;
  }

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  const infoWrapper = document.createElement("div");
  infoWrapper.classList.add("info-wrapper");

  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");

  const imageUrl = post.media?.url;
  const imageAlt = post.media?.alt;
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = imageAlt;

  const published = post.created;
  const publishedElement = document.createElement("p");
  const date = new Date(published);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);
  publishedElement.textContent = "Published: " + formattedDate;

  const author = post.author?.name;
  const authorElement = document.createElement("p");
  authorElement.textContent = "Author: " + author;

  const shareElement = document.createElement("button");
  shareElement.id = "share-button";
  shareElement.textContent = "Share";

  const title = post.title;
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const body = post.body;
  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  infoWrapper.append(publishedElement, authorElement, shareElement);
  postWrapper.append(infoWrapper, titleElement, bodyElement);
  imageWrapper.append(imageElement);
  container.append(imageWrapper, postWrapper);
}
