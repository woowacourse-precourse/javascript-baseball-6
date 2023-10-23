import * as MissionUtils from "@woowacourse/mission-utils";

export default class App {
  async play() {
    // console.log("게임 시작");
    MissionUtils.Console.print("게임 시작");
    // this.handleSubmitInput();
    this.getUsername();
  }

  async getUsername() {
    try {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      const username = await MissionUtils.Console.readLineAsync(
        "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
      );
      MissionUtils.Console.print(computer);
      MissionUtils.Console.print(username);
    } catch (error) {
      // reject 되는 경우
      MissionUtils.Console.print(error);
    }
  }
}

const app = new App();
app.play();
