import { Random, Console } from "@woowacourse/mission-utils";

export class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let continuePlay = true;
    while (continuePlay) {
      // 1게임
      const computer = this.generateComputerNumbers();
      continuePlay = await this.playSingleGame(computer);
    }
  }

  async playSingleGame(computer) {
    while (true) {
      // 맞히기시도

      const numberString = await Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const numbers = numberString.split("").map(Number);
      this.validateInput(numbers);

      const [strike, ball] = this.evaluate(computer, numbers);

      this.displayResult(strike, ball);
      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const select = Number(
          await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
          )
        );
        return select !== 2;
      }
    }
  }

  generateComputerNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  }

  validateInput(numbers) {
    if (numbers.length !== 3)
      throw new Error("[ERROR] 입력 숫자의 길이는 3이어야 합니다.");
    if (new Set(numbers).size !== 3)
      throw new Error(
        "[ERROR] 입력 숫자는 서로 다른 수로 이루어져 있어야합니다."
      );
  }

  evaluate(computer, numbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computer.length; i++) {
      const number = Number(numbers[i]);
      if (computer[i] == number) strike++;
      else if (computer.includes(number)) ball++;
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

export default App;
