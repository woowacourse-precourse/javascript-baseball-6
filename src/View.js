import { Console } from '@woowacourse/mission-utils';

export const readBaseballNumbers = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput;
};
