import { Console } from "@woowacourse/mission-utils";
export class NumberBaseballGame {
  constructor(computerNumbers) {
    this.computerNumbers = computerNumbers;
  }

  async play() {
    while (true) {
      const userNumbers = await this.getUserNumbers();
      this.validateInput(userNumbers);

      const [strike, ball] = this.evaluate(userNumbers);

      this.displayResult(strike, ball);

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return true;
      }
    }
  }

  async getUserNumbers() {
    const numberString = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return numberString.split("").map(Number);
  }

  validateInput(numbers) {
    if (numbers.length !== 3)
      throw new Error("[ERROR] 입력 숫자의 길이는 3이어야 합니다.");
    if (new Set(numbers).size !== 3)
      throw new Error(
        "[ERROR] 입력 숫자는 서로 다른 수로 이루어져 있어야합니다."
      );
  }

  evaluate(userNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < this.computerNumbers.length; i++) {
      const number = Number(userNumbers[i]);
      if (this.computerNumbers[i] == number) strike++;
      else if (this.computerNumbers.includes(number)) ball++;
    }
    return [strike, ball];
  }

  displayResult(strike, ball) {
    const result = [
      ball ? ball + "볼" : "",
      strike ? strike + "스트라이크" : "",
      ball === 0 && strike === 0 ? "낫싱" : "",
    ].join(" ");
    Console.print(result);
  }
}

export default NumberBaseballGame;
