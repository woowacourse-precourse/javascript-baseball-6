import readline from "readline";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    while (true) {
      const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      let randomNumber = "";
      for (let i = 0; i < 3; i++) {
        const getRandom = Math.floor(Math.random() * 9) + 1;
        randomNumber += getRandom;
      }

      while (true) {
        const input = await this.getInput(r1);
        if (!this.isValidInput(input)) {
          console.error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else {
          const result = this.guess(input, randomNumber);

          if (result === 3) {
            console.log(`${result}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
            const restart = await this.askToRestart(r1);
            r1.close();
            if (restart === "1") {
              break; // 게임 재시작
            } else if (restart === "2") {
              return; // 게임 종료
            }
          }
        }
      }
    }
  }

  async getInput(rl) {
    return new Promise((resolve) => {
      const getInputRecursive = () => {
        rl.question("숫자를 입력해주세요 : ", (input) => {
          if (!this.isValidInput(input)) {
            console.log("[ERROR] 숫자가 잘못된 형식입니다.");
            getInputRecursive();
          } else {
            resolve(input);
          }
        });
      };
      getInputRecursive();
    });
  }

  async askToRestart(rl) {
    return new Promise((resolve) => {
      rl.question(
        "게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요: ",
        resolve
      );
    });
  }

  isValidInput(input) {
    return /^\d{3}$/.test(input);
  }

  guess(input, answer) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < answer.length; i++) {
      if (input[i] === answer[i]) {
        strikeCount++;
      } else if (answer.includes(input[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 0 && ballCount === 0) {
      console.log("낫싱");
    } else {
      const result = [];
      if (strikeCount > 0) {
        result.push(`${strikeCount}스트라이크`);
      }
      if (ballCount > 0) {
        result.push(`${ballCount}볼`);
      }
      console.log(result.join(" "));
    }
    return strikeCount;
  }
}

export default App;

const app = new App();
app.play();
