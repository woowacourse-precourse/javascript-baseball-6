import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameStart();
  }

  async gameStart() {
    const computer = await this.generateRandomNumbers();
    const user = await this.getUserNumbers();
    if (user !== undefined) await this.printResult(user, computer);
  }

  async generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNumbers() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요: "
      );
      return this.checkUserInput(userInput);
    } catch (error) {
      throw error;
    }
  }

  checkUserInput(userInput) {
    const user = userInput.split("").map((e) => {
      const parsed = parseInt(e);
      if (isNaN(parsed)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      return parsed;
    });

    if (user.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return user;
  }

  async printResult(user, computer) {
    const res = this.compare(user, computer);

    if (res.nothing) {
      await MissionUtils.Console.print("낫싱");
      const newUser = await this.getUserNumbers();
      await this.printResult(newUser, computer);
    } else if (res.strike === 3) {
      await MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      await this.askNewGame();
    } else {
      let printRes = "";
      if (res.ball > 0) printRes += `${res.ball}볼 `;
      if (res.strike > 0) printRes += `${res.strike}스트라이크`;
      if (res.nothing === 1) printRes += `낫싱`;
      await MissionUtils.Console.print(printRes);
      const newUser = await this.getUserNumbers();
      await this.printResult(newUser, computer);
    }
  }

  compare(user, computer) {
    const count = { ball: 0, strike: 0, nothing: 0 };
    user.forEach((userNumber, index) => {
      computer.forEach((computerNumber) => {
        if (userNumber === computerNumber) {
          count.ball++;
        }
      });
      if (userNumber === computer[index]) {
        count.strike++;
      }
    });
    count.nothing = count.ball === 0 ? 1 : 0;
    count.ball -= count.strike;

    return count;
  }

  async askNewGame() {
    let userInput;
    try {
      userInput = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
    } catch (error) {
      throw error;
    }
    if (userInput === "1") {
      await this.gameStart();
    } else if (userInput === "2") {
      await MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default App;
