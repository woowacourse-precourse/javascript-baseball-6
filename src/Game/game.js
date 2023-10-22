import { MissionUtils } from '@woowacourse/mission-utils';
import { MakeRandomNumber, isValidUserNumber } from './ball.js';

//game start
async function getUserInputNumber(randomNumber) {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!isValidUserNumber(USER_INPUT_NUMBER)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  HandleGameProcess(stringToNumberArray(USER_INPUT_NUMBER), randomNumber);
}

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

const HandleGameProcess = (randomNumber, userInputNumber) => {
  const result = CompareNumber(randomNumber, userInputNumber);
  PrintResult(result);
};

const stringToNumberArray = (string) => {
  return [...string].map((char) => Number(char));
};

const CompareNumber = (userInputNumber, randomNumber) => {
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

const PrintResult = (result) => {
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
