import { fetchPosts } from "../api/fetchPosts.js";
import { carouselPostsHtml } from "./carouselPostsHtml.js";
import { initializeCarousel } from "./initializeCarousel.js";

export async function displayCarousel() {
  try {
    const posts = await fetchPosts();

    const carouselPostContainer = document.getElementById(
      "carousel-post-container"
    );
    carouselPostContainer.innerHTML = "";

    const latestPosts = posts.slice(0, 3);
    carouselPostsHtml(carouselPostContainer, latestPosts);

    initializeCarousel();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
