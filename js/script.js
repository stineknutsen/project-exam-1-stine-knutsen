import { updateHeader } from "./account/updateHeader.js";
import { visitorRestriction } from "./account/restrictions.js";
import { registerUser } from "./account/registerUser.js";
import { loginUser } from "./account/loginUser.js";
import { createPost } from "./posts/createPost.js";
import { displayPosts } from "./posts/displayPosts.js";

function router() {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayPosts();
      break;
    case "/post/index.html":
      //displaySinglePost();
      break;
    case "/account/register.html":
      registerUser();
      break;
    case "/account/login.html":
      loginUser();
      break;
    case "/account/index.html":
      visitorRestriction();
      displayPosts();
      break;
    case "/post/create.html":
      visitorRestriction();
      createPost();
      break;
    case "/post/edit.html":
      visitorRestriction();
      //editPost();
      break;
  }
}

router();
updateHeader();
