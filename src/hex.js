const btn = document.getElementById("btn");

const color = document.querySelector(".color");

const generateHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateHex);
