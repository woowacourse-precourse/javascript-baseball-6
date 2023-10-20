import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.LENGTH_OF_NUMBER = 3;
  }
  createAnswerNumber() {
    let result = "";
    for (let i = 0; i < this.LENGTH_OF_NUMBER; i++) {
      const number = Random.pickNumberInRange(1, 9);
      result += number.toString();
    }
    return result;
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    try {
      const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (isNaN(inputNumber) || inputNumber.length !== this.LENGTH_OF_NUMBER) {
        throw new Error();
      }
      console.log(inputNumber);
    } catch (error) {
      Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}
export default App;

const app = new App();
app.play();
