import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 랜덤숫자 받기
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (computer.indexOf(number) === -1) {
        computer.push(number);
      }
    }
    // 입력값 받기
    let user;
    let userInput = [];

    async function inputValue() {
      user = await Console.readLineAsync("숫자를 입력해주세요 : ");

      userInput = user.split("").map((value, index) => {
        if (
          user.indexOf(value) !== index ||
          Number(value) <= 0 ||
          !Number(value) ||
          user.length != 3
        ) {
          throw new Error("[ERROR] 올바른 형식이 아닙니다");
        }

        return +value;
      });
    }
    await inputValue();

    // 받은값 계산
    const result = {
      ball: 0,
      strike: 0,
    };

    while (result.strike < 3) {
      for (const [computer_index, computer_value] of computer.entries()) {
        for (const [user_index, user_value] of userInput.entries()) {
          if (computer_index == user_index && computer_value == user_value) {
            result.strike++;
            break;
          } else if (computer_value == user_value) {
            result.ball++;
          }
        }
      }
      if (result.strike == 3) {
        Console.print(
          `${result.strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        break;
      } else if (result.ball > 0 && result.strike > 0) {
        Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
        await inputValue();
      } else if (result.ball > 0) {
        Console.print(`${result.ball}볼`);
        await inputValue();
      } else if (result.strike > 0) {
        Console.print(`${result.strike}스트라이크`);
        await inputValue();
      } else if (result.ball == 0 && result.strike == 0) {
        Console.print("낫싱");
        await inputValue();
      }
      result.strike = 0;
      result.ball = 0;
    }
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    user = await Console.readLineAsync("");
    if (user == 1) {
      this.play();
    } else if (user == 2) {
      return;
    }
  }
}
const app = new App();
app.play();
export default App;
