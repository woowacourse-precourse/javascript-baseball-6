import { Console, Random } from "@woowacourse/mission-utils";
class App {
  computer = [];

  constructor() {
    this.initComputer();
  }

  initComputer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(newNumber)) {
        this.computer.push(newNumber);
      }
    }
  }

  async play() {
    this.initComputer();
    // console.log(`answer: ${this.computer}`);
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const inputToNumber = [...input].map((char) => +char);
      const result = this.computer.reduce(
        (prevCount, number, index) => {
          if (inputToNumber[index] === number) {
            return { ...prevCount, strike: prevCount.strike + 1 };
          }

          if (inputToNumber.includes(number)) {
            return { ...prevCount, ball: prevCount.ball + 1 };
          }

          return prevCount;
        },
        { strike: 0, ball: 0 }
      );

      // Console.print(`strike: ${result.strike} ball:${result.ball}`);

      const resultMessage = getResultMessage({
        strike: result.strike,
        ball: result.ball,
      });
      Console.print(resultMessage);

      if (result.strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }

    const command = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (command === "1") {
      this.play();
      return;
    }

    if (command === "2") {
      return;
    }

    throw new Error("[ERROR] : 잘못된 입력입니다!");
  }
}

function getResultMessage({ strike, ball }) {
  if (strike === 0 && ball === 0) {
    return "낫싱";
  }

  return `${getBallMessage(ball)}${getStrikeMessage(strike)}`;
}

function getBallMessage(ball) {
  return ball ? `${ball}볼 ` : "";
}

function getStrikeMessage(strike) {
  return strike ? `${strike}스트라이크 ` : "";
}

export default App;
