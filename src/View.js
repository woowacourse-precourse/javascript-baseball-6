import { Console } from '@woowacourse/mission-utils';

export const readBaseballNumbers = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput;
};

export const printStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
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
