import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 받는곳
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (computer.indexOf(number) === -1) {
        computer.push(number);
      }
    }
    console.log(computer);

    // 입력값 받는곳
    let input;
    let input_arr = [];

    const input_value = async () => {
      input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      input_arr = input.split("").map((value) => {
        // console.log("input_arr.indexOf(value) = ", input_arr.indexOf(value));
        if (
          input.indexOf(value) === -1
          // ||
          //   Number(value) <= 0 ||
          //   !Number(value) ||
          //   value.length != 3
        ) {
          throw new Error("올바른 형식이 아닙니다");
        }

        return +value;
      });
    };
    await input_value();
    console.log(input_arr);
    // Console.print(input_arr);

    // let ball = 0;
    // let strike = 0;
    const result = {
      ball: 0,
      strike: 0,
    };
    for (const [computer_index, computer_value] of computer.entries()) {
      // console.log("computer_value:", computer_value);
      for (const [index, value] of input_arr.entries()) {
        if (computer_index == index && computer_value == value) {
          result.strike++;
          // console.log(`${result.strike}스트라이크`);
          break;
        } else if (computer_value == value) {
          result.ball++;
          // console.log("value:", value);

          // console.log(`${result.ball}볼`);
        }
      }
    }

    // for (const key in result) {
    //   console.log(result[key]);
    // }

    process.exit(1);
  }
}
const app = new App();
app.play();
export default App;
