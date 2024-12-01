import { fetchPosts } from "../api/fetchPosts.js";
import { carouselPostsHtml } from "./carouselPostsHtml.js";
import { initializeCarousel } from "./initializeCarousel.js";

// displayCarousel.js
export async function displayCarousel() {
  try {
    const posts = await fetchPosts();

    console.log(posts);

    const carouselPostContainer = document.getElementById(
      "carousel-post-container"
    );
    carouselPostContainer.innerHTML = ""; // Clear previous content

    // Only use the 3 latest posts for the carousel
    const latestPosts = posts.slice(0, 3);
    carouselPostsHtml(carouselPostContainer, latestPosts);

    // Initialize carousel
    initializeCarousel();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
