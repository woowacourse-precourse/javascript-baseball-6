import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play(numberPlayer) {
    numberPlayer = numberPlayer + "";
    const arrayPlayer = [...numberPlayer];

    console.log("숫자 야구 게임을 시작합니다.");
    Console.readLineAsync("숫자를 입력해주세요.");

    let computerPlayer = [];
    computerPlayer = arrayPlayer.map((v) => parseInt(v));
    console.log(computerPlayer);

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);

    let numberStrike = computer.filter(
      (v, i) => computerPlayer.indexOf(v) === i
    );
    let numberBall = computer.filter((v) => computerPlayer.includes(v));

    Console.print(
      `${numberBall.length - numberStrike.length}볼 ${
        numberStrike.length
      }스트라이크`
    );
  }
}

const app = new App();
app.play(123);

export default App;
