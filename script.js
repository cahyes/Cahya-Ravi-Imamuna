const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const cardWidth = document.querySelector(".col-lg-4").offsetWidth;
const cardsWrapper = document.querySelector(".cards-wrapper");

prevButton.addEventListener("click", () => {
  cardsWrapper.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  cardsWrapper.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});
 