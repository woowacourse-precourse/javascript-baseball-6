import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.MIN_VALUE = 1;
    this.MAX_VALUE = 9;
    this.ANSWER_LENGTH = 3;
  }

  async play() {
    try {
      const randomNumber = this.generateRandomNumber(
        this.MIN_VALUE,
        this.MAX_VALUE,
      ).toString();
      let score = [];
      let isInGame = true;

      Console.print("숫자 야구 게임을 시작합니다.");

      while (isInGame) {
        const answer = await Console.readLineAsync("숫자를 입력해주세요. : ");

        if (
          !this.isInteger(answer) ||
          !this.isInRange(answer) ||
          !this.isDigitUnique(answer)
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다. ");
        }

        score = this.getScore(randomNumber, answer);

        if (score[0] === 3) {
          Console.print("3스트라이크");
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          this.restartGame();
          isInGame = false;
        } else if (score[0] === 0 && score[1] === 0) {
          Console.print("낫싱");
        } else if (score[0] > 0 && score[1] === 0) {
          Console.print(score[0] + "스트라이크");
        } else if (score[0] === 0 && score[1] > 0) {
          Console.print(score[1] + "볼");
        } else {
          Console.print(score[1] + "볼 " + score[0] + "스트라이크");
        }
      }
    } catch (error) {
      await Promise.reject(error);
    }
  }

  getScore(randomNumber, answer) {
    const randomNumberArray = randomNumber.split("");
    const answerArray = answer.split("");
    const score = [0, 0];

    answerArray.forEach((number, index) => {
      if (number === randomNumberArray[index]) {
        score[0]++;
      } else if (randomNumberArray.includes(number)) {
        score[1]++;
      }
    });

    return score;
  }

  isDigitUnique(number) {
    const numberMap = number.toString().split("").map(Number);
    const set = new Set(numberMap);

    return set.size === numberMap.length && !number.toString().includes(0);
  }

  isInteger(string) {
    return Number.isInteger(Number(string));
  }

  isInRange(number) {
    return number.length === this.ANSWER_LENGTH;
  }

  generateRandomNumber(min, max) {
    const numbers = [];
    while (numbers.length < this.ANSWER_LENGTH) {
      const number = Random.pickNumberInRange(this.MIN_VALUE, this.MAX_VALUE);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers.join("");
  }

  async restartGame() {
    try {
      const request = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      );
      if (request === "1") {
        this.play();
      } else if (request !== "2") {
        throw new Error("[ERROR] 잘못된 형식입니다.\n");
      }
    } catch (error) {
      await Promise.reject(error);
    }
  }
}

const app = new App();
app.play();

export default App;
