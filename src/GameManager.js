import { END_GAME_MESSAGE, ERROR_MESSAGE, RESTART_GAME_MESSAGE } from "./Define.js";
import { createRandomNumber } from "./Computer.js";
import { getPlayerInput } from "./Player.js";
import { returnResult } from "./GameRefree.js";
import { Console } from "@woowacourse/mission-utils";

export const printErrorMessage = () => {
    throw new Error(ERROR_MESSAGE);
};
export const playGame = async () => {
    let shouldContinue = true;
    do {
        const randomNumber = createRandomNumber();
        do {
            const playerNumber = (await getPlayerInput()).split('').map(Number);
            shouldContinue = await checkEndGame(playerNumber, randomNumber);
        }
        while (shouldContinue === 1);
    }
    while (shouldContinue);
}

export const checkEndGame = async (playerNumber, randomNumber) => {
    const result = await returnResult(playerNumber, randomNumber);
    if (result === "3스트라이크") {
        Console.print(END_GAME_MESSAGE);
        return await questionGameRestart();
    } else {
        return 1;
    }
}

export const questionGameRestart = async () => {
    const input = await Console.readLineAsync(RESTART_GAME_MESSAGE);
    const inputInt = parseInt(input, 10);
    if (inputInt === 1) {
        return true;
    } else if (inputInt === 2) {
        return false;
    } else {
        printErrorMessage();
    }
}
