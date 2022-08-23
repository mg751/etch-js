// define main container
let container = document.getElementById("container");

// create 16x16 divs with classes
for (let i = 1; i < ((16*16)+1); i++) {
    let gridDiv = document.createElement("div");
    container.appendChild(gridDiv);
    gridDiv.classList.add(`box${i}`);
}

// create array from 16 divs
let containerDivs = container.children;
let divArray = Array.from(containerDivs);

