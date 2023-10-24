import {MissionUtils} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.initialPrint();
    this.computerNumber = null;
  }

  initialPrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.computerNumber = this.setAnswer();
    await this.getUserInput();
  }

  setAnswer() {
    const ANSWER_NUMBER = [];
    while (ANSWER_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!ANSWER_NUMBER.includes(NUMBER)) {
        ANSWER_NUMBER.push(NUMBER);
      }
    }
    return ANSWER_NUMBER;
  }

  async getUserInput() {
    const INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.isValidNum(INPUT)) {
      throw new Error('[ERROR]');
    }
    const strToNum = this.strToNumArr(INPUT);
    this.handleGame(strToNum);
  }

  isValidNum(input) {
    if (input.length !== 3) return false;
    if (new Set(input).size !== 3) return false;
    if (input.includes('0')) return false;
    if (Number.isNaN(Number(input))) return false;
    return true;
  }

  strToNumArr(string) {
    return [...string].map((char) => Number(char));
  }

  handleGame(userNumber) {
    const RESULT = this.countNum(this.computerNumber, userNumber);
    this.printResult(RESULT);
    if (this.endGame(RESULT)) {
      this.askRetry();
      return;
    }
    this.getUserInput();
  }

  countNum(computerNumber, userNumber) {
    const RESULT = {
      ball: 0,
      strike: 0,
    };

    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) RESULT.strike += 1;
      else if (computerNumber.includes(num)) RESULT.ball += 1;
    });
    return RESULT;
  }

  printResult(result) {
    const {strike, ball} = result;
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    const RESULT_TEXT = [];
    if (ball > 0) RESULT_TEXT.push(`${ball}볼`);
    if (strike > 0) RESULT_TEXT.push(`${strike}스트라이크`);
    MissionUtils.Console.print(RESULT_TEXT.join(' '));
  }

  endGame(result) {
    if (result.strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
    return false;
  }

  async askRetry() {
    const ANSWER = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ',
    );
    this.selectRetry(ANSWER);
  }

  selectRetry(answer) {
    if (answer === '1') {
      this.play();
      return;
    }
    if (answer === '2') {
      return;
    }
    throw new Error('[ERROR]');
  }
}

const app = new App();
app.play();

export default App;
