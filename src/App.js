import { Console, Random } from "@woowacourse/mission-utils";

class App {

  randomNumber = [];
  userBaseballNumber = [];
  matchingNumbers;
  strike = 0;
  balls;

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = [...computer];
  }


  async getUserInput() {
    this.strike = 0;
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidUserInput(userInput);
    this.userBaseballNumber = userInput.split('').map(Number);
  }



  isValidUserInput(userInput) {
    if (this.isNotNumbers(userInput)) {
      throw new Error('[ERROR] 입력값은 숫자가 아닙니다.');
    }

    if (userInput.length === 0) {
      throw new Error('[ERROR] 빈칸을 입력하셨습니다.');
    }

    if (userInput.length !== 3) {
      throw new Error('[ERROR] 3자리를 입력해주세요');
    }

    if (this.hasSameNumbers(userInput)) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }

    if (this.hasEmptySpace(userInput)) {
      throw new Error('[ERROR] 숫자에 공백이 포함되어있습니다.');
    }
  }


  isNotNumbers(userInput) {
    const nonNumericRegex = /^\D+$/;
    return nonNumericRegex.test(userInput);
  }

  hasSameNumbers(userInput) {
    const userInputArray = userInput.split('');
    return userInputArray.length !== new Set(userInputArray).size;
  }

  hasEmptySpace(userInput) {
    const nonEmptySpaceRegex = /\s/;
    return nonEmptySpaceRegex.test(userInput);
  }

  countMatchingNumbers() {
    this.matchingNumbers = this.randomNumber.filter((nums) => this.userBaseballNumber.includes(nums)).length;
  }

  countMatchingStrikes() {
    for (let i = 0; i < this.randomNumber.length; i++) {
      if (this.randomNumber[i] === this.userBaseballNumber[i])
        this.strike += 1;
    }
  }

  countMatchingBalls() {
    this.balls = this.matchingNumbers - this.strike;
  }

  printResult() {
    if (this.matchingNumbers === 0)
      Console.print('낫싱');

    if (this.balls > 0 && this.strike > 0)
      Console.print(`${this.balls}` + '볼 ' + `${this.strike}` + '스트라이크');

    if (this.balls > 0 && this.strike == 0)
      Console.print(`${this.balls}` + '볼');

    if (this.strike > 0 && this.balls == 0)
      Console.print(`${this.strike}` + '스트라이크');
  }

  async playBaseballGame() {
    while (this.strike < 3) {
      await this.getUserInput();
      this.countMatchingNumbers();
      this.countMatchingStrikes();
      this.countMatchingBalls();
      this.printResult();
    }
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.askRestartGame();
  }

  async askRestartGame() {
    let result;
    const userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    result = this.isValidUserInputRestartGame(userInput);

    if (result == 1) {
      // 이 부분에서 모듈화 해야겠다는 생각이 듦
      this.strike = 0;
      this.setRandomNumber();
      this.playBaseballGame();
    }
  }

  isValidUserInputRestartGame(userInput) {
    userInput = Number(userInput);

    if (this.isNotNumbers(userInput)) {
      throw new Error('[ERROR] 입력값은 숫자가 아닙니다.');
    }

    if (userInput.length === 0) {
      throw new Error('[Error] 빈칸을 입력하셨습니다. 1또는 2를 입력해주세요.');
    }

    if (userInput != 1 && userInput != 2) {
      throw new Error('[Error] 1 또는 2를 입력해주세요.');
    }

    return userInput;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    await this.playBaseballGame();
  }
}

export default App;