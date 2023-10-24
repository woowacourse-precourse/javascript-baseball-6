import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    //난수 생성 -> 3자리 임의의 수 만들기
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    //플레이어 입력 받기
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
  }
}

const app = new App();
app.play();
export default App;
