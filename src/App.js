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
    const answerNumber = [];
    while (answerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answerNumber.includes(number)) {
        answerNumber.push(number);
      }
    }
    return answerNumber;
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.isValidNum(input)) {
      throw new Error('[ERROR]');
    }
    const strToNum = this.strToNumArr(input);
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
    const result = this.countNum(this.computerNumber, userNumber);
    this.printResult(result);
    if (this.endGame(result)) {
      this.askRetry();
      return;
    }
    this.getUserInput();
  }

  countNum(computerNumber, userNumber) {
    const result = {
      ball: 0,
      strike: 0,
    };

    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) result.strike += 1;
      else if (computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }

  printResult(result) {
    const {strike, ball} = result;
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    const resultText = [];
    if (ball > 0) resultText.push(`${ball}볼`);
    if (strike > 0) resultText.push(`${strike}스트라이크`);
    MissionUtils.Console.print(resultText.join(' '));
  }

  endGame(result) {
    if (result.strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
    return false;
  }

  async askRetry() {
    const answer = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ',
    );
    this.selectRetry(answer);
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
