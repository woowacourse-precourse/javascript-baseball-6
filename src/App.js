import { compare, generateResultString } from './utils/game.js';
import { getNumber, getMenuInput } from './utils/input.js';
import { generateThreeNumber } from './utils/random.js';
import { Console } from '@woowacourse/mission-utils';
import { NUM_OF_BALLS, MENU } from './constants/index.js';
class App {
  constructor() {}
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.initializeGame();

    while (true) {
      try {
        const userInputArr = await getNumber();
        const resultObj = compare(userInputArr, this._computerValue);
        const result = generateResultString(resultObj);

        Console.print(result);

        if (resultObj.strike === NUM_OF_BALLS) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

          const input = await getMenuInput();

          if (input === MENU.CONTINUE) {
            this.initializeGame();
            continue;
          } else if (input === MENU.EXIT) break;
        }
      } catch (error) {
        throw new Error('[ERROR] ' + error.message);
      }
    }
  }
  initializeGame() {
    this._computerValue = generateThreeNumber();
  }
}

const app = new App();

app.play();

export default App;
