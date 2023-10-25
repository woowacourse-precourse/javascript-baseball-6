import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        const game = new Game();
        await game.playGame();
    }
}

class Game {
    constructor() {
        this.randomNumber = this.generateRandomNumber();
    }

    generateRandomNumber() {
        let randomNumber = "";
        while (randomNumber.length < 3) {
            const digit = MissionUtils.Random.pickNumberInRange(1, 9).toString();
            if (!randomNumber.includes(digit)) {
                randomNumber += digit;
            }
        }
        return randomNumber;
    }

    async getInput() {
        while (true) {
            const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
            if (!/^\d{3}$/.test(input)) {
              // 3자리 숫자가 아닌 경우 throw 문을 사용하여 에러 발생
              throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }
          return input;
      
        }
    }

    compareNumbers(userInput) {
      let strikes = 0;
      let balls = 0;

      for (let i = 0; i < 3; i++) {
          if (this.randomNumber[i] === userInput[i]) {
              strikes++;
          } else if (this.randomNumber.includes(userInput[i])) {
              balls++;
          }
      }

      if (strikes === 3) {
          MissionUtils.Console.print("3스트라이크");
          MissionUtils.Console.print("3개의 숫자를 맞추셨습니다. 게임 종료");
          return true;
      } else {
          const message = this.generateMessage(strikes, balls);
          MissionUtils.Console.print(message);
          return false;
      }
  }

  generateMessage(strikeCount, ballCount) {
      let message = "";
      if (ballCount) {
          message += `${ballCount}볼`;
      }
      if (strikeCount) {
          if (ballCount) {
              message += " ";
          }
          message += `${strikeCount}스트라이크`;
      }
      if (message.length === 0) {
          message += "낫싱";
      }
      return message;
  }


    async playGame() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

        while (true) {
            let userInput = await this.getInput();
            if (this.compareNumbers(userInput)) {
                break;
            }
        }

        const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
        if (choice === "1") {
            this.randomNumber = this.generateRandomNumber();
            await this.playGame(); 
        } else if (choice === "2") {
            MissionUtils.Console.print("게임을 종료합니다.");
        } else {
            MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다. 게임을 종료합니다.");
        }
    }
}

const app = new App();
app.play();
