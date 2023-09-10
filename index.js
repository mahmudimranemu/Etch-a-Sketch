const artboard = document.getElementById("artboard");
const gridToggleBtn = document.getElementById("grid-toggle");
const gridSizeRange = document.querySelector("#artbrd-size");
const body = document.getElementById("id-body");
const showGridSize = document.getElementById("grid-size");
const boxes = document.querySelectorAll("#box");
const colorPlate = document.getElementById("color-plate");
const clearBtn = document.getElementById("clear-artboard");

const defaultGrid = 16;

body.addEventListener("load", gridLayout(defaultGrid));

clearBtn.addEventListener("click", () => {
  newGrid();
});

//Update grid

gridSizeRange.addEventListener("input", () => {
  newGrid();
});

function gridLayout(currentGrid) {
  let grid = currentGrid * currentGrid;
  artboard.style.gridTemplateColumns = `repeat(${currentGrid}, 1fr)`;
  artboard.style.gridTemplateRows = `repeat(${currentGrid}, 1fr)`;

  showGridSize.textContent = currentGrid + " X " + currentGrid;

  for (let i = 0; i < grid; i++) {
    const box = document.createElement("div");
    box.id = "box";
    box.classList = "box";
    artboard.appendChild(box);
  }
}

function newGrid() {
  while (artboard.hasChildNodes()) {
    artboard.removeChild(artboard.firstChild);
  }
  gridLayout(gridSizeRange.value);
}

let mouseClicked = false;
mouseReleased = true;

artboard.addEventListener("click", onMouseClick, false);
artboard.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
  mouseClicked = !mouseClicked;
  artboard.style.cursor = "";
}

function onMouseMove(e) {
  if (mouseClicked) {
    artboard.style.cursor = "cell";
    //artboard.style.cursor = "url('img/draw.svg'), auto";
    drawColor(e);
  }
}
artboard.style.cursor = "cell";
function drawColor(e) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = colorPlate.value;
    e.target.style.borderColor = colorPlate.value;
  }
}

gridToggleBtn.addEventListener("click", () => {
  artboard.classList.toggle("no-grid");
});
