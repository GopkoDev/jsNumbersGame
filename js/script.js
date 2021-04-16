"use strict";


function numbersGame() {
    let setNum = 48;
    
  function gameLogic() {
    let userNum = prompt("Угадай число от 1 до 100");
    if (userNum === null) {
        alert("Игра окончена");
    }else if (isNaN(userNum)) {
      alert("Введи число!");
      gameLogic();
    } else if (userNum == setNum) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (setNum < userNum) {
      alert("Загаданное число больше");
      gameLogic();
    } else if (setNum > userNum) {
      alert("Загаданное число меньше");
      gameLogic();
    }
  }
  return gameLogic;
}

const startGame = numbersGame();
startGame(); 




