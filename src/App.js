import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = [];
    this.generateComputerNumbers();
  }

  generateComputerNumbers() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    while (true) {
      const userNumbers = await this.getUserInput();

      if (userNumbers.length !== 3) throw new Error("[ERROR]");

      const result = this.checkUserInput(userNumbers);

      if (result.strikes === 3) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restart = await this.askForRestart();

        if (restart === "2") break;

        this.resetGame();
        continue;
      }

      let outputMessage = "";

      if (result.balls > 0) outputMessage += `${result.balls}볼 `;

      if (result.strikes > 0) outputMessage += `${result.strikes}스트라이크`;

      if (outputMessage === "") outputMessage = "낫싱";

      MissionUtils.Console.print(outputMessage.trim());
    }

    return true;
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return input.split("").map(Number);
  }

  checkUserInput(userNumbers) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < userNumbers.length; i++) {
      if (this.computer.includes(userNumbers[i])) {
        this.computer.indexOf(userNumbers[i]) === i ? strikes++ : balls++;
      }
    }

    return { balls, strikes };
  }

  async askForRestart() {
    return await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 '1', 종료하려면 '2'를 입력하세요."
    );
  }

  resetGame() {
    this.computer.length = 0;
    this.generateComputerNumbers();
  }
}
export default App;
