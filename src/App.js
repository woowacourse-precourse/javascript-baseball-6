class App {
  constructor() {
    this.computerNumbers = [];
  }

  initializeComputerNumbers() {
    
    Console.print("숫자 야구 게임을 시작합니다");
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }
  
  async play() {}
  async getInput(prompt) {
    const input = await Console.readLineAsync(prompt);
    if (!/^\d{3}$/.test(input) || !input.trim()) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
    }
    return input;
  }

  checkInputAndPrintResult(input) {
    const playerNumbers = input.split("").map((char) => parseInt(char));
    const { ball, strike } = this.calculateBallAndStrike(playerNumbers);

    if (ball || strike) {
      Console.print(this.buildResultMessage(ball, strike));
    } else {
      Console.print("낫싱");
    }

    return strike === 3;
  }

  calculateBallAndStrike(playerNumbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (playerNumbers[i] === this.computerNumbers[i]) {
        strike++;
      } else if (this.computerNumbers.includes(playerNumbers[i])) {
        ball++;
      }
    }
    return { ball, strike };
  }

  buildResultMessage(ball, strike) {
    return (
      (ball ? `${ball}볼` : "") +
      (ball && strike ? " " : "") +
      (strike ? `${strike}스트라이크` : "")
    );
  }

  async askForNewGame() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    return answer === "1";
  }
}

export default App;
