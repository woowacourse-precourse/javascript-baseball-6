import {Console} from "@woowacourse/mission-utils";

export const VALIDATE_PLAYER_INPUT = (INPUT) =>{
    if (!INPUT) return false;
    const NUMBERS = new Set(INPUT);
    return (
        INPUT.length === 3 &&
        NUMBERS.size === 3 &&
        [...NUMBERS].every((num) => num >= 1 && num <= 9)
    );
};

export const CHECK_PLAYER_INPUT = (PLAYER, COMPUTER) => {
    let strike = 0;
    let ball = 0;

    PLAYER.forEach((eachPlayer, index) => {
        if (eachPlayer == COMPUTER[index]) {
            strike += 1;
        } else if (COMPUTER.includes(eachPlayer)) {
            ball += 1;
        }
    });
    return {strike,ball};
};

export const RETURN_RESULT_MESSAGE = ({strike, ball}) => {
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

export const RETURN_RESULT= async (PLAYER, COMPUTER) => {
    const CHECKED_RESULT = CHECK_PLAYER_INPUT(PLAYER, COMPUTER);
    const RETURN_MESSAGE=RETURN_RESULT_MESSAGE(CHECKED_RESULT);
    Console.print(RETURN_MESSAGE);
};