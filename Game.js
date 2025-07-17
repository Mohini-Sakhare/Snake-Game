let board = document.querySelector(".board");
let FoodX;
let FoodY;
let SnakeX;
let SnakeY;

function randomFoodPosition() {
  FoodX = Math.floor(Math.random() * 24) + 1;
  FoodY = Math.floor(Math.random() * 24) + 1;
  SnakeX = Math.floor(Math.random() * 24) + 1;
  SnakeY = Math.floor(Math.random() * 24) + 1;
}

function main() {
  randomFoodPosition();
  let setHtml = `<div class="food" style="grid-area: ${FoodY}/${FoodX}; "></div>`;
  setHtml += `<div class="snake-head" style="grid-area: ${SnakeY}/${SnakeX};"></div>`;
  board.innerHTML = setHtml;
}
main();
