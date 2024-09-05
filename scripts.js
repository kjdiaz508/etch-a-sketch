
let drawingEnabled = true;
let size = 16;
const colorPicker = document.querySelector("#color-picker");

function generateGrid(gridSize){
    const container = document.querySelector(".container");
    container.textContent = '';
    const gridDimensions = container.clientWidth;

    let squareDimensions = gridDimensions / gridSize;

    for (let i=0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0; j < gridSize; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.cssText = `width: ${squareDimensions}px; height: ${squareDimensions}px;`;
            row.appendChild(square);
        }
        container.appendChild(row);
        row.addEventListener("mouseover", colorSquare);
    }
}

function colorSquare(e) {
    /* just because I am adding the listener to the row and not the squares */
    if (e.target.getAttribute("class") != "square" || !drawingEnabled){
        return;
    }
    e.target.style.backgroundColor = colorPicker.value;
}

const sizeBtn = document.querySelector("#size-button");
sizeBtn.addEventListener("click", function (e) {
    const newSize = parseInt(prompt("Select a new size for the grid.\nMax: 64"));
    if (Number.isNaN(newSize)) {
        alert("Enter a number please!");
    } else if (newSize > 64){
        alert("Too big! max size is 64.");
    } else {
        size = newSize
        generateGrid(size);
    }
});

const drawBtn = document.querySelector("#draw-button");
drawBtn.addEventListener("click", function (e) {
    drawingEnabled = !drawingEnabled;
});

window.addEventListener("resize", function(e) {
    generateGrid();
});

/* default starting grid */
generateGrid(size);


