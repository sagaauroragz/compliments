const card = document.getElementById("card");
const text = document.getElementById("text");

const compliments = [
  "you’re awesome",
  "you make things brighter",
  "you’re doing great",
  "you're a badass bitch",
  "you are enough"
];

card.addEventListener("click", () => {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  text.textContent = random;
});
