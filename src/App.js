import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { Messages } from "./Messages";

const computers = [];
let ball = 0;
let strike = 0;

class App {
  async play() {
    Console.print(Messages.START);
    while (computers.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!computers.includes(number)) {
        computers.push(number);
      }
    }
    const COMPUTER = computers.join("");
    // Console.print(COMPUTER);

    while (true) {
      let usernum = await Console.readLineAsync(Messages.INPUT);
      Console.print(Messages.INPUT + usernum);
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

      if (ball == 0 && strike == 0) Console.print(Messages.NOTHING);
      else if (ball > 0 && strike == 0) Console.print(ball + Messages.BALL);
      else if (ball == 0 && strike > 0) Console.print(strike + Messages.STRIKE);
      else Console.print(ball + Messages.BALL + strike + Messages.STRIKE);

      if (strike == 3) {
        Console.print(Messages.END);
        break;
      }
    }
  }
}

export default App;
