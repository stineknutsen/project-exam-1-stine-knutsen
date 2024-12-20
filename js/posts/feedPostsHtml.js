export function feedPostsHtml(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `<p>No blog posts to display.</p>`;
    return;
  }

  container.innerHTML = "";

  posts.forEach((post) => {
    const postThumbNail = document.createElement("a");
    postThumbNail.classList.add("thumbnail");
    postThumbNail.href = `./post/index.html?id=${post.id}`;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const imageUrl = post.media?.url;
    const imageAlt = post.media?.alt;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = imageAlt;

    const title = post.title;
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    container.append(postThumbNail);
    postThumbNail.append(imageWrapper, titleElement);
    imageWrapper.append(imageElement);
  });
}
