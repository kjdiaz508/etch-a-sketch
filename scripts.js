
const sizeBtn = document.querySelector("#size-button");
sizeBtn.addEventListener("click", function (e) {
    const newSize = parseInt(prompt("Select a new size for the grid.\nMax: 100"));

    if (Number.isNaN(newSize)) {
        alert("Enter a number please!");
    } else if (newSize > 100){
        alert("Too big! max size is 100.");
    } else {
        const container = document.querySelector(".container");
        const oldGrid = document.querySelector(".grid");
        container.removeChild(oldGrid);
        generateGrid(newSize);
    }
    
});

function generateGrid(gridSize){
    const container = document.querySelector(".container");
    const gridDimensions = 600;
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");

    let squareDimensions = Math.floor(gridDimensions / gridSize);
    grid.style.width = `${squareDimensions * gridSize}px`;

    for (let i=0; i < gridSize*gridSize; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.cssText = `width: ${squareDimensions}px; height: ${squareDimensions}px;`
        grid.appendChild(square);
    }

    container.appendChild(grid);

    grid.addEventListener("mouseover", function (e) {
        if (e.target.getAttribute("class") == "square"){
            e.target.style.backgroundColor = "black";
        }
    });

}

generateGrid(16);


