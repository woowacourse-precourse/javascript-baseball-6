import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    function generateRandomNumber() {
      // 컴퓨터가 1~9 사이의 서로 다른 임의의 수 3개 선택하는 함수
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }

    function calculateResult(computer, guess) {
      // 입력한 수에 대한 결과를 볼, 스트라이크 개수 계산 함수
      let strikes = 0;
      let balls = 0;

      for (let i = 0; i < 3; i++) {
        if (guess[i] === computer[i]) strikes++;
        else if (computer.includes(guess[i])) balls++;
      }

      return { strikes, balls };
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
