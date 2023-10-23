import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { Messages } from "./Messages";

const computers = [];
class App {
  play() {
    // 0. 게임 시작 메세지 출력
    Console.print(Messages.START);

    // 1. 컴퓨터의 숫자 랜덤입력
    while (computers.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!computers.includes(number)) {
        computers.push(number);
      }
    }
    const COMPUTER = computers.join("");
    Console.print(COMPUTER);
  }
}

const app = new App();
app.play();

export default App;
