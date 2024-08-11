const main = document.querySelector("main");

for(i = 0; i < 1500; i++){
  const squares = document.createElement("div");
  squares.classList.add("square")
  main.appendChild(squares);

 
  const colorPicker = document.querySelector("#input-color-picker");
  colorPicker.addEventListener("input", () => {
    console.log(colorPicker.value)
    const colorValue = colorPicker.value
  
    squares.addEventListener("mouseover", e => {
      e.preventDefault();
      if (e.buttons === 1) {
        squares.style.backgroundColor = `${colorValue}`;
      }
    });
    
  })

  //default mouse color if not select any color button
  const defaultMouseColor = () => {
    squares.addEventListener("mouseover", e => {
      e.preventDefault();
      if (e.buttons === 1) {
        squares.style.backgroundColor = "black";
      }
    });
  }

  //if button prism selected it assign the random color into the cursor
  const prism = () => {
    const prism = document.querySelector(".btn-prism");

    prism.addEventListener("click", () => {
      squares.addEventListener("mouseover", e => {
        e.preventDefault();
        if (e.buttons === 1) {
          squares.style.backgroundColor = `${getRandomRgb()}`;
        }
      });
    })
  }

  //if pen button is selected it assign a black color into the cursor
  const pen = () => {
    const pen = document.querySelector(".btn-pen");

    pen.addEventListener("click", () =>{
      squares.addEventListener("mouseover", e => {
        e.preventDefault();
        if (e.buttons === 1) {
          squares.style.backgroundColor = "black";
        }
      });
    })
  }
  
  //if eraser button is selected it will assign a white color into the cursor
  const eraser = () => {
    const eraser = document.querySelector(".btn-eraser");

    eraser.addEventListener("click", () => {
      squares.addEventListener("mouseover", e => {
        e.preventDefault();
        if (e.buttons === 1) {
          squares.style.backgroundColor = "white";
        }
      });
    })
  }

  //call all the buttons function as well as the default function
  defaultMouseColor();
  prism();
  pen();
  eraser();
}

function getRandomRgb(){
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return `rgb(${r},${g},${b})`;
}






