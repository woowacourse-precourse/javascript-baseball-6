import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { Rules } from "./constants/index.js";

class App {
  #isCorrect = false;
  #answer = '123';
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (!this.#isCorrect) {
      // this.#answer = this._initAnswer();
      let inputedNumbers = '';
      try {
        inputedNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
        const countedResult = this._countStrikeAndBall(this.#answer, inputedNumbers);
        Console.print(countedResult.cntBall + '볼 ' + countedResult.cntStrike + '스트라이크');
        Console.print('정답입니까?: ' + this._checkAnswer(countedResult.cntStrike));
        if (this._checkAnswer(countedResult.cntStrike)) {
          this.#isCorrect = true;
          return;
        }
      } catch (error) {
        Console.print('Error: ' + error.message);
      }
    }
  }

  _checkAnswer(cntStrike) {
    return cntStrike === Rules.DIGIT_COUNT;
  }

  _countStrikeAndBall(answer, numbers) {
    let cntStrike = 0;
    let cntBall = 0;
    const answers = answer.split('');
    numbers.split('').forEach((item, idx) => {
      if (answers[idx] === item) {
        ++cntStrike;
      } else if (answers.indexOf(item) !== -1) {
        ++cntBall;
      }
    });
    return { cntStrike, cntBall };
  }

  _initAnswer() {
    const computer = [];
    while (computer.length < Rules.DIGIT_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }
}

const app = new App();
app.play();

export default App;
