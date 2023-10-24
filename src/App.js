import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

class App {
  async play() {
    async function StartGame() {
      return await PlayGame();
    }

    async function PlayGame() {
      const computerNumber = GetRandomNumber();
      let strikeCount = 0;

      Console.print(`숫자 야구 게임을 시작합니다.`);

      while (strikeCount !== 3) {
        const userNumber = await InputNumber();

        strikeCount = CompareNumber(computerNumber, userNumber);
        if (strikeCount === 3) {
          const answer = await AskForRestart();
          if (answer === "1") {
            return await PlayGame();
          } else {
            Console.print("게임을 종료합니다.");
            return;
          }
        }
      }
    }

    function GetRandomNumber() {
      const computer = [];

      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      return computer;
    }

    async function InputNumber() {
      const user = await Console.readLineAsync(`숫자를 입력해주세요 : `);

      if (!/^[1-9]{3}$/.test(user) || new Set(user).size !== 3) {
        throw new Error("[ERROR] 잘못된 입력으로 인해 게임이 종료됩니다.");
      }

      const userArray = user.split("").map(Number);

      return userArray;
    }

    function CompareNumber(computer, user) {
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < computer.length; i++) {
        if (computer[i] === user[i]) {
          strike++;
        } else if (computer.includes(user[i])) {
          ball++;
        }
      }

      if (strike === 0 && ball === 0) {
        Console.print(`낫싱`);
      } else {
        const result = [];
        if (ball > 0) {
          result.push(`${ball}볼`);
        }
        if (strike > 0) {
          result.push(`${strike}스트라이크`);
        }
        Console.print(result.join(" "));
      }
      if (strike === 3) {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      }
      return strike;
    }

    async function AskForRestart() {
      const answer = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : "
      );

      if (answer !== "1" && answer !== "2") {
        throw new Error("[ERROR] 잘못된 입력으로 인해 게임이 종료됩니다.");
      }

      return answer;
    }

    return await StartGame();
  }
}

const app = new App();
app.play();

export default App;
