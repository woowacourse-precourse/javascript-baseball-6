import {END_GAME_MESSAGE, ERROR_MESSAGE, RESTART_GAME_MESSAGE} from "./Define.js";
import {CREATE_RANDOM_NUMBER} from "./Computer.js";
import {PLAYER_INPUT} from "./Player.js";
import {RETURN_RESULT} from "./GameRefree.js";
import {Console} from "@woowacourse/mission-utils";

export const PRINT_ERROR_MESSAGE = () => {
    throw new Error(ERROR_MESSAGE);
};
export const  PLAY_GAME = async () =>{
    const RANDOM_NUMBER = CREATE_RANDOM_NUMBER();
    console.log("컴퓨터"+RANDOM_NUMBER);
    const PLAYER_NUMBER = (await PLAYER_INPUT()).split('').map(Number);
    await RETURN_RESULT(PLAYER_NUMBER,RANDOM_NUMBER);
}

export const CHECK_END_GAME = async (PLAYER_NUMBER, RANDOM_NUMBER) => {
    const RESULT = await RETURN_RESULT(PLAYER_NUMBER, RANDOM_NUMBER);
    if (RESULT === "3스트라이크") {
        Console.print(END_GAME_MESSAGE);
        return await QUESTION_GAME_RESTART();
    } else {
        return 1;
    }
}

export const QUESTION_GAME_RESTART = async () => {
    const INPUT = await Console.readLineAsync(RESTART_GAME_MESSAGE);
    const INPUT_INT = parseInt(INPUT, 10);
    if (INPUT_INT === 1) {
        return true;
    } else if (INPUT_INT === 2) {
        return false;
    } else {
        PRINT_ERROR_MESSAGE();
    }
}
