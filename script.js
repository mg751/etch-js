// starting grid size
let gridSize = 16;

function randColor (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return color = `rgb(${r}+${g}+${b})`;
}

function checkColor(element) {
    if (element.style.backgroundColor){
        return true;
    }
}

let counter = 0;

function increaseCount () {
    if (counter < 9) {
        console.log(counter);
        return counter++;
    } else {
        console.log(counter);
        return counter = 0;
    }
}

//change color of a single div
function addBG(){
    let element = this;
    if (checkColor(element)){
        return;   
    } else {
        element.style.backgroundColor = randColor();
        let brightLevel = 100-counter*10;
        console.log(brightLevel);
        element.style.webkitFilter = `brightness(${brightLevel}%)`;
        increaseCount();
        return;
}
}

// define main container
let gameContainer = document.getElementById("gameContainer");


function makeGame(){
    for (let i = 0; i < (gridSize*gridSize); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = (500/gridSize-2)+"px";
    gridDiv.style.height = (500/gridSize-2)+"px";
    gameContainer.appendChild(gridDiv);
    gridDiv.classList.add(`box${i}`);
    gridDiv.addEventListener('mouseover', addBG);
    let containerDivs = gameContainer.children;
    let divArray = Array.from(containerDivs);
    }
}

// add function to button
let resetBtn = document.querySelector("#resetbtn");
resetBtn.onclick = function (){
    let userGrid = prompt("What size grid?",100);
    if (userGrid <= 100 && userGrid > 0){
        gridSize = userGrid;
        let lastChild = gameContainer.lastChild;
        while (lastChild){
            gameContainer.removeChild(lastChild);
            lastChild = gameContainer.lastElementChild;
        }
        makeGame();
    } else {
        alert("Must be less than 100!");
    }
    
}

// start
makeGame();





