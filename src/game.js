import { MissionUtils } from "@woowacourse/mission-utils";
import {
  NUMBER_THREE,
  NUMBER_ZERO,
  STRING_ONE,
  STRING_TWO,
} from "./constants/numbers.js";
import {
  BALL_MESSAGE,
  NOTHING_MESSAGE,
  STRIKE_MESSAGE,
  RESTART_END_MESSAGE,
  WRONG_INPUT_MESSAGE,
  END_MESSAGE,
} from "./constants/messages.js";

const ballCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter((number) =>
    computerPickedNumberArray.includes(number)
  ).length;
};

const strikeCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter(
    (number, index) => computerPickedNumberArray[index] === number
  ).length;
};

const isAllCompleted = (playerInputNumberArray, computerPickedNumberArray) => {
  const ball = ballCount(playerInputNumberArray, computerPickedNumberArray);
  const strike = strikeCount(playerInputNumberArray, computerPickedNumberArray);

  if (strike === NUMBER_THREE) {
    MissionUtils.Console.print(`${strike}${STRIKE_MESSAGE}`);
    return true;
  }

  if (ball === NUMBER_ZERO) {
    MissionUtils.Console.print(`${strike}${NOTHING_MESSAGE}`);
    return false;
  }

  if (strike === NUMBER_ZERO) {
    MissionUtils.Console.print(`${ball}${BALL_MESSAGE}`);
    return false;
  }

  MissionUtils.Console.print(
    `${ball - strike}${BALL_MESSAGE} ${strike}${STRIKE_MESSAGE}`
  );
  return false;
};

const isRestartGame = async () => {
  let playerChoice = null;

  MissionUtils.Console.print(`${END_MESSAGE}`);
  try {
    playerChoice = await MissionUtils.Console.readLineAsync(
      `${RESTART_END_MESSAGE}`
    );
  } catch (error) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }

  if (playerChoice === STRING_ONE) {
    return true;
  }

  if (playerChoice === STRING_TWO) {
    return false;
  }

  throw new Error(WRONG_INPUT_MESSAGE);
};

export { isAllCompleted, isRestartGame };
