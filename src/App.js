import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const answerNumber = this.createAnswerNumber();
    const inputNumber = await this.createInputNumber();
    console.log(answerNumber);
    this.compareNumber(answerNumber, inputNumber);
  }

  //사용자가 입력한 숫자에 대해 유효성 검사를 진행하고 반환하는 메서드
  async createInputNumber() {
    let inputNumArray = [];
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const userInputSet = new Set(userInput);
      inputNumArray = userInput.split("").map(Number);
      if (
        inputNumArray.length !== userInputSet.size ||
        inputNumArray.length !== 3 ||
        Number.isNaN(parseInt(userInput))
      ) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else {
        return inputNumArray;
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  //서로다른 무작위 3개의 수가 들어있는 배열을 반환
  createAnswerNumber() {
    const answerNumArray = [];
    while (answerNumArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answerNumArray.includes(number)) {
        answerNumArray.push(number);
      }
    }
    return answerNumArray;
  }

  compareNumber(answer, input) {
    let strike = 0;
    let ball = 0;
    
}

const app = new App();
app.play();

export default App;
