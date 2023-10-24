import printHint from './utils/printHint';
import calculateResult from './utils/calculateResult';
import isValid from './utils/isValid';
import makeComputerNumber from './utils/makeComputerNumber';

const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, GAME, ANSWER_LENGTH } =
  require('./constants/constants').default;

class App {
  async play() {
    Console.print(MESSAGE.START);
    const computerNumber = makeComputerNumber();
    await this.startGame(computerNumber);
  }

  async startGame(computer) {
    const player = await this.getPlayerNumber();
    const result = calculateResult(computer, player);

    printHint(result);

    if (result.strike < ANSWER_LENGTH) {
      await this.startGame(computer);
    } else {
      Console.print(MESSAGE.CORRECT_ANSWER);
      await this.askRestart();
    }
  }

  async getPlayerNumber() {
    const playerNumber = await Console.readLineAsync(MESSAGE.INPUT_NUMBER);

    if (!isValid(playerNumber)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return playerNumber;
  }

  async askRestart() {
    Console.print(MESSAGE.RESTART_STOP);
    const input = await Console.readLineAsync('');

    if (input === GAME.RESTART) {
      await this.play();
    } else if (input === GAME.STOP) {
      Console.print(MESSAGE.STOP);
    } else throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
}

export default App;
