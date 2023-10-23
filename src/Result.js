import { Console } from "@woowacourse/mission-utils";

function result(userInput, randomNumber){
    const result = { strike: 0, ball: 0 };

    userInput.forEach((num, idx) => {
        if (randomNumber[idx] === num) result.strike += 1;
        if (randomNumber[idx] !== num && randomNumber.includes(num)) result.ball += 1;
    });
    return result;
}

function resultPrint(gameResults){
    const { strike, ball } = gameResults;
    let message = '';

    if (ball === 0 && strike === 0) {
        message = '낫싱';
    } else if (ball > 0 && strike > 0) {
        message = `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
        message = `${ball}볼`;
    } else {
        message = `${strike}스트라이크`;
    }

    Console.print(message);
}

export {result, resultPrint}