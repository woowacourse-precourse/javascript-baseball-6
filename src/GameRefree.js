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

