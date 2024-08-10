const main = document.querySelector("main");

for(i = 0; i < 1500; i++){
  const squares = document.createElement("div");
  squares.classList.add("square")
  main.appendChild(squares);

  squares.addEventListener("mouseover", e => {
    if (e.buttons === 1) {
      squares.style.backgroundColor = `${getRandomRgb()}`;
    }
  });
}

function getRandomRgb(){
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return `rgb(${r},${g},${b})`;
}

console.log(getRandomRgb())


