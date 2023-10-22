import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.is_correct = false; //strike 3이면 true
    this.is_end = false; //IS_CORRECT가 true일 때 2의 값을 가지면 true
  }
  //사용자 숫자 입력
  async getUserNumber() {
    let user = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    user.split("").forEach((num, index) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      if (user.includes(num) && user.indexOf(num) !== index) {
        throw new Error("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
      }

      if (num < 1 || num > 9) {
        throw new Error("[ERROR] 1~9 사이의 숫자만 입력 가능합니다.");
      }

      if (user.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자만 입력 가능합니다.");
      }
    });

    //parse to Array
    user = user.split("").map((num) => parseInt(num));

    return user;
  }

  //컴퓨터 숫자 생성
  getRandomNumber() {
    let com = [];
    while (com.length < 3) {
      const TEMPNUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!com.includes(TEMPNUM)) {
        //중복 검사
        com.push(TEMPNUM);
      }
    }

    return com;
  }

  //게임 진행 출력
  printText(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      this.is_correct = true;
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

  //숫자 검사
  compareNumber(com, user) {
    //is_correct change
    //com [ 1 , 2, 3 ] user [ 1 , 2 , 3]

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

  //게임 진행
  async playGame() {
    let com = this.getRandomNumber();
    while (!this.is_end) {
      let user = await this.getUserNumber();

      // console.log("com" + com);
      // console.log("user" + user);
      this.compareNumber(com, user);
      if (this.is_correct) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let res = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (res === "1") {
          this.is_end = false;
          this.is_correct = false;

          com = this.getRandomNumber();
        } else if (res === "2") {
          this.is_end = true;
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

const app = new App();
app.play();
