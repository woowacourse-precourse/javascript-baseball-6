import { MissionUtils } from '@woowacourse/mission-utils';
import { makeRandomNumber, isValidUserNumber } from './ball.js';
import { RESULT_MESSAGE, GAME_END, TEXT, ERROR } from '../Constants/constant.js';

export const gameSet = async () => {
  try {
    const RANDOM_NUMBER = makeRandomNumber();
    MissionUtils.Console.print(RANDOM_NUMBER);
    await getUserInputNumber(RANDOM_NUMBER);
  } catch (error) {
    throw error;
  }
};

const getUserInputNumber = async (randomNumber) => {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync(TEXT.GET_USER_NUMBER);
  if (!isValidUserNumber(USER_INPUT_NUMBER)) {
    throw new Error(ERROR.INVALID_USER_NUMBER);
  }
  handleGameProcess(randomNumber, stringToNumberArray(USER_INPUT_NUMBER));
};

const handleGameProcess = (randomNumber, userInputNumber) => {
  const RESULT = compareNumber(randomNumber, userInputNumber);
  printResult(RESULT);
  if (isCorrectAnswer(RESULT)) {
    askRetry();
    return;
  }
  getUserInputNumber(randomNumber);
};

const stringToNumberArray = (string) => {
  return [...string].map((char) => Number(char));
};

const compareNumber = (randomNumber, userInputNumber) => {
  const RESULT = {
    ball: 0,
    strike: 0,
  };

  userInputNumber.forEach((num, index) => {
    if (randomNumber.includes(num)) {
      num === randomNumber[index] ? (RESULT.strike += 1) : (RESULT.ball += 1);
    }
  });

  return RESULT;
};

const printResult = (result) => {
  const { strike, ball } = result;
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print(RESULT_MESSAGE.NOTHING);
    return;
  }

  const RESULT_ARRAY = [];
  if (ball > 0) RESULT_ARRAY.push(ball + RESULT_MESSAGE.BALL);
  if (strike > 0) RESULT_ARRAY.push(strike + RESULT_MESSAGE.STRIKE);
  MissionUtils.Console.print(RESULT_ARRAY.join(' '));
};

const isCorrectAnswer = (result) => {
  if (result.strike === 3) {
    MissionUtils.Console.print(TEXT.CORRECT_ANSWER);
    return true;
  }
  return false;
};

const askRetry = async () => {
  const RETRY_MESSAGE = await MissionUtils.Console.readLineAsync(TEXT.RETRY);
  retryOrExit(RETRY_MESSAGE);
};

const retryOrExit = (answer) => {
  if (answer === GAME_END.RETRY) {
    gameSet();
    return;
  }
  if (answer === GAME_END.EXIT) {
    return;
  }
  throw new Error(ERROR.INVALID_RETRY);
};
