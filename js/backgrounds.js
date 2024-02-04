const images = [
  { image: "0.jpg", location: "Vancouver BC, Canada" },
  { image: "1.jpg", location: "Rome, Italy" },
  { image: "2.jpg", location: "Rome, Italy" },
  { image: "4.jpg", location: "Wengen, Switzerland" },
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgSpan = document.createElement("span");

bgImage.src = `img/${chosenImage.image}`;
bgImage.className = "memory";

bgSpan.innerText = `${chosenImage.location}`;

const right = document.querySelector(".right");

right.appendChild(bgImage);
right.appendChild(bgSpan);
