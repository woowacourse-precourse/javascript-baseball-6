import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import BaseballGame from './BaseballGame.js';

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  };

  async play() {
    Console.print(MESSAGE.startMessage);
    return this.baseballGame.getNumber();
  };
};

export default App;
