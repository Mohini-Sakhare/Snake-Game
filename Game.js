let board = document.querySelector(".board");
let FoodX;
let FoodY;
let snakeBody=[]
let SnakeX=3;
let SnakeY=5;
let velocityX=0;
let velocityY=0;
let gameOver=false;
let setIntervalId;

function randomFoodPosition() {
  FoodX = Math.floor(Math.random() * 24) + 1;
  FoodY = Math.floor(Math.random() * 24) + 1;
}

function moveSnake(e){
  if(e.key==="ArrowUp" && velocityY!=1 ){
    velocityX=0;
    velocityY=-1;
  }else if(e.key==="ArrowDown" && velocityY!=-1 ){
    velocityX=0;
    velocityY=1;
  }else if(e.key==="ArrowLeft" && velocityX!=1 ){
    velocityX=-1;
    velocityY=0;
  }else if(e.key==="ArrowRight" && velocityX!=-1 ){
    velocityX=1;
    velocityY=0;
  }
  main();
}
 function showGameOver(){
  if(gameOver){
     clearInterval(setIntervalId)
   document.removeEventListener("keydown", moveSnake)
  }
  
 }

function main() {
  
 if(SnakeX===FoodX && SnakeY===FoodY){
    randomFoodPosition();
    snakeBody.push([FoodX,FoodY])
    console.log(snakeBody);
 }

 for(let i=snakeBody.length-1; i>0; i--){
  snakeBody[i]=snakeBody[i-1]
 }
let setHtml = `<div class="food" style="grid-area: ${FoodY}/${FoodX}; "></div>`;
  SnakeX+=velocityX;
  SnakeY+=velocityY;
  snakeBody[0]=[SnakeX,SnakeY]
  for(let i=0; i<snakeBody.length; i++){
     setHtml += `<div class="snake-head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
  }
 
  if(SnakeX<=0 || SnakeX>24 || SnakeY<=0 || SnakeY>24){
    gameOver=true;
  }

  board.innerHTML = setHtml;
}
randomFoodPosition();
setIntervalId = setInterval(main, 300)
main();

document.addEventListener("keydown", moveSnake)
