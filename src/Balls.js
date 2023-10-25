class Balls {
  constructor() {
    this.randomNumbers = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const threeDigitNumber = [];
    while (threeDigitNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!threeDigitNumber.includes(number)) {
        threeDigitNumber.push(number);
      }
    }
    Console.print(threeDigitNumber);
    return threeDigitNumber;
  }

  inputValidation(inputNumbers) {
    if (!(/^\d{3}$/.test(inputNumbers) && new Set(inputNumbers).size === 3)) {
      throw new Error("[ERROR]");
    }
  }

  calculateStrike(inputNumbers) {
    const guessNumbers = inputNumbers.split("").map(Number);
    let strikes = 0;

    for (let i = 0; i < 3; i += 1) {
      if (guessNumbers[i] === this.randomNumbers[i]) {
        strikes += 1;
      }
    }
    return strikes;
  }

  calculateBall(inputNumbers) {
    const guessNumbers = inputNumbers.split("").map(Number);
    let balls = 0;
    for (let i = 0; i < 3; i += 1) {
      if (
        guessNumbers[i] !== this.randomNumbers[i] &&
        this.randomNumbers.includes(guessNumbers[i])
      ) {
        balls += 1;
      }
    }
    return balls;
  }

  async EndGame() {
    const choice = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
    );
    if (choice === "2") {
      Console.print("게임을 종료합니다.");
      return true;
    }
    if (choice === "1") {
      this.restartGame();
      return false;
    }
    throw new Error("[ERROR]");
  }

  restartGame() {
    this.randomNumbers = this.generateRandomNumber();
    Console.print("게임을 다시 시작합니다.");
  }
}
