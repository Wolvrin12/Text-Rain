const cloud = document.querySelector(".cloud");

const randomText = () => {
  const text =
    "absdefghklmnopqrstuvwxyz0123456789&é'(-è_à)=+-*/?.§%µ¨£¨¤~~#{[|`^@}";
  return text[Math.floor(Math.random() * text.length)];
};

const rain = () => {
  let e = document.createElement("div");
  e.classList.add("letter");
  cloud.appendChild(e);
  e.innerText = randomText();
  e.style.left = Math.floor(Math.random() * 310) + "px";
  e.style.fontSize = 0.5 + Math.random() * 1.5 + "em";
  e.style.animationDuration = 1 + Math.random() * 1 + "s";

  setTimeout(() => {
    cloud.removeChild(e);
  }, 2000);
};

setInterval(() => {
  rain();
}, 20);
