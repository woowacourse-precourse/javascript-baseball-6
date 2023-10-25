import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    while (result.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(randomNum)) {
        result.push(randomNum);
      }
    }
    return result;

  }
  checkGuess(guess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.randomNumbers[i]) {
        strike++;
      } else if (this.randomNumbers.includes(guess[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      return '낫싱';
    } else if (strike === 3) {
      return '3스트라이크';
    } else {
      return `${ball ? ball + '볼' : ''} ${strike ? strike + '스트라이크' : ''}`.trim();
    }
  }

  validateInput(input) {
    if (input.length !== 3) throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
    if (new Set(input).size !== 3) throw new Error("[ERROR] 서로 다른 숫자를 입력해주세요.");
    for (let num of input) {
      if (num < 1 || num > 9) throw new Error("[ERROR] 1부터 9까지의 숫자만 입력 가능합니다.");
    }
  }
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      while (true) {
        const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        const guess = Array.from(userInput).map(Number);

        this.validateInput(guess);
        const result = this.checkGuess(guess);
        MissionUtils.Console.print(result);

        if (result === '3스트라이크') {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
          if (restart === '1') {
            this.randomNumbers = this.generateRandomNumbers();
            MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
            continue;
          } else if (restart === '2') {
            return;
          } else {
            throw new Error("[ERROR] 1 또는 2만 입력해주세요.");
          }
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

}

export default App;
