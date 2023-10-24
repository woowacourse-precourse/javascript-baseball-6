import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameStart();
  }

  async gameStart() {
    this.computerNumber = this.generateRandomNumber();
    while (true) {
      this.userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const isValid = this.inputValidation(this.userNumber);
      if (!isValid) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      const [ball, strike] = this.getScoreCount();
      this.scorePrint(ball, strike);
      if (strike === 3) break;
    }
    const isRestart = await this.gameClear();
    if (isRestart === "1") return await this.gameStart();
    else if (isRestart !== "2") throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  async gameClear() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return await Console.readLineAsync("");
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
    const setNumber = new Set(numbers);
    const lengthValidate = numbers.length === 3;
    const uniqueValidate = setNumber.size === 3;
    const numberValidate = [...numbers].every((digit) => !isNaN(+digit));
    return lengthValidate && uniqueValidate && numberValidate;
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

export default App;
