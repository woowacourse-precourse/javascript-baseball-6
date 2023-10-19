import { Console } from '@woowacourse/mission-utils';
import { NOTIFICATION_MESSAGE, STATUS_MESSAGE } from '../constants/Message.js';

export function printGameStart() {
  return Console.print(NOTIFICATION_MESSAGE.gameStart);
}

export function printGameEnd() {
  return Console.print(NOTIFICATION_MESSAGE.gameEnd);
}

export function printGameStatus(status) {
  const message = [];

  if (status.ball) {
    message.push(`${status.ball}${STATUS_MESSAGE.ball} `);
  }
  if (status.strike) {
    message.push(`${status.strike}${STATUS_MESSAGE.strike}`);
  }
  if (!message.length) {
    message.push(`${STATUS_MESSAGE.nothing}`);
  }

  Console.print(message.join(''));
}
