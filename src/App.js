import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 받는곳
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      computer.push(number);
    }
    console.log(computer);

    // 입력값 받는곳

    const value = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const value_arr = value.split("").map(Number);
    Console.print(value_arr);

    let ball = 0;
    let strike = 0;

    for (const [computer_index, computer_value] of computer.entries()) {
      for (const [index, value] of value_arr.entries()) {
        if (computer_index == index && computer_value == value) {
          strike++;
          console.log(`${strike}스트라이크`);
        } else if (computer_value == value) {
          ball++;
          console.log(`${ball}볼`);
        }
      }
    }
    process.exit(1);
  }
}
const app = new App();
app.play();
export default App;
