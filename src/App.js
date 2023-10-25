import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "./Message";

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
      const result = {
        strikes: 0,
        balls: 0,
      };

      for (let i = 0; i < 3; i++) {
        if (computer[i] === guess[i]) result.strikes++;
        else if (computer.includes(guess[i])) result.balls++;
      }

      return result;
    }

    async function inputNumber() {
      // 사용자로부터 서로 다른 3자리의 수 입력 받는 함수

      const userGuess = await MissionUtils.Console.readLineAsync(GAME.INPUT);
      if (isNaN(userGuess)) throw new ERROR(ERROR.NUMBER);
      else if (userGuess < "1" || userGuess > "9") throw new ERROR(ERROR.RANGE);
      if (userGuess.length !== 3) throw new ERROR(ERROR.LENGTH);
      if (new Set(userGuess).size !== userGuess.length)
        throw new ERROR(ERROR.REPEATED);

      return [...userGuess].map(Number);
    }

    function printResult(result) {
      // 결과 출력하는 함수
      if (result.balls !== 0 || result.strikes !== 0) {
        if (result.strikes === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          return true;
        } else if (result.balls === 0)
          MissionUtils.Console.print(`${result.strikes}스트라이크`);
        else if (result.strikes === 0)
          MissionUtils.Console.print(`${result.balls}볼`);
        else
          MissionUtils.Console.print(
            `${result.balls}볼 ${result.strikes}스트라이크`
          );
      } else MissionUtils.Console.print("낫싱");
      return false;
    }

    async function reGame() {
      // 게임 재시작 or 종료

      while (true) {
        const userInput = await MissionUtils.Console.readLineAsync(
          GAME.RESTART
        );
        if (userInput === "1") return true;
        else if (userInput === "2") return false;
      }
    }

    async function palyGame() {
      // 숫자 야구 게임

      MissionUtils.Console.print(GAME.START);
      let computer = generateRandomNumber();
      let RESTART = true;
      do {
        let userGuess = await inputNumber();
        if (printResult(calculateResult(computer, userGuess))) {
          RESTART = await reGame();
          if (RESTART) computer = generateRandomNumber();
        }
      } while (RESTART);
    }
    palyGame();
  }
}

export default App;
