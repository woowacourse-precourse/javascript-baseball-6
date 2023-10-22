class App {
  constructor() {
    this.secretNumber = this.generateRandomNumber();
    this.attempts = 0;
  }

  generateRandomNumber() {
    // 1부터 9까지 서로 다른 수로 이루어진 3자리 수 생성
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const secretNumber = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      secretNumber.push(digits[randomIndex]);
      digits.splice(randomIndex, 1);
    }
    return secretNumber.join('');
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");

    while (true) {
      const input = this.getInput();
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
  
  async getInput() {
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    return input;
  }
  
  isValidInput(input) {
    // 입력값이 3자리 숫자인지 확인
    if (/^\d{3}$/.test(input)) {
      // 중복된 숫자가 있는지 확인
      const uniqueDigits = new Set(input.split(''));
      return uniqueDigits.size === 3;
    }
    return false;
  }
  

  checkGuess(guess) {
    let strikes = 0;
    let balls = 0;
  
    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.secretNumber[i]) {
        strikes++;
      } else if (this.secretNumber.includes(guess[i])) {
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
  }
}  

module.exports = App;
