import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor(input, answer) {
    this.input = input;
    this.answer = answer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.setInputNumber();
    await this.getNumber();
    await Console.print(this.isIncluded());
  }

  async getNumber() {
    this.answer = MissionUtils.Random.pickNumberInRange(100, 999);
    return this.answer;
  }

  async inputNumber() {
    try {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      await this.settingNumber(number);
    } catch (error) {
      throw new Error("[Error] 숫자 입력이 들어오지 않았습니다.");
    }
  }
  }

  async isIncluded() {
    const inputArr = this.input.toString().split("");
    const answerArr = this.answer.toString().split("");
    try {
      const isInclude = answerArr.map((item, index) => {
        return inputArr.includes(item);
      });
      return isInclude.filter((x) => x).length;
    } catch (error) {
      console.log(error);
    }
  }
}

const app = new App();
// app.play().then((answer) => Console.print(answer));
app.play();

export default App;
