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
    // Console.print(computer);
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const user = number.split("").map(Number);
    if (user.length !== 3 || number === null || new Set(user).size !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    // Console.print(user);
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computer.length; i++) {
      const index = user.indexOf(computer[i]);
      if (index > -1) {
        // 같은 숫자가 존재하는 경우
        if (index === i) {
          strike++; // 자리까지 동일한 경우
        } else {
          ball++;
        }
      }
    }
    Console.print(`스트라이크 : ${strike}, 볼: ${ball}`);
  }
}

const app = new App();
app.play();

export default App;
