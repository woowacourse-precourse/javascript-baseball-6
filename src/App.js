import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.setNum();
    const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    this.vaildation(userNum)
    
  }

  vaildation(userNum) {

    if(userNum.length === 0) {
      throw new Error("[ERROR] 숫자가 입력되지 않았습니다.")
    }

    if (userNum.length !== 3) {
      throw new Error("[ERROR] 3자리의 수를 입력해주세요.")
    }
    
    if(userNum.length !== new Set(Array.from(String(userNum))).size) {
      throw new Error("[ERROR] 중복된 숫자가 입력되었습니다.")
    }

    return true

  }

  setNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

export default App;
