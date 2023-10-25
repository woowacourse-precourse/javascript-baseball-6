import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      Console.print("숫자 야구 게임을 시작합니다.");
      let isRunning = "1";

      while (isRunning === "1") {
        const computerNum = await this.generateCompNumber();

        let countBall = 0;
        let countStrike = 0;

        while (countStrike !== 3) {
          const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
          await this.isValidInput(input);
          const userNum = input.split("").map(Number);

          countBall = 0;
          countStrike = 0;

          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (computerNum[i] === userNum[j] && i === j) {
                countStrike++;
              } else if (computerNum[i] === userNum[j] && i !== j) {
                countBall++;
              }
            }
          }

          if (countBall === 0 && countStrike === 0) {
            Console.print("낫싱");
          } else if (countBall !== 0 && countStrike !== 0) {
            Console.print(`${countBall}볼 ${countStrike}스트라이크`);
          } else if (countBall === 0) {
            Console.print(`${countStrike}스트라이크`);
          } else if (countStrike === 0) {
            Console.print(`${countBall}볼`);
          }
        }
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        isRunning = await this.isReplaying();
      }
    } catch (err) {
      Console.print(err);
      return Promise.reject(err);
    }
  }

  async isValidInput(input) {
    // 길이가 3인지 확인
    if (input.length !== 3) {
      throw new Error("[ERROR] Enter 3 digit numbers");
    }

    // 서로 다른 숫자인지 확인
    let diffNum = 0;
    for (let i = 0; i < 2; i++) {
      if (input[i] === input[i + 1]) {
        diffNum++;
      }
    }
    if (diffNum > 0) {
      throw new Error("[ERROR] Enter 3 different numbers");
    }

    // 숫자만 입력했는지 확인
    if (!/^[0-9]+$/.test(input)) {
      throw new Error("[ERROR] Enter only numbers");
    }
  }

  async generateCompNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async isReplaying() {
    return await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
  }
}

const app = new App();
app.play();

export default App;
