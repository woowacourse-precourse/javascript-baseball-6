import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.constans.js';
import hintFromMatching from '../utils/hintFromMatching.js';
import isThreeDifferentNum from '../utils/isThreeDifferentNum.js';
import rl from '../utils/readlineInterface.js';

class App {
  constructor() {
    this.matchNumber = 0; // 사용자가 맞추어야 할 숫자
  }

  /**
   * 시작 문구를 출력해주는 메서드
   */
  startPhrase() {
    console.log(MESSAGE.start);
  }

  /**
   * 사용자가 맞추어야 할 숫자를 세팅하는 메서드
   */
  setMatchNumber() {
    const computer = [];
    // 3자리 숫자를 세팅
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.matchNumber = computer.join('');
  }

  /**
   * 인자에 따라 볼과 스트라이크 개수 객체(matching)를 반환하는 메서드
   */
  async inputToMatching(number) {
    const matching = { ball: 0, strike: 0 };

    const matchingNumberArray = [...this.matchNumber];
    const inputNumberArray = [...String(number)];

    inputNumberArray.forEach((num, index) => {
      // 스트라이크인 경우
      if (
        matchingNumberArray.includes(num) &&
        matchingNumberArray.indexOf(num) === index
      ) {
        matching.strike += 1;
      }

      // 볼인 경우
      if (
        matchingNumberArray.includes(num) &&
        matchingNumberArray.indexOf(num) !== index
      ) {
        matching.ball += 1;
      }
    });

    return matching;
  }

  /**
   * 입력에 따른 matching 객체를 반환하는 메서드
   */
  async receiveInputNumberToMatching() {
    const inputNumber = await new Promise((resolve) => {
      rl.question(MESSAGE.input, (input) => {
        resolve(input);
      });
    });

    // 잘못된 형식으로 입력한 경우
    if (!isThreeDifferentNum(inputNumber)) {
      rl.close();
      throw MESSAGE.error;
    }

    const matching = await this.inputToMatching(inputNumber);
    rl.close();

    return { matching };
  }

  readyGame() {
    this.startPhrase();
    this.setMatchNumber();
  }

  async playingGame() {
    try {
      const { matching } = await this.receiveInputNumberToMatching();
      console.log(hintFromMatching(matching));
    } catch (error) {
      console.log(error);
    }
  }

  async play() {
    this.readyGame();
    await this.playingGame();
  }
}

export default App;
