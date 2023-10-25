import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    let isQuit = false;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (!isQuit) {
      await this.game();
      let quit = Number(
        await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작할면 1, 종료하려면 2를 입력하세요.\n"
        )
      );
      if (quit == 2) {
        isQuit = true;
      } else if (quit != 1) {
        throw new Error("[ERROR]");
      }
    }
    MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
  }

  async game() {
    const answer = this.getAnswer();
    let isCorrect = false;
    while (!isCorrect) {
      const guess = await this.getGuess();
      const { ball, strike } = this.getResult(answer, guess);
      MissionUtils.Console.print(this.printResult(ball, strike));
      if (strike == 3) {
        isCorrect = true;
      }
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  getAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getGuess() {
    let guess = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (!this.isValidGuess(guess)) {
      throw new Error("[ERROR]");
    }
    return guess.split("").map((num) => Number(num));
  }

  isValidGuess(guess) {
    let isUnique = guess.split("").every((num, index, array) => {
      return num >= 1 && num <= 9 && array.filter((n) => n === num).length == 1;
    });
    return guess.length == 3 && isUnique;
  }

  getResult(answer, guess) {
    let strike = 0;
    let ball = 0;
    guess.forEach((num, idx) => {
      if (guess[idx] == answer[idx]) {
        strike++;
      } else if (answer.includes(guess[idx])) {
        ball++;
      }
    });
    return { ball, strike };
  }
  printResult(ball, strike) {
    if (ball == 0 && strike == 0) {
      return "낫싱";
    }
    return (ball ? ball + "볼 " : "") + (strike ? strike + "스트라이크" : "");
  }
}

export default App;
