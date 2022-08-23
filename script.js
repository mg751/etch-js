// starting grid size
let gridSize = ((16*16)+1);

//change color of a div, function add class
function addBG(){
   this.classList.add('activeColor');
}

//function removeBG(){
//    this.classList.remove('activeColor');
// }
 

// define main container
let container = document.getElementById("container");

// create 16x16 divs with classes
for (let i = 1; i < gridSize; i++) {
    let gridDiv = document.createElement("div");
    container.appendChild(gridDiv);
    gridDiv.classList.add(`box${i}`, 'etchbox');
    gridDiv.addEventListener('mouseover', addBG);
    //gridDiv.addEventListener('mouseout', removeBG);
}

// create array from 16x16 divs
let containerDivs = container.children;
let divArray = Array.from(containerDivs);

// add function to button
let resetBtn = document.querySelector("#resetbtn");
resetBtn.onclick = function (){
    let userGrid = prompt("What size grid?",100);
    if (userGrid <= 100 && userGrid > 0){
        return gridSize = userGrid;
    } else {
        alert("Must be less than 100!");
    }
    
}










