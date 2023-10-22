import { Console } from '@woowacourse/mission-utils';
import { NOTIFICATION_MESSAGE, STATUS_MESSAGE } from '../constants/Message.js';

export const printGameStart = () =>
  Console.print(NOTIFICATION_MESSAGE.gameStart);

export const printGameEnd = () => Console.print(NOTIFICATION_MESSAGE.gameEnd);

export const printGameStatus = (status) => {
  const message = [];

  if (status.ball) {
    message.push(`${status.ball}${STATUS_MESSAGE.ball}`);
  }
  if (status.strike) {
    message.push(`${status.strike}${STATUS_MESSAGE.strike}`);
  }
  if (!message.length) {
    message.push(`${STATUS_MESSAGE.nothing}`);
  }
  Console.print(message.join(' '));
};
