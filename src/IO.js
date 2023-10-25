import { Console } from '@woowacourse/mission-utils';

export async function read(query) {
  const userInput = await Console.readLineAsync(query);
  return userInput;
}

export function write(query) {
  Console.print(query);
}
