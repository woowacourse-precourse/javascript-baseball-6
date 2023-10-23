import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "../messages/GameMessages.js";

const getUserNumber = async () => {
  const USER_NUMBER = await MissionUtils.Console.readLineAsync(
    Messages.GAME_INPUT_NUMBER
  );
  if (!isValidInput(USER_NUMBER)) {
    throw new Error(Messages.INVALID_INPUT_ERROR);
  }
  const USER_NUMBER_ARRAY = USER_NUMBER.split("").map(Number);
  return USER_NUMBER_ARRAY;
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

const getScore = (computer, userNumber) => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < computer.length; i++) {
    if (computer[i] === userNumber[i]) {
      strike++;
    } else if (computer.includes(userNumber[i])) {
      ball++;
    }
  }
  return { ball, strike };
};

const printScore = (score) => {
  if (score.strike === 3) {
    MissionUtils.Console.print(`${score.strike}스트라이크`);
    MissionUtils.Console.print(Messages.GAME_END);
    return false;
  }

  if (score.ball === 0 && score.strike === 0) {
    MissionUtils.Console.print(Messages.NOTHING);
    return true;
  }

  const ballMessage = score.ball > 0 ? `${score.ball}볼` : "";
  const strikeMessage = score.strike > 0 ? `${score.strike}스트라이크` : "";
  MissionUtils.Console.print(`${ballMessage} ${strikeMessage}`.trim());

  return true;
};

const getRestartChoice = async (restartCallback) => {
  const RESTART_CHOICE = await MissionUtils.Console.readLineAsync(
    Messages.GAME_RESTART
  );
  if (RESTART_CHOICE === "1") return restartCallback();
  if (RESTART_CHOICE === "2")
    return MissionUtils.Console.print(Messages.GAME_EXIT);
  throw new Error(Messages.INVALID_INPUT_RESTART_ERROR);
};

const getGenerateComputerNumbers = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const playGame = async (computer) => {
  MissionUtils.Console.print(Messages.GAME_START);
  let gameContinue = true;
  while (gameContinue) {
    const userNumber = await getUserNumber();
    const score = getScore(computer, userNumber);
    gameContinue = printScore(score);
  }
};

export default {
  getUserNumber,
  getScore,
  printScore,
  getRestartChoice,
  getGenerateComputerNumbers,
  playGame,
};
