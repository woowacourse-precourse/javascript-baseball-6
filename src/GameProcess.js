import Computer from './Computer.js';
import Input from './Input.js';
import Interface from './Interface.js';

class GameProcess {
  constructor() {
    this.input = new Input();
    this.computer = new Computer();
    this.interface = new Interface();
  }

  initalizeGame() {
    Interface.printMessage('숫자 야구 게임을 시작합니다.');
    this.computer.createAnswer();
  }

  /**
* @description TheCount는 볼과 스트라이크를 묶어서 부르는 야구 용어이다.
*/
  async progressGame() {
    const VALUE = await this.input.enterExpectedAnswerValue();
    const THE_COUNT = this.computer.outputOfTheCountAlongValue(VALUE);
    const MID_TERM_RESULT = Computer.outputOfResultAlongTheCount(THE_COUNT);
    await this.midTermResultEvaluation(MID_TERM_RESULT);
  }

  /**
 * @param {"Correct" | "Incorrect"} midTermResult
 * @returns {void} - 정답이아닐경우 게임을 다시 진행한다.
 */
  async midTermResultEvaluation(midTermResult) {
    if (midTermResult === 'Incorrect') {
      await this.progressGame();
    }
    return null;
  }

  async endTheGame() {
    const VALUE = await this.input.enterRestartOrNotValue();
    return VALUE;
  }
}

export default GameProcess;
