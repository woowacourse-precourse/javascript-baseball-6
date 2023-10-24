import { WRONG_INPUT_MESSAGE } from "./constants/messages.js";
import {
  NUMBER_ONE,
  NUMBER_TWO,
  NUMBER_THREE,
  NUMBER_ZERO,
  STRING_ZERO,
} from "./constants/numbers.js";

const validation = (playerInputString) => {
  const playerInputArray = playerInputString.split("");

  if (playerInputArray.length !== NUMBER_THREE) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }

  if (
    playerInputArray.filter((value) => Number.isNaN(value)).length !==
    NUMBER_ZERO
  ) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }

  if (
    playerInputArray[NUMBER_ZERO] === playerInputArray[NUMBER_ONE] ||
    playerInputArray[NUMBER_ONE] === playerInputArray[NUMBER_TWO] ||
    playerInputArray[NUMBER_ZERO] === playerInputArray[NUMBER_TWO]
  ) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }

  if (playerInputArray.includes(STRING_ZERO)) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }

  return playerInputArray.map((value) => Number(value));
};

export { validation };
