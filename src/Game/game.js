import { MissionUtils } from '@woowacourse/mission-utils';
import { MakeRandomNumber, isValidUserNumber } from './ball.js';
import { ANSWER, RESULT, GAME_END, TEXT, ERROR } from '../Constants/constant.js';

//game start
export const getUserInputNumber = async (randomNumber) => {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync(TEXT.GET_USER_NUMBER);
  if (!isValidUserNumber(USER_INPUT_NUMBER)) {
    throw new Error(`[ERROR] ${ERROR.INVALID_USER_NUMBER}`);
  }
  HandleGameProcess(randomNumber, stringToNumberArray(USER_INPUT_NUMBER));
};

//game set
export const GameSet = async () => {
  try {
    const RANDOM_NUMBER = MakeRandomNumber();
    MissionUtils.Console.print(RANDOM_NUMBER);
    await getUserInputNumber(RANDOM_NUMBER);
  } catch (error) {
    throw error;
  }
};

export const HandleGameProcess = (randomNumber, userInputNumber) => {
  const result = CompareNumber(randomNumber, userInputNumber);
  PrintResult(result);
  if (isCorrectAnswer(result)) {
    askRetry();
    return;
  }
  getUserInputNumber(randomNumber);
};

export const stringToNumberArray = (string) => {
  return [...string].map((char) => Number(char));
};

export const CompareNumber = (randomNumber, userInputNumber) => {
  let result = {
    ball: 0,
    strike: 0,
  };

  userInputNumber.forEach((num, index) => {
    if (randomNumber.includes(num)) {
      num === randomNumber[index] ? (result.strike += 1) : (result.ball += 1);
    }
  });

  return result;
};

export const PrintResult = (result) => {
  const { strike, ball } = result;
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print(RESULT.NOTHING);
    return;
  }

  const resultText = [];
  if (ball > 0) resultText.push(ball + RESULT.BALL);
  if (strike > 0) resultText.push(strike + RESULT.STRIKE);
  MissionUtils.Console.print(resultText.join(' '));
};

export const isCorrectAnswer = (result) => {
  if (result.strike === 3) {
    MissionUtils.Console.print(TEXT.CORRECT_ANSWER);
    return true;
  }
  return false;
};

export const askRetry = async () => {
  const RETRY_MESSAGE = await MissionUtils.Console.readLineAsync(TEXT.RETRY);
  await retryOrExit(RETRY_MESSAGE);
};

export const retryOrExit = (answer) => {
  if (answer === GAME_END.RETRY) {
    GameSet();
    return;
  }
  if (answer === GAME_END.EXIT) {
    return;
  }
  throw new Error(`[ERROR] ${ERROR.INVALID_RETRY}`);
};
