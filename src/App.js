import { Random, Console } from "@woowacourse/mission-utils";

class App {
  createAnswerNumber() {
    const LENGTH_OF_NUMBER = 3;
    let result = "";
    for (let i = 0; i < LENGTH_OF_NUMBER; i++) {
      const number = Random.pickNumberInRange(1, 9);
      result += number.toString();
    }
    return result;
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
    console.log(inputNumber);
  }
}
export default App;

const app = new App();
app.play();
