import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    try {
      const randomNumber = this.generateRandomNumber();
      let score = [];
      let endGame = false;

      while (!endGame) {
        const answer = await Console.readLineAsync("숫자를 입력해주세요. : ");

        if (
          !Number.isInteger(Number(answer)) ||
          answer.length !== 3 ||
          answer.includes(0)
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다. ");
        }
        score = this.getScore(randomNumber, answer);

        if (score[0] === 3) {
          Console.print("3스트라이크");
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          this.restart();
          endGame = true;
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

  generateRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers.join("").toString();
  }
  getScore(randomNumber, answer) {
    const COMPUTER_NUM = randomNumber.split("");
    const ANSWER_NUM = answer.split("");
    const score = [0, 0];

    ANSWER_NUM.forEach((num, idx) => {
      if (num === COMPUTER_NUM[idx]) {
        score[0]++;
      } else if (COMPUTER_NUM.includes(num)) {
        score[1]++;
      }
    });

    return score;
  }
  async restart() {
    try {
      const MESSAGE = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );

      if (MESSAGE === "1") {
        this.play();
      } else if (MESSAGE !== "2") {
        throw new Error("[ERROR] 잘못된 형식입니다.\n");
      }
    } catch (error) {
      await Promise.reject(error);
    }
  }
}

export default App;
