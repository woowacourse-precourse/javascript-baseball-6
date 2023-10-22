import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.is_correct = false; //strike 3이면 true
    this.is_end = false; //IS_CORRECT가 true일 때 2의 값을 가지면 true
  }
  //사용자 숫자 입력
  async getUserNumber() {
    let user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

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

  //숫자 검사
  compareNumber(com, user) {
    //is_correct change
  }

  //게임 진행
  async playGame() {
    let com = this.getRandomNumber();
    while (!this.is_end) {
      let user = await this.getUserNumber();

      console.log("com" + com);
      console.log("user" + user);
      this.compareNumber(com, user);
      if (this.is_correct) {
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
