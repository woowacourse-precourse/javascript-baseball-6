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
      console.log(this.gameResult(userInput));
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
}

export default App;

const app = new App();
app.play();