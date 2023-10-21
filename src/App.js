import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      console.log(input);
    });
  }
}

const app = new App();
app.play();

export default App;
