import { GAME_MESSAGE } from "./constants.js";

export function getResultMessage({ strike, ball }) {
  if (strike === 0 && ball === 0) {
    return GAME_MESSAGE.RESULT_NOTHING;
  }

  return `${getBallMessage(ball)}${getStrikeMessage(strike)}`;
}

function getBallMessage(ball) {
  return ball ? `${ball}볼 ` : "";
}

function getStrikeMessage(strike) {
  return strike ? `${strike}스트라이크 ` : "";
}

export function isInValidCommand(command) {
  const VALID_COMMAND_LENGTH = 3;
  const uniqueCommand = new Set([...command]);

  const isDuplicatedNumber = uniqueCommand.size !== VALID_COMMAND_LENGTH;
  const isWrongLength = command.length !== VALID_COMMAND_LENGTH;
  const isNotNumber = [...command].some((char) => isNaN(+char));

  return [isDuplicatedNumber, isWrongLength, isNotNumber].some(Boolean);
}
