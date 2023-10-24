import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor(input, answer, gameContinue = 0) {
    this.input = input;
    this.answer = answer;
    this.gameContinue = gameContinue;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.getNumber();
    while (this.gameContinue === 0) await this.inputNumber();
  }

  async getNumber() {
    this.answer = MissionUtils.Random.pickNumberInRange(100, 999);
    return this.answer;
  }

  async inputNumber() {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      await this.settingNumber(number);
    if (!number) {
      throw new Error("[Error] 숫자 입력이 들어오지 않았습니다.");
      return;
    }
  }
  async settingNumber(number) {
    if (number < 0) {
      throw new Error("[Error] 숫자는 음수일 수 없습니다.");
    }
    if (number.length !== 3) {
      throw new Error("[ERROR] 숫자는 3자리 수여야 합니다.");
    }
    if (!/^\d{3}$/.test(number)) {
      throw new Error("[ERROR] 입력은 숫자 형식이어야 합니다.");
    }

    this.input = number;
    await Console.print(this.isIncluded());
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
