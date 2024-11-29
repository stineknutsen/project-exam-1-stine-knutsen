export function createpostsHtml(container, posts) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (posts.length === 0) {
    parent.innerHTML = `<p>No blog posts</p>`;
    return;
  }

  parent.innerHTML = "";

  posts.forEach((post) => {
    const postWrapper = document.createElement("div");
    postWrapper.classList.add("index-post-wrapper");

    const postCard = document.createElement("a");
    postCard.classList.add("post");
    postCard.href = `/post/index.html?id=${id}`;

    const imageUrl = post.media?.url;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    parent.append(postCard);
    postCard.append(imageElement, titleElement);
  });
}
