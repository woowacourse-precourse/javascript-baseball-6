import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.playGame(); 
  }

  getRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async playGame() {
    const computerNumbers = this.getRandomNumbers();
    let gameFinish = false;
    while (!gameFinish) {
      const inputNumbers = await this.userInput(); 
      const result = this.calculateResult(inputNumbers, computerNumbers);
      this.printResult(result);
      if (result.strikes === 3) { 
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        gameFinish = true;
      }
    }
    return await this.askForRestart(); 
  }

  async userInput() {
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
    const inputDigits = input.split('').map(Number);
    const repeatError = inputDigits.length !== new Set(inputDigits).size;
    const lengthError = input.length !== 3;
    const valueError = !/^\d+$/.test(input);

    if (repeatError || lengthError || valueError) {
      throw new Error("[ERROR]"); 
    } 
    return inputDigits.join('');
  }

  calculateResult(inputNumbers, computerNumbers) {
    const userDigits = inputNumbers.split('').map(Number);
    const computerDigits = computerNumbers.map(Number);
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < computerNumbers.length; i++) {
      if (userDigits[i] === computerDigits[i]) { 
        strikes++; 
      } else if (computerDigits.includes(userDigits[i])) { 
        balls++; 
      }
    }
    return { strikes, balls };
  }

  printResult(result) {
    let message = "";
    if (result.balls > 0) {
      message += `${result.balls}볼 `;
    }
    if (result.strikes > 0) {
      message += `${result.strikes}스트라이크`;
    }
    if (!message) {
      message = "낫싱";
    }
    MissionUtils.Console.print(message);
  }

  async askForRestart() { 
    while (true) {
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const input = await MissionUtils.Console.readLineAsync("");
      if (input === '1') {
        return await this.playGame();
      } else if (input === '2') {
        return MissionUtils.Console.print("게임 종료");
      } else {
        MissionUtils.Console.print("올바른 옵션을 선택하세요 (1: 재시작, 2: 종료)");
      }
    }
  }
}

const app = new App();
app.play();

export default App;