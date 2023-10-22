const { MissionUtils } = require("@woowacourse/mission-utils");


class App {
  constructor() {
    this.secretNumber = this.generateRandomNumber();
    this.attempts = 0;
  }

  generateRandomNumber() {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const secretNumber = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      secretNumber.push(digits[randomIndex]);
      digits.splice(randomIndex, 1);
    }
    return secretNumber.join('');
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    return input;
  }

  isValidInput(input) {
    if (typeof input === 'string' && /^\d{3}$/.test(input)) {
      const guess = input.split('').map(Number);
      const uniqueDigits = new Set(guess);
      return uniqueDigits.size === 3;
    }
    return false;
  }

  checkGuess(guess) {
    if (this.isValidInput(guess)) {
        // 입력값을 문자열에서 숫자 배열로 변환
        const guessArray = guess.split('').map(Number);

        let strikes = 0;
        let balls = 0;

        for (let i = 0; i < 3; i++) {
            if (guessArray[i] === this.secretNumber[i]) {
                strikes++;
            } else if (this.secretNumber.includes(guessArray[i])) {
                balls++;
            }
        }

        if (strikes === 3) {
            return "3스트라이크";
        } else if (strikes > 0 || balls > 0) {
            return `${balls}볼 ${strikes}스트라이크`;
        } else {
            return "낫싱";
        }
    } else {
        // 숫자가 잘못된 형식일 때 "[ERROR] 숫자가 잘못된 형식입니다."를 반환
        return "[ERROR] 숫자가 잘못된 형식입니다.";
    }
}


  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
  
    while (true) {
      const input = await this.getInput();
      if (input === "2") {
        console.log("게임을 종료합니다.");
        break;
      }
  
      if (this.isValidInput(input)) {
        const result = this.checkGuess(input);
        console.log(result);
  
        if (result === "3스트라이크") {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      } else {
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }
}  
module.exports = App;
