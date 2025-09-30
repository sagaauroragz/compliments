const card = document.getElementById("card");
const text = document.getElementById("text");

const compliments = [
  "you're awesome",
  "you make things brighter",
  "you're doing great",
  "you're a badass bitch",
  "you are enough"
];

let index = 0; // start at the first compliment

card.addEventListener("click", () => {
  text.textContent = compliments[index]; // show current compliment
  index++; // move to the next one

  if (index >= compliments.length) {
    index = 0; // reset to start when we reach the end
  }
});
