import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./random-number.js";

class App {
  constructor() {
    this.computer = randomNumber();
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 :');
    } catch (error) {
      
    }
  }
}

export default App;

const app = new App();
app.play();