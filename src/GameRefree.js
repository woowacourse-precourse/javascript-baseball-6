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
    const ballMessage = ball > 0 ? `${ball}볼 ` : '';
    const strikeMessage = strike > 0 ? `${strike}스트라이크` : '';

    const result = `${ballMessage}${strikeMessage}`.trim();

    if (!result) {
        return "낫싱";
    }

    return result;
};

export const returnResult = async (player, computer) => {
    const checkedResult = checkPlayerInput(player, computer);
    const returnMessage = returnResultMessage(checkedResult);
    Console.print(returnMessage);
    return returnMessage;
};
