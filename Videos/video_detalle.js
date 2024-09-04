document.addEventListener("DOMContentLoaded", function () {
  // Manejo de textarea y botones en .comment-form (primera parte)
  const commentFormTextarea = document.querySelector(".comment-form textarea");
  const commentFormSubmitButton = document.querySelector(
    ".comment-form .comment-submit"
  );
  const commentFormCancelButton = document.querySelector(
    ".comment-form .cancel-submit"
  );

  if (commentFormTextarea) {
    commentFormTextarea.addEventListener("input", function () {
      if (commentFormTextarea.value.trim() !== "") {
        commentFormCancelButton.style.display = "inline-block";
      } else {
        commentFormCancelButton.style.display = "none";
      }
    });

    commentFormCancelButton.addEventListener("click", function () {
      commentFormTextarea.value = "";
      commentFormCancelButton.style.display = "none";
      commentFormTextarea.focus();
    });
  }

  // Manejo de textarea y botones en .comment-text (segunda parte)
  const replyLinks = document.querySelectorAll(".reply-link");
  const replyTextarea = document.querySelector("#reply-input");
  const commentTextSubmitButton = document.querySelector(
    ".comment-text .comment-submit"
  );
  const commentTextTextarea = document.querySelector(".comment-text textarea");
  const commentTextCancelButton = document.querySelector(
    ".comment-text .cancel-submit"
  );

  // Ocultar textarea, botón submit y botón cancel en .comment-text inicialmente
  commentTextTextarea.style.display = "none";
  commentTextSubmitButton.style.display = "none";
  commentTextCancelButton.style.display = "none";

  replyLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (replyTextarea.style.display === "block") {
        replyTextarea.style.display = "none";
        commentTextTextarea.style.display = "none"; // Ocultar textarea
        commentTextSubmitButton.style.display = "none"; // Ocultar botón submit
      } else {
        replyTextarea.style.display = "block";
        commentTextTextarea.style.display = "block"; // Mostrar textarea
        commentTextSubmitButton.style.display = "inline-block"; // Mostrar botón submit
      }
    });
  });

  if (commentTextTextarea) {
    commentTextTextarea.addEventListener("input", function () {
      if (commentTextTextarea.value.trim() !== "") {
        commentTextCancelButton.style.display = "inline-block";
      } else {
        commentTextCancelButton.style.display = "none";
      }
    });

    commentTextCancelButton.addEventListener("click", function () {
      commentTextTextarea.value = "";
      commentTextCancelButton.style.display = "none";
      commentTextTextarea.focus();
    });
  }
});
