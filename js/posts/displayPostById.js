export async function displayPostById() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#post-container");

  try {
    const post = await fetchPostById();
    createSinglePostHtml(container, post);
  } catch (error) {
    displayMessage(container, "error", error.message);
  }
}
