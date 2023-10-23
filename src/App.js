import { MissionUtils } from "@woowacourse/mission-utils";

class Com {
  constructor() {
    const comNum = [];
    while (comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!comNum.includes(number)) {
        comNum.push(number);
      }
    }
    // console.log(comNum);
    this.comNum = comNum;
  }
}
class User {
  constructor() {
    this.userNum = [];
  }
  async getNumber() {
    try {
      let user = [];
      let username = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      if (username.length == 3) {
        for (let i = 0; i < username.length; i++) {
          user.push(Number(username[i]));
        }
      }

      this.userNum = user;
    } catch (error) {}
  }
}

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    let newGame = 1;
    while (newGame % 2) {
      //1일때 실행, 2일때 종료
      let com = new Com();
      let user = new User();
      await user.getNumber();
      newGame =await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
    }
  }
}
const app = new App();
await app.play();

export default App;
