// starting grid size
let gridSize = 16;


//change color of a single div
function addBG(){
   this.classList.add('activeColor');
}

// define main container
let gameContainer = document.getElementById("gameContainer");


function makeGame(){
    for (let i = 0; i < (gridSize*gridSize); i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = (832/gridSize-2)+"px";
    gridDiv.style.height = (832/gridSize-2)+"px";
    gameContainer.appendChild(gridDiv);
    gridDiv.classList.add(`box${i}`, `game`);
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








