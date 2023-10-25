import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../message.js';

const print = (strike, ball) => {
  if (ball == 0 && strike == 0) Console.print(MESSAGES.nothing);
  else Console.print(MESSAGES.feedbackMessage(ball, strike));
  if (strike === 3) return false;
  else return true;
};

export default print;
