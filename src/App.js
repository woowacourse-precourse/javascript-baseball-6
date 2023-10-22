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
    console.log(comNum);
    this.comNum = comNum;
  }
}
class User {
  constructor() {
    this.userNum;
    this.getNumber();
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
      console.log(user);
      MissionUtils.Console.print(user);
      this.userNum = user;
    } catch (error) {}
  }
}

class App {
  async play() {
    let com = new Com();
    let user = new User();
  }
}
const app = new App();
app.play();

export default App;
