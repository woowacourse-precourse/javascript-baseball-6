import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.answer = this.createAnswer();
  }

  async play() {
    await Console.print("숫자 야구 게임을 시작합니다.");
    await this.start();
  }

  async start() {
    await this.getResult();
    await this.restart();
  }

  async getUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.validateInput(input);
    return input;
  }

  validateInput(input) {
    const parsedNumber = parseInt(input);

    if (isNaN(parsedNumber)) {
      throw Error(`[ERROR] 숫자가 잘못된 형식입니다.`);
    }
    if (input.length !== 3) {
      throw Error(`[ERROR] 3자리 숫자만 입력해주세요.`);
    }
  }

  async getResult() {
    const value = await this.getUserInput();
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < this.answer.length; i++) {
      const index = value.indexOf(this.answer[i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    const strikeMessage = `${strike ? `${strike}스트라이크 ` : ""}`;
    const ballMessage = `${ball ? `${ball}볼 ` : ""}`;
    const nothingMessage = `${!strike && !ball ? "낫싱" : ""}`;

    Console.print(ballMessage + strikeMessage + nothingMessage);
    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return;
    }
    await this.getResult();
  }

  async restart() {
    const input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (input === "1") {
      const newGame = new App();
      await newGame.play();
      return;
    }
    if (input === "2") {
      Console.print("게임 종료");
      return;
    }

    throw new Error("잘못된 값을 입력하셨습니다.");
  }

  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}
const app = new App();
app.play();

export default App;
