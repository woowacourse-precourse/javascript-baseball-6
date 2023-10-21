import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./random-number.js";

class App {
  constructor() {
    this.computer = randomNumber();
    this.firstStart = true;
    this.inputContinuation = true;
  }

  async play() {
    if (this.firstStart) {
      Console.print('숫자 야구 게임을 시작합니다.');
      this.firstStart = false;
    }
    try {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.gameResultOutput(this.gameResult(userInput));
      this.playAgain();
    } catch (error) {
      Console.print(error.message);
    }
  }

  gameResult(userInput) {
    const userNumber = userInput.split('').map((number) => Number(number));
    let [strike, ball] = [0, 0];

    this.computer.forEach((number, idx) => {
      if (number === userNumber[idx]) {
        return strike++;
      }
      if (this.computer.includes(userNumber[idx])) {
        return ball++;
      }
    });

    return [strike, ball];
  }

  gameResultOutput(score) {
    console.log(this.computer);
    const [strike, ball] = score;

    if (strike === 3) {
      this.inputContinuation = false;
      return Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    if (strike === 0 && ball === 0) {
      return Console.print('낫싱');
    }
    if (strike === 0) {
      return Console.print(`${ball}볼`);
    }
    if (ball === 0) {
      return Console.print(`${strike}스트라이크`);
    }

    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async playAgain() {
    if(this.inputContinuation) return this.play();

    try {
      const userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
      if (userInput === '1') {
        this.computer = randomNumber();
        this.inputContinuation = true;
        this.play();
      }
      if (userInput === '2') return;
    } catch(error) {
      Console.print(error.message);
    }
  }
}

export default App;

const app = new App();
app.play();