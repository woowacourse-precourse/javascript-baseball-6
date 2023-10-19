import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { GameType, Rules } from "./constants/index.js";

class App {
  #isPause = false;
  #answer = null;
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this._initAnswer();
    while (!this.#isPause) {
      let inputedNumbers = '';
      try {
        inputedNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
        const countedResult = this._countStrikeAndBall(this.#answer, inputedNumbers);
        Console.print(countedResult.cntBall + '볼 ' + countedResult.cntStrike + '스트라이크');
        if (this._checkAnswer(countedResult.cntStrike)) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const pickedType = await Console.readLineAsync(`게임을 새로 시작하려면 ${GameType.RESTART}, 종료하려면 ${GameType.END}를 입력하세요.`);
          if (pickedType === GameType.END) {
            this.#isPause = true;
          } else if (pickedType === GameType.RESTART) {
            this._initAnswer();
          }
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
    const answers = answer?.split('');
    numbers.split('').forEach((item, idx) => {
      if (answers[idx] === item) {
        ++cntStrike;
      } else if (answers?.indexOf(item) !== -1) {
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
    this.#answer = computer.join('');
  }
}

// const app = new App();
// app.play();

export default App;
