import {
  DIGIT_MIN,
  DIGIT_MAX,
} from "./Define";

export const IS_VALID_INPUT = (INPUT) => {
    if (!INPUT) return false;
    const NUMBER_SET = new Set(INPUT);
  
    return (
      INPUT.length === 3 &&
      NUMBER_SET.size === 3 &&
      [...NUMBER_SET].every((num) => num >= DIGIT_MIN && num <= DIGIT_MAX)
    );
};

export const COMPARE_NUMBER = (PLAYER, COMPUTER) => {
  let strikes = 0;
  let balls = 0;

  PLAYER.forEach((digitOfPlayer, idx) => {
    if (digitOfPlayer === COMPUTER[idx]) {
      strikes += 1;
    } else if (COMPUTER.includes(digitOfPlayer)) {
      balls += 1;
    }
  });

  return { strikes, balls };
};