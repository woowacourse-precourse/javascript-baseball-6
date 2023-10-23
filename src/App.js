import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strikes = [];
    this.isWin = false;
  }

  async play() {
    let restart = true;
    while (restart) {
      restart = false;
      this.strikes = [];
      this.isWin = false;
      await this.playGame().then(() => {});
      const answerRestart = await this.askRestart();
      if (answerRestart == "1") {
        restart = true;
      } else if (answerRestart == "2") {
        break;
      }
    }
  }

  async playGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.strikes = [];
    this.strikes = this.generateStrikes();
    Console.print(this.strikes);
    while (!this.isWin) {
      await this.playInning().then(message => {
        Console.print(message);
        if (message == "3스트라이크") {
          this.isWin = true;
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          return new Promise(resolve => {
            resolve();
          });
        }
      });
    }
  }

  generateStrikes() {
    const numberArray = [];
    while (numberArray.length < 3) {
      let rn = this.generateRandomNumber();
      if (numberArray.includes(rn)) {
        continue;
      } else {
        numberArray.push(rn);
      }
    }
    return numberArray;
  }

  generateRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9); // 1~9 중 랜덤 숫자
    return randomNumber;
  }

  playInning() {
    return new Promise(resolve => {
      // 입력을 받을 때까지 기다리기 위한 프라미스
      this.getGuess()
        .then(guess => {
          const [strikeCount, ballCount] = this.evaluateGuess(guess);
          let message = "";
          if (ballCount > 0) {
            message += `${ballCount}볼`;
          }
          if (strikeCount > 0) {
            message += `${message ? " " : ""}${strikeCount}스트라이크`;
          }
          if (!message) {
            message = "낫싱";
          }
          resolve(message);
        })
        .catch(error => {
          Console.print(error.message);
        });
    });
  }

  async getGuess() {
    return new Promise((resolve, reject) => {
      // 예외처리를 위한 프라미스
      Console.readLineAsync("숫자를 입력해주세요 : ").then(userInput => {
        try {
          this.isValidGuess(userInput);
          resolve(userInput);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  isValidGuess(inputNumber) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(inputNumber)) {
      throw new Error("Invalid guess");
    }
  }

  evaluateGuess(guessNumbers) {
    const numbers = [...guessNumbers].map(str => Number(str));
    Console.print(numbers);
    let strikeCount = 0;
    let ballCount = 0;
    numbers.forEach((number, index) => {
      if (number == this.strikes[index]) {
        strikeCount += 1;
      } else {
        if (this.strikes.includes(number)) {
          ballCount += 1;
        }
      }
    });
    return [strikeCount, ballCount];
  }

  async askRestart() {
    try {
      const userInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      const regex = /^[1-2]{1}$/;
      if (!regex.test(userInput)) {
        throw new Error("Invalid input");
      }
      return userInput;
    } catch (error) {
      console.error(error.message);
    }
  }
}

const app = new App();
app.play();

export default App;
