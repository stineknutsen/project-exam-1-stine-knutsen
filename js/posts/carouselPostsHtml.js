export function carouselPostsHtml(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `<p>No blog posts to display.</p>`;
    return;
  }

  container.innerHTML = "";

  posts.forEach((post) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    const imageUrl = post.media?.url;
    const imageAlt = post.media?.alt;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = imageAlt;

    const title = post.title;
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const link = document.createElement("a");
    link.textContent = "Read post";
    link.href = `./post/index.html?id=${post.id}`;

    container.append(carouselItem);
    carouselItem.append(imageElement, titleElement, link);
  });
}
