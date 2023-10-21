import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.MIN_VALUE = 1;
    this.MAX_VALUE = 999;
  }

  async play() {
    /*
    const randomNumber = Random.pickNumberInRange(
      this.MIN_VALUE,
      this.MAX_VALUE,
    ).toString();*/
    const randomNumber = "589";
    Console.print("숫자 야구 게임을 시작합니다.");

    this.guessNumber(randomNumber);
  }

  async guessNumber(randomNumber) {
    let strikeCounts = 0;
    let ballCounts = 0;
    let isInGame = true;
    while (isInGame) {
      try {
        const number = await Console.readLineAsync("숫자를 입력해주세요. : ");

        if (!this.isInteger(number) || !this.isInRange(number)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        let strikeCounts = this.getStrikeCounts(randomNumber, number);
        let ballCounts = this.getBallCounts(randomNumber, number);

        if (strikeCounts === 3) {
          Console.print("3스트라이크");
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          this.restartGame();
          isInGame = false;
        } else if (strikeCounts === 0 && ballCounts === 0) {
          Console.print("낫싱");
        } else if (strikeCounts > 0 && ballCounts === 0) {
          Console.print(strikeCounts + "스트라이크");
        } else if (strikeCounts === 0 && ballCounts > 0) {
          Console.print(ballCounts + "볼");
        } else {
          Console.print(ballCounts + "볼 " + strikeCounts + "스트라이크");
        }
      } catch (error) {
        Console.print(error);
        isInGame = false;
      }
    }
  }

  getStrikeCounts(n, m) {
    let strikeCounts = 0;

    n.split("").forEach((number, index) => {
      if (n[index] === m[index]) {
        strikeCounts++;
      }
    });

    return strikeCounts;
  }

  getBallCounts(n, m) {
    let ballCounts = 0;
    let randomNumberArray = n.split("");
    let numberArray = m.split("");
    let arr = [];
    const strikeCounts = this.getStrikeCounts(n, m);

    arr = arr.concat(
      numberArray.filter(
        (number, index) =>
          !arr.includes(number) &&
          randomNumberArray.includes(number) &&
          numberArray[index] !== randomNumberArray[index],
      ),
    );

    ballCounts = arr.length;

    return ballCounts;
  }

  isInteger(string) {
    return Number.isInteger(Number(string));
  }

  isInRange(n) {
    return n <= this.MAX_VALUE && n >= this.MIN_VALUE;
  }

  async restartGame() {
    try {
      const request = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      );
      if (request === "1") {
        this.play();
      } else if (request !== "2") {
        throw new Error(
          "[ERROR] 게임 재시작 여부 확인을 위해 1이나 2를 입력하세요.\n",
        );
      }
    } catch (error) {
      Console.print(error);
    }
  }
}

const app = new App();
app.play();

export default App;
