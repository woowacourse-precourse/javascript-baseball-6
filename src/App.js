import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 바로 실행되는 play 메소드
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")

      const input = MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
    }
    catch (error) {
      throw error;
    }
  }


}
const app = new App();
app.play();

export default App;
