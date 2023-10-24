import {Console} from '@woowacourse/mission-utils';
import {GameMessages} from './GameMessages.js';
import Pitcher from './models/Pitcher.js';
import Catcher from './models/Catcher.js';
import Umpire from './models/Umpire.js';
import {GameOptions, choiceOptions} from './GameOptions.js';

class App {
  constructor() {
    this.catcherNumbers = Catcher.getCatcherNumbers();
    this.pitcherNumbers = [];
  }

  async play(isInitialGame = true) {
    if (isInitialGame) {
      Console.print(GameMessages.GAME_START);
    }

    const umpire = new Umpire();
    while (true) {
      this.pitcherNumbers = await this.#getPitcherNumbers();
      const judgmentResult = umpire.getGameResult(this.pitcherNumbers, this.catcherNumbers);
      if (judgmentResult) break;
    }

    Console.print(GameMessages.GAME_SELECT);
    const gameSelect = await this.#decideToContinueGame();

    // 게임 종료
    if (gameSelect === GameOptions.EXIT) {
      return;
    }

    // 새로운 포수 번호 삽입 후, 게임 재시작
    this.catcherNumbers = Catcher.getCatcherNumbers();
    this.play(false);
  }

  // 투수 번호를 받는다.
  async #getPitcherNumbers() {
    const inputBalls = await Console.readLineAsync(GameMessages.PITCH_THE_BALL);
    return Pitcher.parsePitchBalls(inputBalls);
  }

  // 게임 종료 후
  async #decideToContinueGame() {
    const choice = await Console.readLineAsync('');
    return choiceOptions(choice);
  }
}

const app = new App();
app.play();

export default App;

