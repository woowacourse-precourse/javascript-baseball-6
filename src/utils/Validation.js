import { MESSAGE_ERROR } from "../constants/Message.js";
import { GAME_END, GAME_NUMBER } from "../constants/ConfigGame.js";

export function isValidInput(value) {
  const regExpPattern = `^[1-9]{${GAME_NUMBER.three}}$`;
  const regExp = new RegExp(regExpPattern);
  const valueSet = new Set(value.split(""));

  if (!regExp.test(value)) {
    throw new Error(MESSAGE_ERROR.errorLengthNumber);
  }

  if (valueSet.size !== GAME_NUMBER.three) {
    throw new Error(MESSAGE_ERROR.errorDuplicate);
  }
}

export function isValidRestart(value) {
  if (value !== GAME_END.restart && value !== GAME_END.end) {
    throw new Error(MESSAGE_ERROR.errorRestart);
  }
}
