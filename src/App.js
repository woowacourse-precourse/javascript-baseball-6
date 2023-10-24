import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  randomNumber = [];
  userBaseballNumber = [];
  MatchingNumbers;
  Strike = 0;
  Balls;

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = [...computer];
  }


  async getUserInput() {
    this.Strike = 0;
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidUserInput(userInput);
    this.userBaseballNumber = userInput.split('').map(Number);
  }



  isValidUserInput(userInput) {

    if (this.isNotNumbers(userInput)) {
      throw new Error('[ERROR] 입력값은 숫자가 아닙니다.');
    }

    if (typeof userInput === "undefined") {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (userInput.length === 0) {
      throw new Error('[ERROR] 빈칸을 입력하셨습니다.');
    }

    if (userInput.length !== 3) {
      throw new Error('[ERROR] 3자리를 입력해주세요');
    }


    if (this.hasSameNumber(userInput)) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
  }

  isNotNumbers(userInput) {
    const nonNumericRegex = /^\D+$/;
    return nonNumericRegex.test(userInput);
  }

  hasSameNumber(userInput) {
    const userInputArray = userInput.split('');
    return userInputArray.length !== new Set(userInputArray).size;
  }

  countMatchingNumbers() {
    this.MatchingNumbers = this.randomNumber.filter((nums) => this.userBaseballNumber.includes(nums)).length;
  }

  countMatchingStrikes() {
    for (let i = 0; i < this.randomNumber.length; i++) {
      if (this.randomNumber[i] == this.userBaseballNumber[i])
        this.Strike += 1;
    }
  }

  countMatchingBalls() {
    this.Balls = this.MatchingNumbers - this.Strike;
  }

  printResult() {
    if (this.MatchingNumbers === 0)
      MissionUtils.Console.print('낫싱');

    if (this.Balls > 0 && this.Strike > 0)
      MissionUtils.Console.print(`${this.Balls}` + '볼 ' + `${this.Strike}` + '스트라이크');

    if (this.Balls > 0 && this.Strike == 0)
      MissionUtils.Console.print(`${this.Balls}` + '볼');

    if (this.Strike > 0 && this.Balls == 0)
      MissionUtils.Console.print(`${this.Strike}` + '스트라이크');
  }

  async playBaseballGame() {
    while (this.Strike < 3) {
      await this.getUserInput();
      this.countMatchingNumbers();
      this.countMatchingStrikes();
      this.countMatchingBalls();
      this.printResult();
    }
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.askRestartGame();
  }

  async askRestartGame() {
    let result;
    const userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    result = this.isValidUserInputRestartGame(userInput);

    if (result == 1) {
      // 이 부분에서 모듈화 해야겠다는 생각이 듦
      this.Strike = 0;
      this.setRandomNumber();
      this.playBaseballGame();
    }
  }

  isValidUserInputRestartGame(userInput) {
    userInput = Number(userInput);
    if (userInput.length === 0) throw new Error('[Error] 빈칸을 입력하셨습니다.');
    if (userInput != 1 && userInput != 2) throw new Error('[Error] 1 또는 2를 입력해주세요');


    return userInput;
    // 이후 예외조건 추가
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    await this.playBaseballGame();
  }
}

const app = new App();
app.play();


export default App;