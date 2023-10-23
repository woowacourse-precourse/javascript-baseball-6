import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

const computers = [];
let ball = 0;
let strike = 0;

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (computers.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!computers.includes(number)) {
        computers.push(number);
      }
    }
    const COMPUTER = computers.join("");
    // Console.print(COMPUTER);

    while (true) {
      let usernum = await Console.readLineAsync("숫자를 입력해주세요 : ");
      Console.print("숫자를 입력해주세요 : " + usernum + typeof usernum);
      if (usernum.length != 3 || usernum == null) {
        Console.print(typeof usernum);
        continue;
      }
      // if (COMPUTER === usernum) {
      //   Console.print("정답");
      //   break;
      // }
      for (let i = 0; i < 3; i++) {
        if (COMPUTER.includes(usernum[i])) {
          if (COMPUTER[i] === usernum[i]) strike++;
          else ball++;
        }
      }

      if (ball == 0 && strike == 0) Console.print("낫싱");
      else if (ball > 0 && strike == 0) Console.print(ball + "볼");
      else if (ball == 0 && strike > 0) Console.print(strike + "스트라이크");
      else Console.print(ball + "볼 " + strike + "스트라이크");

      if (strike == 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
  }
}

export default App;
