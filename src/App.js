import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 받는곳
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (computer.indexOf(number) === -1) {
        computer.push(number);
      }
    }

    // 입력값 받는곳
    let input;
    let input_arr = [];

    async function input_value() {
      input = await Console.readLineAsync("숫자를 입력해주세요 : ");

      input_arr = input.split("").map((value, index) => {
        if (
          input.indexOf(value) !== index ||
          Number(value) <= 0 ||
          !Number(value) ||
          input.length != 3
        ) {
          throw new Error("[ERROR] 올바른 형식이 아닙니다");
        }

        return +value;
      });
    }
    await input_value();
    // Console.print(input_arr);

    const result = {
      ball: 0,
      strike: 0,
    };

    while (result.strike < 3) {
      for (const [computer_index, computer_value] of computer.entries()) {
        for (const [index, value] of input_arr.entries()) {
          if (computer_index == index && computer_value == value) {
            result.strike++;
            break;
          } else if (computer_value == value) {
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
        await input_value();
      } else if (result.ball > 0) {
        Console.print(`${result.ball}볼`);
        await input_value();
      } else if (result.strike > 0) {
        Console.print(`${result.strike}스트라이크`);
        await input_value();
      } else if (result.ball == 0 && result.strike == 0) {
        Console.print("낫싱");
        await input_value();
      }
      result.strike = 0;
      result.ball = 0;
    }
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    input = await Console.readLineAsync("");
    if (input == 1) {
      this.play();
    }
  }
}
const app = new App();
app.play();
export default App;
