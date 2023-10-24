import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.computerRandomNums = [];
  }

  makeComputerRandomNums() {
    while (this.computerRandomNums.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerRandomNums.includes(number))
        this.computerRandomNums.push(number);
    }
  }

  async play() {
    this.makeComputerRandomNums();
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(this.computerRandomNums);

    while (true) {
      const number = await Console.readLineAsync("숫자를 입력해주세요: ");
      const answer = this.checkStrikeNBall(number);
      Console.print(answer);

      if (answer === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        const isRestart = Number(await Console.readLineAsync(""));
        if (isRestart === 1) {
          this.computerRandomNums = Random.pickUniqueNumbersInRange(1, 9, 3);
        } else break;
      }
    }
  }

  checkStrikeNBall(number) {
    const check = {
      ball: 0,
      strike: 0,
    };

    for (let i = 0; i < number.length; i++) {
      const num = Number(number[i]);
      const index = this.computerRandomNums.indexOf(num);

      if (index === -1) continue;
      else if (index > -1) {
        if (index === i) check.strike += 1;
        else check.ball += 1;
      }
    }

    return this.makeMessage(check);
  }

  makeMessage({ ball, strike }) {
    if (ball === 0 && strike === 0) return "낫싱";
    if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
    if (ball > 0) return `${ball}볼`;
    else return `${strike}스트라이크`;
  }
}

const app = new App();
app.play();

export default App;
