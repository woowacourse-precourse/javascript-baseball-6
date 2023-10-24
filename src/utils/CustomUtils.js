import { MissionUtils } from "@woowacourse/mission-utils";
import messages from "../messages/GameMessages.js";

const getUserNumber = async () => {
  const userNumbers = await MissionUtils.Console.readLineAsync(
    messages.GAME_INPUT_NUMBER
  );
  if (!isValidInput(userNumbers)) {
    throw new Error(messages.INVALID_INPUT_ERROR);
  }
  const userNumberArray = userNumbers.split("").map(Number);
  return userNumberArray;
};

const isValidInput = (input) => {
  if (!/^[1-9]+$/.test(input)) {
    return false;
  }

  if (input.length !== 3) {
    return false;
  }

  const uniqueNumbers = new Set(input.split(""));
  if (uniqueNumbers.size !== 3) {
    return false;
  }

  return true;
};

const getScore = (computerNumbers, userNumbers) => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < computerNumbers.length; i++) {
    if (computerNumbers[i] === userNumbers[i]) {
      strike++;
    } else if (computerNumbers.includes(userNumbers[i])) {
      ball++;
    }
  }
  return { ball, strike };
};

const printScore = (score) => {
  if (score.strike === 3) {
    MissionUtils.Console.print(`${score.strike}스트라이크`);
    MissionUtils.Console.print(messages.GAME_END);
    return false;
  }

  if (score.ball === 0 && score.strike === 0) {
    MissionUtils.Console.print(messages.NOTHING);
    return true;
  }

  const ballMessage = score.ball > 0 ? `${score.ball}볼` : "";
  const strikeMessage = score.strike > 0 ? `${score.strike}스트라이크` : "";
  MissionUtils.Console.print(`${ballMessage} ${strikeMessage}`.trim());

  return true;
};

const getRestartChoice = async (restartCallback) => {
  const restartChoice = await MissionUtils.Console.readLineAsync(
    messages.GAME_RESTART
  );
  if (restartChoice === "1") return restartCallback();
  if (restartChoice === "2")
    return MissionUtils.Console.print(messages.GAME_EXIT);
  throw new Error(messages.INVALID_INPUT_RESTART_ERROR);
};

const generateComputerNumbers = () => {
  const computerNumbers = [];
  while (computerNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbers.includes(number)) {
      computerNumbers.push(number);
    }
  }
  return computerNumbers;
};

const playGame = async (computerNumbers) => {
  MissionUtils.Console.print(messages.GAME_START);
  let gameContinue = true;
  while (gameContinue) {
    const userNumbers = await getUserNumber();
    const score = getScore(computerNumbers, userNumbers);
    gameContinue = printScore(score);
  }
};

export default {
  getUserNumber,
  getScore,
  printScore,
  getRestartChoice,
  generateComputerNumbers,
  playGame,
};
