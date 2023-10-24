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
    let userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    userInput = Number(userInput);
    if (typeof userInput !== "number") {
      MissionUtils.Console.print(typeof userInput);
      MissionUtils.Console.print("[ERROR] 숫자를 입력해야 합니다.");
    } else if (userInput.toString().length !== 3) {
      MissionUtils.Console.print(userInput.toString().length);
      MissionUtils.Console.print("[ERROR] 세 자리 숫자를 입력해야 합니다.");
    } else {
      MissionUtils.Console.print(typeof userInput);

      //플레이어가 입력한 숫자에 대해 힌트 제공

      //맞출 시 게임 종료 => 다시 시작(1) or 완전히 종료(2) 입력 받기
    }
  }
}

const app = new App();
app.play();
export default App;
