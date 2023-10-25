import { Console } from "@woowacourse/mission-utils";
import {INPUT_SIZE, NUMBER_MAX, NUMBER_MIN} from "./Define.js";

export const validatePlayerInput = (input) => {
    if (!input) return false;
    const numbers = new Set(input);
    return (
        input.length === INPUT_SIZE &&
        numbers.size === INPUT_SIZE &&
        [...numbers].every((num) => num >= NUMBER_MIN && num <= NUMBER_MAX)
    );
};

export const checkPlayerInput = (player, computer) => {
    let strike = 0;
    let ball = 0;

    player.forEach((eachPlayer, index) => {
        if (eachPlayer == computer[index]) {
            strike += 1;
        } else if (computer.includes(eachPlayer)) {
            ball += 1;
        }
    });
    return { strike, ball };
};

export const returnResultMessage = ({ strike, ball }) => {
    if (strike === 0 && ball === 0) {
        return "낫싱";
    }
    if (strike === 3) {
        return "3스트라이크";
    }
    let result = '';
    if (ball > 0) {
        result += `${ball}볼 `;
    }
    if (strike > 0) {
        result += `${strike}스트라이크`;
    }
    return result.trim();
};

export const returnResult = async (player, computer) => {
    const checkedResult = checkPlayerInput(player, computer);
    const returnMessage = returnResultMessage(checkedResult);
    Console.print(returnMessage);
    return returnMessage;
};
