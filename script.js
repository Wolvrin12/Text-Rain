const cloud = document.querySelector(".cloud");

const randomLetter = () => {
  const letters = "absdefghklmnopqrstuvwxyz0123456789&?§%µ£¤~#@";
  return letters[Math.floor(Math.random() * letters.length)];
};

const randomColor = () => {
  const colors = [
    "#614BC3",
    "#33BBC5",
    "#85E6C5",
    "#C8FFE0",
    "#071952",
    "#0B666A",
    "#35A29F",
    "#97FEED",
    "#164B60",
    "#1B6B93",
    "#4FC0D0",
    "#A2FF86",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const rain = () => {
  let letter = document.createElement("div");
  let letterColor = randomColor();
  letter.classList.add("letter");
  cloud.appendChild(letter);
  letter.innerText = randomLetter();
  letter.style.color = letterColor;
  letter.style.textShadow =
    "0 0 5px" +
    letterColor +
    ", 0 0 15px" +
    letterColor +
    ", 0 0 30px" +
    letterColor;
  letter.style.left = Math.floor(Math.random() * 310) + "px";
  letter.style.fontSize = 0.5 + Math.random() * 1.5 + "em";
  letter.style.animationDuration = 1 + Math.random() * 1 + "s";

  setTimeout(() => {
    cloud.removeChild(letter);
  }, 2000);
};

setInterval(() => {
  rain();
}, 20);
