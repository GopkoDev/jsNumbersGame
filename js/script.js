"use strict";

function numbersGame() {
    let setNum = 48;
    let n = 3;

    function gameLogic() {
        let userNum = prompt("Угадай число от 1 до 100");
        if (n === 1 && setNum != userNum) {
            let answ = confirm("Попытки закончились, хотите сыграть еще?");
            if (answ) {
                n = 3;
                gameLogic();
            } else {
                return null;
            }
        } else if (userNum === null) {
            alert("Игра окончена");
        } else if (isNaN(userNum)) {
            alert("Введи число!");
            gameLogic();
        } else if (userNum == setNum) {
            let answ2 = confirm(
                "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
            );
            if (answ2) {
                n = 3;
                gameLogic();
            } else {
                return null;
            }
        } else if (setNum < userNum) {
            n--;
            alert("Загаданное число больше, осталось попыток " + n);
            gameLogic();
        } else if (setNum > userNum) {
            n--;
            alert("Загаданное число меньше, осталось попыток " + n);
            gameLogic();
        }
    }
    return gameLogic;
}

const startGame = numbersGame();
startGame();