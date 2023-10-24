import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer;
    this.strike = 0;
    this.ball = 0;
    this.playState = true;
  }
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (this.playState) {
      this.answer = this.randomNumbersArray();
      Console.print(`정답은 : ${this.answer}`);
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 :');
      this.checkUserInput(userInput);
      this.calculateGameResult(this.answer, userInput);

      if (this.playState) {
        Console.print(this.printGameResult(this.strike, this.ball))
        this.ball = 0;
        this.strike = 0;
      } else {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료 ');
        if (await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.') === '1') {
          this.playState = true;
        }
      }

    }


  }

  randomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkUserInput(userInput) {
    if (userInput.length > 3) {
      throw Error('3자리의 수를 입력해주세요');
    }
  }

  calculateGameResult(answer, userInput) {

    if (answer.join('') === userInput) {
      this.strike = 3;
      this.playState = false;
      return
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
      this.playState = true;
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
      resultStr += `$${ball}볼`
    }

    return resultStr;
  }
}

const app = new App();
app.play();

export default App;
