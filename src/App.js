import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    function generateRandomNumber() {
      // 1~9 사이의 서로 다른 임의의 수 3개 선택 함수
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }

    function palyGame() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      let attempts = 0;
      while (ture) {
        let input =
          MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        let userGuess = input.split("").map(Number);

        if (
          userGuess.length !== 3 ||
          userGuess.some(isNaN) ||
          userGuess.some((num) => num < 1 || num > 9)
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
    try {
      palyGame();
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
}

export default App;
