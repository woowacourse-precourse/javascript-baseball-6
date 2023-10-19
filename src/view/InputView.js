import { Console } from '@woowacourse/mission-utils';
import { NOTIFICATION_MESSAGE } from '../constants/Message.js';

export async function getPlayerInput() {
  try {
    return Console.readLineAsync(NOTIFICATION_MESSAGE.needInput);
  } catch (error) {
    return Console.print(error.log);
  }
}

export async function getRetryInput() {
  try {
    return Console.readLineAsync(NOTIFICATION_MESSAGE.gameRetry);
  } catch (error) {
    return Console.print(error.log);
  }
}

export async function exit() {
  return Console.close();
}
