import { Console } from '@woowacourse/mission-utils';
import { BASEBALL_BALL, BASEBALL_NOTHING, BASEBALL_STRIKE, GAME_END_MESSAGE, GAME_START_MESSAGE, GAME_WIN_MESSAGE } from './constants.js';

export default class GameEngine {
  static showStartMessage() {
    Console.print(GAME_START_MESSAGE);
  }
  
  static ballCount(userNumbers, computerNumbers) {
    let strike = 0;
    let ball = 0;

    const computerNumberSet = new Set(computerNumbers);

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        strike += 1;
      } else if (computerNumberSet.has(userNumbers[i])) {
        ball += 1;
      }
    }

    return { strike, ball };
  }

  static showCountStatus(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(BASEBALL_NOTHING);
    } else {
      const results = [];
      if (ball > 0) results.push(`${ball}${BASEBALL_BALL}`);
      if (strike > 0) results.push(`${strike}${BASEBALL_STRIKE}`);
      Console.print(results.join(' '));
    }
  }

  showWinMessage() {
    Console.print(GAME_WIN_MESSAGE);
  }

  async showEndMessage() {
    return await Console.readLineAsync(GAME_END_MESSAGE);
  }
}
