import { MissionUtils } from '@woowacourse/mission-utils';
import { MakeRandomNumber, isValidUserNumber } from './ball.js';

//game start
export const getUserInputNumber = async (randomNumber) => {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!isValidUserNumber(USER_INPUT_NUMBER)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  HandleGameProcess(stringToNumberArray(USER_INPUT_NUMBER), randomNumber);
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
  const result = {
    ball: 0,
    strike: 0,
  };

  userInputNumber.forEach((num, index) => {
    if (num === randomNumber[index]) result.strike += 1;
    else if (randomNumber.includes(num)) result.ball += 1;
  });
  return result;
};

export const PrintResult = (result) => {
  const { strike, ball } = result;
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print('낫싱');
    return;
  }

  const resultText = [];
  if (ball > 0) resultText.push(ball + '볼');
  if (strike > 0) resultText.push(strike + '스트라이크');
  MissionUtils.Console.print(resultText.join(' '));
};

export const isCorrectAnswer = (result) => {
  if (result.strike === 3) {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return true;
  }
  return false;
};

export const askRetry = () => {
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    (answer) => {
      retryOrExit(answer);
    },
  );
};

export const retryOrExit = (answer) => {
  if (answer === '1') {
    GameSet();
    return;
  }
  if (answer === '2') {
    return;
  }
  throw new Error('1이나 2가 아닌 값을 잘못 입력하였습니다.');
};
