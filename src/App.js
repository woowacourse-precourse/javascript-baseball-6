import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.isCorrect = false;
    this.isEnd = false;
  }

  async getUserNumber() {
    let userNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    userNum.split("").forEach((num, index) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      if (userNum.includes(num) && userNum.indexOf(num) !== index) {
        throw new Error("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
      }

      if (num < 1 || num > 9) {
        throw new Error("[ERROR] 1~9 사이의 숫자만 입력 가능합니다.");
      }

      if (userNum.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자만 입력 가능합니다.");
      }
    });

    userNum = userNum.split("").map((num) => {
      return Number(num);
    });

    return userNum;
  }

  getRandomNumber() {
    let com = [];
    let tempNum = 0;
    while (com.length < 3) {
      tempNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!com.includes(tempNum)) {
        com.push(tempNum);
      }
    }

    return com;
  }

  printText(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      this.isCorrect = true;
    }

    if (strike === 2) {
      MissionUtils.Console.print("2스트라이크");
    }

    if (strike === 1) {
      if (ball === 2) {
        MissionUtils.Console.print("2볼 1스트라이크");
      }

      if (ball === 1) {
        MissionUtils.Console.print("1볼 1스트라이크");
      }

      if (ball === 0) {
        MissionUtils.Console.print("1스트라이크");
      }
    }

    if (strike === 0) {
      if (ball === 3) {
        MissionUtils.Console.print("3볼");
      }

      if (ball === 2) {
        MissionUtils.Console.print("2볼");
      }

      if (ball === 1) {
        MissionUtils.Console.print("1볼");
      }
      if (ball === 0) {
        MissionUtils.Console.print("낫싱");
      }
    }
  }

  compareNumber(com, user) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (com[i] === user[i]) {
        strike++;
      }
      if (com.includes(user[i]) && com[i] !== user[i]) {
        ball++;
      }
    }

    this.printText(strike, ball);
  }

  async playGame() {
    let comNum = this.getRandomNumber();
    while (!this.isEnd) {
      let userNum = await this.getUserNumber();
      this.compareNumber(comNum, userNum);

      if (this.isCorrect) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let res = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );

        if (res === "1") {
          this.isEnd = false;
          this.isCorrect = false;

          comNum = this.getRandomNumber();
        } else if (res === "2") {
          this.isEnd = true;
        } else {
          throw new Error("[ERROR] 1 또는 2만 입력해주세요.");
        }
      }
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.playGame();
  }
}

export default App;
