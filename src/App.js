import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    // try {
    //   const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
    //   Console.print(number);
    // } catch (err) {
    //   console.log(err);
    // }
  }
}

export default App;

const app = new App();
app.play();
