import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = [];
    this.strike = 0;
    this.ball = 0;
    this.playState = true;
  }
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.randomNumbersArray();

    while (this.playState) {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 :');
      this.checkUserInput(userInput);
      this.calculateGameResult(this.answer, userInput);

      Console.print(this.printGameResult(this.strike, this.ball));

      if (this.strike !== 3) {
        this.ball = 0;
        this.strike = 0;
      } else {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const userAnswer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        if (userAnswer === '1') {
          this.answer = this.randomNumbersArray();
          this.strike = 0;
          this.ball = 0;
          continue;
        } else if (userAnswer === '2') {
          break;
        }
      }
    }
  }

  randomNumbersArray() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkUserInput(userInput) {
    if (userInput.length > 3) {
      throw Error('[ERROR] 3자리의 수를 입력해주세요');
    }
  }

  calculateGameResult(answer, userInput) {
    if (answer.join('') === userInput) {
      this.strike = 3;
    } else {
      answer.forEach((answerElement, index) => {
        if (answerElement === Number(userInput[index])) {
          this.strike += 1;
        } else {
          [...userInput].forEach((inputElement) => {
            if (answerElement === Number(inputElement)) {
              this.ball += 1;
            }
          })
        }
      })
    }
  }

  printGameResult(strike, ball) {
    let resultStr = '';

    if (strike === 0 && ball === 0) {
      resultStr = '낫싱'
    } else if (strike > 0 && ball > 0) {
      resultStr = `${ball}볼 ${strike}스트라이크 `;
    } else if (strike > 0 && ball === 0) {
      resultStr += `${strike}스트라이크 `
    } else {
      resultStr += `${ball}볼`
    }

    return resultStr;
  }
}

const app = new App();
app.play();

export default App;
