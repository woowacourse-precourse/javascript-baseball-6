import { MissionUtils } from '@woowacourse/mission-utils';
import { messages } from './Message.js';
import { app } from './App.js';

export async function getInput() {
  await MissionUtils.Console.readLine(messages.INPUT_NUMBER, (answer) => {
    console.log(`${messages.INPUT_NUMBER}: ${answer}`);
    app.input = answer;
    printMessage();
  });
}

export async function gameStart() {
}

/**
 * input을 answer와 비교한 후 Strike, Ball 개수 반환
 * @param {String} input
 * @returns {[Number, Number]} Strike, Ball 개수
 */

const getResult = () => {
  const countBall = [...app.input].filter((el) =>
    app.answer.includes(~~el)
  ).length;
  const countStrike = [...app.input].filter(
    (num, i) => ~~num === app.answer[i]
  ).length;
  return [countBall - countStrike, countStrike];
};

/**
 * 입력 값과 정답 비교 후 결과 반환
 * @param {String} input
 * @returns {String} 결과
 */
const resultMessage = () => {
  let resultText = [];
  const [ball, strike] = getResult();
  if (ball === 0 && strike === 0) resultText.push(messages.NOTHING);
  if (ball) resultText.push(`${ball}${messages.BALL}`);
  if (strike) resultText.push(`${strike}${messages.STRIKE}`);
  return resultText.join(' ');
};

/**
 * 결과 값 프린트
 * @param {String} input
 */

export async function printMessage() {
  app.message = resultMessage();
  if (app.message === '3스트라이크') {
    app.gameMode = 1;
  }
  MissionUtils.Console.print(app.message);
}
