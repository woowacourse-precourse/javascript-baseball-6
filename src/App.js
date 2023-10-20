import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      Console.print("낫싱");
      Console.print("3스트라이크");
      Console.print("1볼 1스트라이크");
      Console.print("3스트라이크");
      Console.print("게임 종료");
      const username = await Console.readLineAsync("닉네임을 입력해주세요.");
    } catch (error) {
      // reject 되는 경우
    }
  }
}

export default App;
