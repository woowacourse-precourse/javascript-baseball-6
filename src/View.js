import { Console } from '@woowacourse/mission-utils';

export const readBaseballNumbers = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput;
};

export const printStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
};
