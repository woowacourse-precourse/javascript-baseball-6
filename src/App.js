import { MissionUtils } from "@woowacourse/mission-utils"; // 우테코 API

class App {

  randomNumber = [];
  userBaseballNumber = [];
  MatchingNumbers;

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



  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    await this.getUserInput();
    this.countMatchBall();
  }

}

const app = new App();
app.play();

export default App;
