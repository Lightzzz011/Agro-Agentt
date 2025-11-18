const quotes = [
  "Agriculture is the backbone of our nation.",
  "Every seed sown is a hope for tomorrow.",
  "Farmers are the true heroes of the land.",
  "Grow green, live clean.",
  "A nation that destroys its soil destroys itself."
];

let index = 0;
const quoteEl = document.getElementById("quote");
if (quoteEl) quoteEl.textContent = quotes[0];
//quite was not correct 18-11-2025
//API key obtained
setInterval(() => {
  if (quoteEl) {
    quoteEl.style.opacity = 0;
    setTimeout(() => {
      quoteEl.textContent = quotes[index];
      quoteEl.style.opacity = 1;
      index = (index + 1) % quotes.length;
    }, 600);
  }
}, 4000);
