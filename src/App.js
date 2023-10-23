import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { NOTHING, STRIKE, BALL, END_OR_RESET_MESSAGE } from "./Utills.js";
class App {
  constructor() {
    this.init();
  }
//비동기를 많이 배웁니다
  init() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = this.makeAnswer();
  }
  makeAnswer() {
    let answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
  async getNumberInput() {
    let numberInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const result = this.validateInput(numberInput);
    if (result != "통과") return result;
    return numberInput.split("")
  }

  async checkAnswer() {
    
  }
  async play() {
    let strikeResult = 0;
    let ballResult = 0;
    try {
      // let numberInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      // const result = this.validateInput(numberInput);
      // if (result != "통과") throw new Error(result);
      // numberInput = numberInput.split("");
      let numberInput = await this.getNumberInput();
      if (!Array.isArray(numberInput)) throw new Error(numberInput)
      for (let i = 0; i < this.answer.length; i++) {
        if (this.answer[i] == numberInput[i]) {
          strikeResult++;
        } else if (this.answer.includes(Number(numberInput[i]))) {
          ballResult++;
        } else {
        }
      }
      if (strikeResult == 3) {
        Console.print(strikeResult + STRIKE);
        return await this.endOrReset();
      }

      if (strikeResult > 0 && ballResult > 0) {
        Console.print(ballResult + BALL + " " + strikeResult + STRIKE);
      } else if (strikeResult == 0 && ballResult > 0) {
        Console.print(ballResult + BALL);
      } else if (strikeResult > 0 && ballResult == 0) {
        Console.print(strikeResult + STRIKE);
      } else {
        Console.print(NOTHING);
      }
    } catch (error) {
      throw new Error("[ERROR]" + error); //Error를 던지는 것이랑 콘솔의 차이
    }
    return await this.play();
  }
  validateInput(number) {
    const inputToSet = new Set(number.split("").map(Number));
    if (number.length !== 3) return "입력값은 세자리 수를 입력해주세요.";
    if ([...inputToSet].length !== 3) {
      return "중첩되지 않는 세자리 수를 입력해주세요.";
    }
    if (number.includes(" ")) return "공백은 넣지 말아주세요.";
    if (Number.isNaN(number)) return "숫자만 입력해주세요.";

    return "통과";
  }

  async endOrReset() {
    const endMessage = await Console.readLineAsync(END_OR_RESET_MESSAGE);
    if (endMessage == 1) {
      this.answer = this.makeAnswer();
      await this.play();
    } else {
      Console.print("게임 종료");
    }
  }
}
export default App;
