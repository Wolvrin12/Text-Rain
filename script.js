const cloud = document.querySelector(".cloud");

const randomText = () => {
  const text =
    "absdefghklmnopqrstuvwxyz0123456789&é'(-è_à)=+-*/?.§%µ¨£¨¤~~#{[|`^@}";
  const letter = text[Math.floor(Math.random() * text.length)];
  return letter;
};

const rain = () => {
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;
  e.classList.add("text");
  cloud.appendChild(e);
  e.innerText = randomText();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 1 + duration + "s";

  setTimeout(() => {
    cloud.removeChild(e);
  }, 2000);
};

setInterval(() => {
  rain();
}, 20);
