import printHint from './utils/printHint';
import calculateResult from './utils/calculateResult';
import isValid from './utils/isValid';
import makeComputerNumber from './utils/makeComputerNumber';

const { Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = makeComputerNumber();
    await this.startGame(computerNumber);
  }

  async startGame(computer) {
    const player = await this.getPlayerNumber();
    const result = calculateResult(computer, player);

    printHint(result);

    if (result.strike < 3) {
      await this.startGame(computer);
    } else {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askRestart();
    }
  }

  async getPlayerNumber() {
    const playerNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!isValid(playerNumber)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return playerNumber;
  }

  async askRestart() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const input = await Console.readLineAsync('');
    if (input === '1') {
      await this.play();
    } else if (input === '2') {
      Console.print('게임 종료');
    } else throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
}

export default App;
