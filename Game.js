let board = document.querySelector(".board");
let FoodX;
let FoodY;


function randomFoodPosition(){
    FoodX=Math.floor(Math.random()*24)+1;
    FoodY=Math.floor(Math.random()*24)+1;
   
}

function main(){
    randomFoodPosition()
  let setHtml = `<div class="food" style="grid-area: ${FoodY}/${FoodX}; "></div>`
   board.innerHTML=setHtml;
}
main();