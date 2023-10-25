import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getRandomNum() {
    let computerNum = [];
    let tempNum = 0;
    while (computerNum.length < 3) {
      tempNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(tempNum)) {
        computerNum.push(tempNum);
      }
    }
    return computerNum;
  }

  async getUserNum() {
    let userNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    userNum.split("").forEach((num, index) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }

      if (num < 1 || num > 9) {
        throw new Error("[ERROR] 1 ~ 9 사이의 숫자를 입력해 주세요.");
      }

      if (userNum.includes(num) && userNum.indexOf(num) !== index) {
        throw new Error("[ERROR] 중복이 아닌 숫자를 입력해 주세요.");
      }

      if (userNum.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자를 입력해 주세요.");
      }
    });

    userNum = userNum.split("").map((num) => {
      return Number(num);
    });

    return userNum;
  }

  constructor() {
    this.win = false;
    this.end = false;
  }

  resultPrint(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      this.win = true;
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

  checkNum(computer, user) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computer[i] === user[i]) {
        strike++;
      }
      if (computer.includes(user[i]) && computer[i] !== user[i]) {
        ball++;
      }
    }

    this.resultPrint(strike, ball);
  }

  async gameRestart() {
    let computerNum = this.getRandomNum();
    while (!this.end) {
      let userNum = await this.getUserNum();
      this.checkNum(computerNum, userNum);

      if (this.win) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let userRes = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );

        if (userRes === "1") {
          this.end = false;
          this.win = false;

          computerNum = this.getRandomNum();
        } else if (userRes === "2") {
          this.end = true;
        } else {
          throw new Error("[ERROR] 1 혹은 2를 입력해 주세요.");
        }
      }
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameRestart();
  }
}

export default App;
