const artboard = document.getElementById("artboard");
const countBtn = document.getElementById("count");
const sizeBtn = document.querySelector("#artbrd-size");
const body = document.getElementById("id-body");
const gridSize = document.getElementById("grid-size");
const boxes = document.querySelector("#box");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

body.addEventListener("load", gridLayout());

sizeBtn.addEventListener("input", () => {
  newGrid();
});

function gridLayout() {
  let grid = sizeBtn.value * sizeBtn.value;
  artboard.style.gridTemplateColumns = "repeat(" + sizeBtn.value + ", 1fr)";
  artboard.style.gridTemplateRows = "repeat(" + sizeBtn.value + ", 1fr)";

  gridSize.textContent = sizeBtn.value + " X " + sizeBtn.value;

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
  gridLayout();
}

artboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "#000";
    e.target.style.borderColor = "#000";
  }
});

artboard.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "red";
    e.target.style.borderColor = "#000";
  }
});
