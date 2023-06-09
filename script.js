/** @format */

//stars
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}
//основная функция
function initRatings() {
  let ratingActive, ratingValue;
  //"бегает" по всем рейтингам на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  //иницилизация конкретного рейтинга
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }
  //иницилизация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector("rating_active");
    ratingValue = rating.querySelector("rating_value");
  }
  //изменения ширины активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const setRatingActiveWidth = index / 0.05;
    ratingActive.style.width = `${setRatingActiveWidth}%`;
  }
}
///////
const selectContainer = document.querySelector(".custom-select");
const selectedOption = selectContainer.querySelector(".selected-option");
const dropdownContent = selectContainer.querySelector(".dropdown-content");

selectedOption.addEventListener("click", function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

dropdownContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("option")) {
    selectedOption.textContent = event.target.textContent;
    dropdownContent.style.display = "none";
  }
});
