import { Console, MissionUtils } from "@woowacourse/mission-utils";

const MAX_SCORE = 3;
const BALL_INDEX = 1;
const STRIKE_INDEX = 0;

class App {
  constructor() {
    this.computers = [];
    this.userInputs = [];
    this.score = [0, 0];
  }

  //컴퓨터가 서로다른 임의의 수 3개 생성 함수
  makeComputerRandomNumber() {
    while (this.computers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computers.includes(number)) {
        this.computers.push(number);
      }
    }
  }

  //사용자 입력값 숫자로 변환 하는 함수
  userInputDataToNumber(getInputs) {
    return getInputs.split("").map(Number);
  }

  //사용자에게 입력 받는 함수
  async input(Question) {
    let userNumber = await Console.readLineAsync(Question);
    this.userInputs = this.userInputDataToNumber(userNumber);
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerRandomNumber();
    while (this.score[STRIKE_INDEX] !== MAX_SCORE) {
      try {
        await this.input("숫자를 입력해주세요 : ");
      } catch (error) {}
    }
  }
}
const APP = new App();
APP.play();
export default App;
