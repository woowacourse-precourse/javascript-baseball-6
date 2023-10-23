import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    Console.print(computer);
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const user = number.split("").map(Number);
    if (user.length !== 3 || number === null || new Set(user).size !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    Console.print(user);
  }
}

const app = new App();
app.play();

export default App;
