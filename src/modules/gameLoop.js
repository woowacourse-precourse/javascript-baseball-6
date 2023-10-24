const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, COUNT } = require('../constants');
const { computerRandomValue } = require('./computerRandomValue');
const { handlingInputExceptions } = require('./handlingInputExceptions');
const { gameEnd } = require('./gameEnd');

function gameLoop() {
    const computerValue = computerRandomValue(); 
    getUserValue(computerValue);
}

function getUserValue(computerValue) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_NUM, (userValue) => {
        handlingInputExceptions(userValue);
        checkValues(userValue, computerValue);
    });
}

function checkValues(userValue, computerValue) {
    const counts = countValues(userValue, computerValue);
    printValues(counts);
    whetherResultRightNot(userValue, computerValue);
}

function countValues(userValue, computerValue) { 
    let ball = 0;
    let strike = 0;
    
    for (let i = 0; i < 3; i++) {
      if (userValue[i] === computerValue[i]) strike++;
      else if (computerValue.indexOf(userValue[i]) !== i) ball++;
    }

return {ball, strike};
}

function printValues({ball, strike}) {
    let result = '';

    if (ball > 0 && strike > 0) result = `${ball}${COUNT.BALL} ${strike}${COUNT.STRIKE}`;
    else if (ball > 0 && strike == 0) result = `${ball}${COUNT.BALL}`;
    else if (ball == 0 && strike > 0) result = `${strike}${COUNT.STRIKE}`;
    else result = `${COUNT.NOTHING}`;

    Console.print(result);
}

function whetherResultRightNot(userValue, computerValue) {
    if (userValue === computerValue) {
        return gameEnd();
    }
    getUserValue();
}

module.exports.gameLoop = gameLoop;