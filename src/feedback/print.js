import { feedbackMessage, messages } from '../message.js';

import { Console } from '@woowacourse/mission-utils';

const print = (strike, ball) => {
  if (ball == 0 && strike == 0) Console.print(messages.nothing);
  else Console.print(feedbackMessage(ball, strike));
  if (strike === 3) return false;
  else return true;
};

export default print;
