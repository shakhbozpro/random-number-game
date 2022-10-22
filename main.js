const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elBtn = document.querySelector(".js-btn");
const attempts = document.querySelector(".js-attampts");
const answer = document.querySelector(".js-answer");
const finishAnswer = document.querySelector(".js-random-number");

const randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

let maxAttemptsCount = 6;
attempts.textContent = `Attempts count: ${maxAttemptsCount}`;

elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();

   const elInputValue = Number(elInput.value.trim());

   maxAttemptsCount--;
   attempts.textContent = `Attempts count: ${maxAttemptsCount}`;

   if (elInputValue < randomNum) {
      answer.textContent = "Kiritilgan raqam random sonidan kichik";
      answer.classList.add("alert-warning");
      answer.classList.remove("alert-danger");
   } else if (elInputValue > randomNum) {
      answer.textContent = "Kiritilgan raqam random sonidan katta";
      answer.classList.remove("alert-warning");
      answer.classList.add("alert-danger");
   } else {
      answer.textContent = "Random sondi topdingiz";
      answer.classList.remove("alert-warning");
      answer.classList.remove("alert-danger");
      answer.classList.add("alert-success");
   }

   if (maxAttemptsCount === 0) {
      elInput.disabled = true;
      elBtn.setAttribute("disabled", true);
      attempts.textContent = "Urunishlar soni: 0";
      answer.textContent = "Game over !"
      answer.classList.add("alert-dark");
      answer.classList.add("fw-bold");
      answer.classList.add("text-uppercase");
      finishAnswer.classList.add("alert-primary")
      finishAnswer.textContent = `Random number was -> ${randomNum}`;
   }

   elForm.reset();
})