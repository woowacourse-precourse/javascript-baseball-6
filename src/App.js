import { Console } from '@woowacourse/mission-utils';
import Game from './Game.js';

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  #printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.#printStartMessage();
    this.#game.startGame();
  }
}

const app = new App();
app.play();

export default App;
