import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    try {
      await this.gameStart();
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async gameStart() {
    this.computerNumber = this.generateRandomNumber();
    while (true) {
      this.userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const isValid = this.inputValidation(this.userNumber);
      if (!isValid) throw new Error("숫자가 잘못된 형식입니다.");
      const [ball, strike] = this.getScoreCount();
      this.scorePrint(ball, strike);
    }
  }

  getScoreCount() {
    const { userNumber, computerNumber } = this;
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      const index = computerNumber.indexOf(+userNumber[i]);
      if (index === i) strike++;
      else if (index > -1) ball++;
    }
    return [ball, strike];
  }

  scorePrint(ball, strike) {
    let score = "";
    if (ball === 0 && strike === 0) score = "낫싱";
    if (ball > 0) score += ball + "볼 ";
    if (strike > 0) score += strike + "스트라이크";
    Console.print(score);
  }

  inputValidation(numbers) {
    const isLengthValidate = this.inputLengthCheck(numbers);
    const isUniqueValidate = this.inputUniqueCheck(numbers);
    const isNumberValidate = this.inputNumberCheck(numbers);
    return isLengthValidate && isUniqueValidate && isNumberValidate;
  }

  inputLengthCheck(numbers) {
    return numbers.length === 3;
  }

  inputUniqueCheck(numbers) {
    const setNumber = new Set(numbers);
    return setNumber.size === 3;
  }

  inputNumberCheck(input) {
    for (let i = 0; i < input.length; i++) {
      if (isNaN(+input[i])) return false;
    }
    return true;
  }

  generateRandomNumber() {
    const numbers = new Set();
    while (numbers.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }
    return [...numbers];
  }
}

const app = new App();
app.play();
export default App;
