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
let gameOverSound = new Audio("GameOver.mp3");
let eatSound = new Audio("Eat.mp3");
let turnSound = new Audio("Turn.mp3");

function randomFoodPosition() {
  FoodX = Math.floor(Math.random() * 24) + 1;
  FoodY = Math.floor(Math.random() * 24) + 1;
}

function moveSnake(e){
  if(e.key==="ArrowUp" && velocityY!=1 ){
    velocityX=0;
    velocityY=-1;
    turnSound.play();
  }else if(e.key==="ArrowDown" && velocityY!=-1 ){
    velocityX=0;
    velocityY=1;
    turnSound.play();
  }else if(e.key==="ArrowLeft" && velocityX!=1 ){
    velocityX=-1;
    velocityY=0;
    turnSound.play();
  }else if(e.key==="ArrowRight" && velocityX!=-1 ){
    velocityX=1;
    velocityY=0;
    turnSound.play();
  }
  main();
}

function showGameOver(){
    clearInterval(setIntervalId);
    gameOverSound.play();
    document.removeEventListener("keydown", moveSnake);
}

function main() {
  if(gameOver){
    return showGameOver()
}
  
 if(SnakeX===FoodX && SnakeY===FoodY){
    randomFoodPosition();
    eatSound.play();
    snakeBody.push([FoodX,FoodY])
    console.log(snakeBody);
 }

 for(let i=snakeBody.length-1; i>0; i--){
   snakeBody[i]=snakeBody[i-1]
 }

let setHtml = `<div class="food" style="grid-area: ${FoodY}/${FoodX}; "></div>`;
  snakeBody[0]=[SnakeX,SnakeY]
  SnakeX+=velocityX;
  SnakeY+=velocityY;
  
  for(let i=0; i<snakeBody.length; i++){
     setHtml += `<div class="snake-head" id="div${i}" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;

     if(i!=0 && snakeBody[0][1]===snakeBody[i][1] &&  snakeBody[0][0]===snakeBody[i][0]){
        gameOver=true;
     } 
  }
 
  if(SnakeX<=0 || SnakeX>24 || SnakeY<=0 || SnakeY>24){
    gameOver=true;
  }

  board.innerHTML = setHtml;
}
randomFoodPosition();
main();
setIntervalId = setInterval(main, 300)
document.addEventListener("keydown", moveSnake)

function reset(){
  location.reload()
}