import { Console } from '@woowacourse/mission-utils';
import { NOTIFICATION_MESSAGE } from '../constants/Message.js';
import {
  isCorrectPlayerInput,
  isCorrectRetryInput,
} from '../utils/Validation.js';

export const getPlayerInput = async () => {
  const playerInput = await Console.readLineAsync(
    NOTIFICATION_MESSAGE.needInput
  );
  isCorrectPlayerInput(playerInput);
  return playerInput;
};

export const getRetryInput = async () => {
  const retryInput = await Console.readLineAsync(
    NOTIFICATION_MESSAGE.gameRetry
  );
  isCorrectRetryInput(retryInput);
  return retryInput;
};
