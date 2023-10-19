import { ERROR_MESSAGES, GAME_CONSTANTS, USER_COMMANDS } from "./constants.js";

function isValidIntegers(input) {
  const arr = input.split("");
  arr.forEach((item) => {
    if (parseFloat(item) !== parseInt(item)) {
      return false;
    }
    if (parseInt(item) < GAME_CONSTANTS.MIN_NUMBER) {
      return false;
    }
  });
  return true;
}

function hasDuplicateNumber(input) {
  const arr = input.split("");
  return arr.length !== new Set(arr).size;
}

function isValidCommand(input) {
  return input === USER_COMMANDS.RESTART || input === USER_COMMANDS.QUIT;
}
