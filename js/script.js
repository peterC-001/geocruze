const view = document.querySelector(".reviews-view");
const btnPrev = document.querySelector(".reviews-btn-prev");
const btnNext = document.querySelector(".reviews-btn-next");
const reviewsWidth = document.querySelector(".reviews-client-E").offsetWidth;

let index = 0;
let width = window.innerWidth;

btnNext.addEventListener("click", () => {
   event.preventDefault();
  if (index < 5) {
    index++;
    view.style.transform = `translateX(-${index * reviewsWidth}px)`;
  }
});

btnPrev.addEventListener("click", () => {
  event.preventDefault();
  if (index > 0) {
    index--;
    view.style.transform = `translateX(-${index * reviewsWidth}px)`;
  }
});

const quizes = document.querySelectorAll(".faq-quizes");

quizes.forEach((quiz) => {
  quiz.addEventListener("click", () => {
    const answer = quiz.nextElementSibling;
    const btn = quiz.querySelector(".faq-btn");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      btn.innerHTML = "+";
      quiz.style.borderRadius = "2rem";
      quiz.classList.remove("active");
    } else {
      answer.style.display = "block";
      btn.innerHTML = "-";
      quiz.style.borderRadius = "2rem 2rem 0rem 0rem";
      quiz.classList.add("active");
    }
  });
});



