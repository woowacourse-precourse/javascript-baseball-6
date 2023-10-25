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