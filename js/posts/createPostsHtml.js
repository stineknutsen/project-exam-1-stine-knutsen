export function createpostsHtml(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `<p>No blog posts to display.</p>`;
    return;
  }

  container.innerHTML = "";

  posts.forEach((post) => {
    const postThumbNail = document.createElement("a");
    postThumbNail.classList.add("post");
    postThumbNail.href = `/post/index.html?id=${id}`;

    const postWrapper = document.createElement("article");
    postWrapper.classList.add("post-wrapper");

    const imageUrl = post.media?.url;
    const imageAlt = post.media?.alt;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = imageAlt;

    const title = post.title;
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    parent.append(postThumbNail);
    postThumbNail.append(postWrapper);
    postWrapper.append(imageElement, titleElement);
  });
}
