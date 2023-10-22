import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const answer = this.getRandNum();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const isValid = this.validateInput(input);
    if (isValid) console.log(input);
    else throw new Error("[ERROR]");
  }

  getRandNum() {
    const num = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return num.join("");
  }

  validateInput(input) {
    if (!Number(input)) return false;
    if (input.length !== 3) return false;
    if (this.containsDupe(input)) return false;
    return true;
  }

  containsDupe(input) {
    const arr = input.toString().split("");
    const set = new Set(arr);
    if (arr.length !== set.size) return true;
    return false;
  }
}

const app = new App();
app.play();

export default App;
