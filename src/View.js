import { Console } from '@woowacourse/mission-utils';

export const readBaseballNumbers = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput;
};

export const printStartMessage = (message) => {
  Console.print(message);
};

export const printResult = ({ strike, ball, isNothing }) => {
  if (!!isNothing) {
    Console.print('낫싱');
    return;
  }
  if (!ball && strike) {
    Console.print(`${strike}스트라이크`);
    return;
  }
  if (ball && !strike) {
    Console.print(`${ball}볼`);
    return;
  }
  Console.print(`${ball}볼 ${strike}스트라이크`);
};

export const printEndMessage = () => {
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
};
