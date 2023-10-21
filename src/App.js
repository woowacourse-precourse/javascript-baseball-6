import { Console, MissionUtils } from "@woowacourse/mission-utils";

let userInput = "";
class App {
  async play() {
    // 정답 값 랜덤으로 생성하기
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    // 유저 입력 값 받기
    userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
  }
}

export default App;
