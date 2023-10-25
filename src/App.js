const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumbers = [];
    this.setComputerNumbers();
  }

  setComputerNumbers() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  checkGuess(userInput) {
    let strikes = 0;
    let balls = 0;

    userInput.split("").forEach((num, idx) => {
      if (this.computerNumbers[idx] === Number(num)) {
        strikes++;
      } else if (this.computerNumbers.includes(Number(num))) {
        balls++;
      }
    });

    if (strikes === 0 && balls === 0) return "낫싱";
    if (strikes === 3) return "3스트라이크";
    return `${balls ? `${balls}볼` : ""} ${
      strikes ? `${strikes}스트라이크` : ""
    }`.trim();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      try {
        if (
          userInput.length !== 3 ||
          !userInput.match(/^[1-9]+$/) ||
          new Set(userInput).size !== 3
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        const result = this.checkGuess(userInput);
        MissionUtils.Console.print(result);

        if (result === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          const restartInput = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );

          if (restartInput === "1") {
            this.setComputerNumbers();
          } else if (restartInput === "2") {
            return;
          } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }
        }
      } catch (error) {
        MissionUtils.Console.print("[ERROR] " + error.message);
        throw error; // 예외를 다시 던짐
      }
    }
  }
}

const app = new App();
app.play();
export default App;
