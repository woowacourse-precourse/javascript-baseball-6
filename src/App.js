import * as MissionUtils from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.randomNumber = [];
  }

  initGame() {
    this.randomNumber.length = 0;
    while (this.randomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumber.includes(number))
        this.randomNumber.push(number);
    }
  }

  async play() {
    try {
      this.initGame();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      await this.inputNumber();
    } catch (error) {
      throw error;
    }
  }

  async inputNumber() {
    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      if (!this.isValidInput(userInput)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      const isContinue = await this.judgeContinue(userInput);

      if (!isContinue) {
        break;
      }
    }
  }

  isValidInput(enterInput) {
    if (enterInput.length !== 3) {
      return false;
    }

    for (const char of enterInput) {
      if (char < '1' || char > '9' || enterInput.indexOf(char) !== enterInput.lastIndexOf(char)) {
        return false;
      }
    }

    return true;
  }

  async judgeContinue(userInput) {
    const result = this.judgeResult(userInput);
    MissionUtils.Console.print(result);
    if (this.isGameWon(result)) {
      return await this.isGameEnd();
    }
    return true;
  }

  judgeResult(enterInput) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (enterInput[i] == this.randomNumber[i]) {
        strikes++;
      } else if (this.randomNumber.includes(Number(enterInput[i]))) {
        balls++;
      }
    }

    return this.formatResult(strikes, balls);
  }


  formatResult(strikes, balls) {
    if (strikes === 0 && balls === 0) return "낫싱";
    if (strikes === 3) return "3스트라이크";
    if (balls === 0) return `${strikes}스트라이크`;
    if (strikes === 0) return `${balls}볼`;
    return `${balls}볼 ${strikes}스트라이크`;
  }

  isGameWon(result) {
    return result === "3스트라이크";
  }

  async isGameEnd() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const startInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");

    if (startInput === '1') {
      this.initGame();
      await this.inputNumber();
      return false;
    } else if (startInput !== '1' && startInput !== '2') {
      throw new Error("[ERROR] 1이나 2만 입력가능합니다.");
    }
    else {
      return false;
    }
  }
}

export default App;
