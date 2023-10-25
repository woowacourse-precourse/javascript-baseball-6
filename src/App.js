import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer/Computer.js';
import Receiver from './Reciver/Reciver.js';
import Viewer from './Viewer/Viewer.js';
import Validator from './Validator/Validator.js';
import Counter from './Counter/Counter.js';

class App {
  #computer = new Computer();

  #viewer = new Viewer();

  #receiver = new Receiver();

  #validator = new Validator();

  #counter = new Counter();

  #computerNumber = null;

  #userNum = null;

  #userGameOption = null;

  #isGameFinish;

  init() {
    this.#computer.createNumber();
    this.#computerNumber = this.#computer.generateComputerBaseballNum();
    this.#isGameFinish = false;
  }

  async play() {
    this.init();

    this.#viewer.startMsg();

    await this.progress();

    if (this.#isGameFinish) {
      this.#viewer.clearMsg();
      this.#userGameOption = await this.#receiver.receiveGameCondition();

      if (this.#validator.checkUserGameOptionValue(+this.#userGameOption)) {
        console.log(this.#userGameOption, '값이뭔가');
        if (+this.#userGameOption === 1) await this.play();
        else MissionUtils.Console.print('게임을 종료합니다');
      }
    }
  }

  async progress() {
    this.#userNum = await this.#receiver.receiveUserNumber();
    console.log(this.#computerNumber, this.#userNum, '비교용');

    if (this.#validator.compareNumber(this.#userNum, this.#computerNumber)) {
      this.#counter.count(this.#userNum, this.#computerNumber);
      this.#isGameFinish = this.#counter.getStrikes() === 3;

      //여기 리팩토링 필요

      if (this.#counter.getStrikes() > 0 && this.#counter.getBalls() > 0) {
        MissionUtils.Console.print(
          `${this.#counter.getBalls()}볼 ${this.#counter.getStrikes()}스트라이크 `,
        );
      }

      if (this.#counter.getStrikes() > 0 && this.#counter.getBalls() === 0) {
        MissionUtils.Console.print(`${this.#counter.getStrikes()}스트라이크`);
      }
      if (this.#counter.getBalls() > 0 && this.#counter.getStrikes() === 0) {
        MissionUtils.Console.print(`${this.#counter.getBalls()}볼`);
      }
      if (this.#counter.getBalls() === 0 && this.#counter.getStrikes() === 0) {
        MissionUtils.Console.print('낫싱');
      }
    }
    if (!this.#isGameFinish) await this.progress();
  }
}

const app = new App();

app.play();

export default App;
