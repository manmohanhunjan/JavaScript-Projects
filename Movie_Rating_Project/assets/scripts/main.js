const backdrop = document.querySelector("#backdrop");
const addMovieBtn = document.querySelector("#addMovieBtn");
const modal = document.querySelector(".modal");
const modalCancelBtn = document.querySelector(".btn--passive");

addMovieBtn.addEventListener("click", function () {
  backdrop.className = "visible";
  modal.classList.add(
    "visible",
    "modal__title",
    "modal_content",
    "modal_actions"
  );

  backdrop.addEventListener("click", function () {
    backdrop.className = "";
    modal.classList.remove(
      "visible",
      "modal__title",
      "modal_content",
      "modal_actions"
    );
  });
  modalCancelBtn.addEventListener("click", function () {
    backdrop.className = "";
    modal.classList.remove(
      "visible",
      "modal__title",
      "modal_content",
      "modal_actions"
    );
  });
});

// const movieAddBtn = document.querySelector(".btn--success");
// const movieTitleInput = document.querySelector("#title");
// const movieImageInput = document.querySelector("#image-url");
// const movieRatingInput = document.querySelector("#rating");

// const cardMovieListUl = document.querySelector("#movie-list");

// movieAddBtn.addEventListener("click", function () {
//   //   alert("wrking");
//   const li = document.createElement("li");
//   cardMovieListUl.appendChild(li);
//   (li.textContent = movieTitleInput.value),
//     movieImageInput.value,
//     movieRatingInput.value;
// });
