import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    try {
      const inputNumber = await Console.readLineAsync(
        "0을 제외한 서로 다른 숫자를 3자리 입력해주세요: "
      );
    } catch (error) {
      console.log("[ERROR]", error.message);
    }
  }
}

const app = new App();
app.play();

export default App;
