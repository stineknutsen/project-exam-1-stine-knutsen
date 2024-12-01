export function initializeCarousel() {
  const carouselPostContainer = document.getElementById(
    "carousel-post-container"
  );
  const carouselItems = document.querySelectorAll(".carousel-item");

  let currentPost = 0;

  function showPost(index) {
    if (index >= carouselItems.length) {
      currentPost = 0;
    } else if (index < 0) {
      currentPost = carouselItems.length - 1;
    } else {
      currentPost = index;
    }

    const offset = -currentPost * 100;
    carouselPostContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextPost() {
    showPost(currentPost + 1);
  }

  function previousPost() {
    showPost(currentPost - 1);
  }

  showPost(currentPost);

  document.querySelector(".next-button").addEventListener("click", nextPost);
  document
    .querySelector(".previous-button")
    .addEventListener("click", previousPost);
}
