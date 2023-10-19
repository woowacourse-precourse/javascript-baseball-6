import { Console } from '@woowacourse/mission-utils';
import { NOTIFICATION_MESSAGE } from '../constants/Message.js';
import {
  isCorrectPlayerInput,
  isCorrectRetryInput,
} from '../utils/Validation.js';

export async function getPlayerInput() {
  const res = await Console.readLineAsync(NOTIFICATION_MESSAGE.needInput);
  isCorrectPlayerInput(res);
  return res;
}

export async function getRetryInput() {
  const res = await Console.readLineAsync(NOTIFICATION_MESSAGE.gameRetry);
  isCorrectRetryInput(res);
  return res;
}
