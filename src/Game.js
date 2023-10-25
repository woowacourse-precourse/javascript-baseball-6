import { Random, Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import Validator from './Validator.js';
import Checker from './Checker.js';
import Player from './Player.js';

const GAME_MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  END_PROMPT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class Game {
  #player;

  #input;
  #answer;

  constructor() {
    this.#player = new Player();

    this.#input = [];
    this.#answer = Computer.generateNumber();
  }

  async endGame() {
    const endOption = await this.#player.getEndOption();
    if (endOption === '1') {
      this.startGame();
    }

    return 0;
  }

  async progressGame() {
    let result = '';

    while (result !== '3스트라이크') {
      try {
        this.#input = await this.#player.getNumber();
        result = Checker.checkInput(this.#input, this.#answer);
        Console.print(result);
      } catch (error) {
        Console.print(error.message);
        return; // 오류가 발생하면 게임을 종료합니다.
      }
    }

    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    await this.endGame();

    return this.#input;
  }

  startGame() {
    Console.print(GAME_MESSAGE.START);
    return this.progressGame();
  }
}

export default Game;
