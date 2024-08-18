
  const main = document.querySelector("main");
  const slider = document.querySelector(".input-slider");

  const sliderDOM = () => {
    
      const sliderValue = parseInt(slider.value);
      const mainWidth = main.clientWidth;
      console.log(sliderValue);
  
      main.innerHTML = "";
  
      const squareSize = Math.floor(mainWidth / sliderValue);
  
      main.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      `
  
      for(i = 0; i < sliderValue * sliderValue ; i++){
        const squares = document.createElement("div");
        squares.classList.add("square");
  
        squares.style.cssText = `
        flex-basis: ${squareSize}px;
        height: ${squareSize}px;
        background-color: white;
        margin: 0;
        `
  
        main.appendChild(squares);
      

        const colorPicker = document.querySelector("#input-color-picker");
        colorPicker.addEventListener("input", () => {

          squares.addEventListener("mousedown", e => {
            e.preventDefault();
            if (e.buttons === 1) {
              squares.style.backgroundColor = `${colorValue}`;
            }
          })

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

         squares.addEventListener("mousedown", e => {
            e.preventDefault();
            if (e.buttons === 1) {
              squares.style.backgroundColor = "black";
            }
          });

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
            
            squares.addEventListener("mousedown", e => {
              e.preventDefault();
              if (e.buttons === 1) {
                squares.style.backgroundColor = `${getRandomRgb()}`;
              }
            });

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

            squares.addEventListener("mousedown", e => {
              e.preventDefault();
              if (e.buttons === 1) {
                squares.style.backgroundColor = "black";
              }
            });

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
      
          squares.addEventListener("mousedown", e => {
            e.preventDefault();
            if (e.buttons === 1) {
              squares.style.backgroundColor = "white";
            }
          });

          eraser.addEventListener("click", () => {
            squaresMousedown();
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
  }
  
function getRandomRgb(){
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return `rgb(${r},${g},${b})`;
}

slider.addEventListener("change", sliderDOM);
window.addEventListener("load", sliderDOM);

const guideBtn = document.querySelector(".guide-btn");
const dialog = document.querySelector("dialog");

guideBtn.addEventListener("click", () => {
  console.log("guide button is clicked")
  dialog.showModal()
});

dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})








