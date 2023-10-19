import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./random-number.js";

class App {
  constructor() {
    this.computer = randomNumber();
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      console.log(this.computer);
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 :');
      this.gameResultOutput(this.gameResult(userInput));
    } catch (error) {
      
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
    const [strike, ball] = score;

    if (strike === 3) {
      return Console.print('3스트라이크');
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
}

export default App;

const app = new App();
app.play();