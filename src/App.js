import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    await this.alertStart();
    await this.generateRandomNumber();
    await this.continueApp();
  }

  async continueApp() {
    this.strike = 0;
    this.ball = 0;
    this.result = false;
    this.selection = "1";
    await this.selectNumber();
    await this.compareInput();
    await this.printResult();
    const result = await this.isCorrectAnswer();
    if (result) {
      await this.handleEndCase();
      if (this.selection === "2") {
        return;
      } else if (this.selection === "1") {
        await this.generateRandomNumber();
      }
    }
    await this.continueApp();
  }
  async alertStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async generateRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const createdNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(createdNumber)) {
        randomNumber.push(createdNumber);
      }
    }
    this.generatedNumber = [...randomNumber];
  }
  async selectNumber() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    try {
      if (input.length !== 3) {
        throw new Error("[ERROR] 3자리 이외의 입력은 할 수 없습니다.");
      }
      const checkList = [];
      for (const pick of [...input]) {
        if (checkList.includes(pick)) {
          throw new Error("[ERROR] 중복되는 숫자는 입력 불가능합니다.");
        }
        checkList.push(pick);
      }
      this.input = [...checkList];
    } catch (error) {
      throw error;
    }
  }

  // 스트라이크와 볼의 판별을 하는 매서드
  async compareInput() {
    this.input.forEach((checkNumber, index) => {
      const randomNumber = [...this.generatedNumber];
      if (parseInt(checkNumber) === randomNumber[index]) {
        this.strike += 1;
      } else if (randomNumber.includes(parseInt(checkNumber))) {
        this.ball += 1;
      }
    });
  }

  async printResult() {
    if (this.strike === 0 && this.ball === 0) {
      Console.print("낫싱");
      return;
    }
    const resultData = [];
    if (this.ball > 0) resultData.push(this.ball + "볼");
    if (this.strike > 0) resultData.push(this.strike + "스트라이크");
    Console.print(resultData.join(" "));
  }

  async isCorrectAnswer() {
    if (this.strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else if (this.strike < 3) {
      return false;
    }
  }
  async handleEndCase() {
    try {
      this.selection = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (!(this.selection == "1" || this.selection === "2")) {
        throw "[ERROR] 1과 2 이외의 숫자는 입력할 수 없습니다.";
      }
    } catch (err) {
      throw err;
    }
  }
}

const app = new App();
app.play();
export default App;
