import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

// TODO 1 : 게임종료 후 재시작 여부 출력 필요
// TODO 2 : 예외 처리 필요

class App {
  play() {
    function StartGame() {
      Console.print(`숫자 야구 게임을 시작합니다.`);
      const computerNumber = GetRandomNumber();
      PlayGame(computerNumber);
    }

    async function PlayGame(computerNumber) {
      let strikeCount = 0;

      while (strikeCount !== 3) {
        const userNumber = await InputNumber();
        strikeCount = CompareNumber(computerNumber, userNumber);
        if (strikeCount === 3) {
          break;
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

    StartGame();
  }
}

const app = new App();
app.play();

export default App;
