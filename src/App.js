class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    while (true) {
      const targetNumbers = this.generateRandomNumbers();
      let attempts = 0;

      while (true) {
        const userGuess = await this.getUserGuess();
        attempts++;

        if (userGuess.length !== 3 || !/^\d{3}$/.test(userGuess)) {
          throw new Error("[ERROR] 유효한 3자리 숫자를 입력하세요.");
        }

        const result = this.compareNumbers(targetNumbers, userGuess);
        console.log(result);

        if (result === "3스트라이크") {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }

      const restartOption = await this.promptRestart();
      if (restartOption === "2") {
        console.log("게임을 종료합니다.");
        break;
      }
    }
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const random = Math.floor(Math.random() * 9) + 1;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers.join("");
  }

  async getUserGuess() {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      readline.question("서로 다른 3자리의 수를 입력하세요: ", (input) => {
        readline.close();
        resolve(input);
      });
    });
  }

  compareNumbers(target, guess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < target.length; i++) {
      if (target[i] === guess[i]) {
        strikes++;
      } else if (target.includes(guess[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes === 3) {
      return "3스트라이크";
    } else {
      return `${balls > 0 ? balls + "볼" : ""} ${
        strikes > 0 ? strikes + "스트라이크" : ""
      }`;
    }
  }

  async promptRestart() {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      readline.question(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ",
        (input) => {
          readline.close();
          resolve(input);
        }
      );
    });
  }
}

export default App;
