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
    try {
      const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      const result = this.isValidUserInput(userInput);
      this.userBaseballNumber = userInput.split('').map(Number);
    } catch (error) {
      console.error('[Error] ', error.message)
    }
  }

  isValidUserInput(userInput) {
    if (userInput.length !== 3) {
      throw new Error('3자리를 입력해주세요');
    }
    // 이후 예외조건 추가
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
      MissionUtils.Console.print(`${this.Balls}` + '볼' + `${this.Strike}` + ' 스트라이크');

    if (this.Balls > 0 && this.Strike == 0)
      MissionUtils.Console.print(`${this.Balls}` + '볼');

    if (this.Strike > 0 && this.Balls == 0)
      MissionUtils.Console.print(`${this.Strike}` + '스트라이크');
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    await this.getUserInput();
    this.countMatchingNumbers();
    this.countMatchingStrikes();
    this.countMatchingBalls();
    this.printResult();
  }

}

const app = new App();
app.play();

export default App;
