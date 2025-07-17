let board = document.querySelector(".board");
let FoodX;
let FoodY;
let SnakeX=3;
let SnakeY=5;
let velocityX=0;
let velocityY=0;

function randomFoodPosition() {
  FoodX = Math.floor(Math.random() * 24) + 1;
  FoodY = Math.floor(Math.random() * 24) + 1;
}

function moveSnake(e){
  if(e.key==="ArrowUp"){
    velocityX=0;
    velocityY=-1;
  }else if(e.key==="ArrowDown"){
    velocityX=0;
    velocityY=1;
  }else if(e.key==="ArrowLeft"){
    velocityX=-1;
    velocityY=0;
  }else if(e.key==="ArrowRight"){
    velocityX=1;
    velocityY=0;
  }
  main();
}

function main() {
 if(SnakeX===FoodX && SnakeY===FoodY){
    randomFoodPosition();
 }

  SnakeX+=velocityX;
  SnakeY+=velocityY;
  let setHtml = `<div class="food" style="grid-area: ${FoodY}/${FoodX}; "></div>`;
  setHtml += `<div class="snake-head" style="grid-area: ${SnakeY}/${SnakeX};"></div>`;
  board.innerHTML = setHtml;
}
randomFoodPosition();
main();

document.addEventListener("keydown", moveSnake)
