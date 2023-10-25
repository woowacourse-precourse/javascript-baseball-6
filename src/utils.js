import { Console } from '@woowacourse/mission-utils';

async function userInput(message) {
  const input = await Console.readLineAsync(message);
  return input;
}

export default userInput;
