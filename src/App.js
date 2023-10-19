import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = this.createComNum();
    MissionUtils.Console.print(computerNumber);
  }

  //사용자가 입력한 숫자를 반환하는 메서드
  question() {}

  //서로다른 무작위 3개의 수가 들어있는 배열을 반환
  createComNum() {
    const computerNumArray = [];
    while (computerNumArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumArray.includes(number)) {
        computerNumArray.push(number);
      }
    }
    return computerNumArray;
  }
}

const app = new App();
app.play();

export default App;
