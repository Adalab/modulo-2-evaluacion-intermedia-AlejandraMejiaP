"use strict";

/* Constante y variables */

const playButton = document.querySelector(".play__button");
const option = document.querySelector(".select__move");
let messageText = document.querySelector(".message__text");
let countPlayer = document.querySelector(".player__count");
let countPc = document.querySelector(".pc__count");
let counterPlayer = "";
let counterPc = "";

/* Función que genera un número aleatorio  para definir la jugada del pc*/
let pcMove = "";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function generatePcMove() {
  pcMove = getRandomNumber(8);
  if (pcMove >= 0 && pcMove < 3) {
    pcMove = "Piedra";
  } else if (pcMove >= 3 && pcMove < 6) {
    pcMove = "Papel";
  } else if (pcMove >= 6 && pcMove <= 8) {
    pcMove = "Tijera";
  }
  console.log(`El pc ha usado ${pcMove}`);
}

/* Función que compara la jugada del pc con la de la usuaria*/

function fightMoves() {
  let userMove = option.value;
  if (userMove === pcMove) {
    messageText.innerHTML = `Empate`;
  } else if (userMove === "Piedra" && pcMove === "Papel") {
    messageText.innerHTML = `Has perdido`;
  } else if (userMove === "Piedra" && pcMove === "Tijera") {
    messageText.innerHTML = `Has ganado`;
  } else if (userMove === "Papel" && pcMove === "Tijera") {
    messageText.innerHTML = `Has perdido`;
  } else if (userMove === "Papel" && pcMove === "Piedra") {
    messageText.innerHTML = `Has ganado`;
  } else if (userMove === "Tijera" && pcMove === "Piedra") {
    messageText.innerHTML = `Has perdido`;
  } else if (userMove === "Tijera" && pcMove === "Papel") {
    messageText.innerHTML = `Has ganado`;
  }
}

/* Función del contador de la jugadora*/
function countTries() {  
  if (messageText.innerHTML === `Has ganado`) {
    counterPlayer ++;
    countPlayer.innerHTML = `Jugador: ${counterPlayer} `;
  } else if (messageText.innerHTML === `Has perdido`) {
    counterPc ++;
    countPc.innerHTML = `Computadora: ${counterPc} `;
  }
}
/* Función de reseteo a los 10 intentos */
let clickNumber = "";
function countingClicks(event) {
  if (event.currentTarget) {
    clickNumber++;
   
  }
}
function reset() {
  if (clickNumber > 10) {
    location.reload();
  }
}

/* Eventos */
playButton.addEventListener("click", getRandomNumber);
playButton.addEventListener("click", generatePcMove);
playButton.addEventListener("click", fightMoves);
playButton.addEventListener("click", countTries);
playButton.addEventListener("click", countingClicks);
playButton.addEventListener("click", reset);