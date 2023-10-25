import {END_GAME_MESSAGE, GAME_END, GAME_RESTART, RESTART_GAME_MESSAGE} from "./Define.js";
import {createRandomNumber} from "./Computer.js";
import {getPlayerInput} from "./Player.js";
import {returnResult} from "./GameRefree.js";
import {Console} from "@woowacourse/mission-utils";
import {printErrorMessage} from "./Error.js";

export const playGame = async () => {
    let shouldContinue = true;
    do {
        const randomNumber = createRandomNumber();
        do {
            const playerNumber = (await getPlayerInput()).split('').map(Number);
            shouldContinue = await checkEndGame(playerNumber, randomNumber);
        }
        while (shouldContinue === "IN_PROGRESS");
    }
    while (shouldContinue);
}

export const checkEndGame = async (playerNumber, randomNumber) => {
    const result = await returnResult(playerNumber, randomNumber);
    if (result === "3스트라이크") {
        Console.print(END_GAME_MESSAGE);
        return await questionGameRestart();
    } else {
        return "IN_PROGRESS";
    }
}

export const questionGameRestart = async () => {
    const input = await Console.readLineAsync(RESTART_GAME_MESSAGE);
    const inputInt = parseInt(input, 10);
    if (inputInt === GAME_RESTART) {
        return true;
    } else if (inputInt === GAME_END) {
        return false;
    } else {
        printErrorMessage();
    }
}
