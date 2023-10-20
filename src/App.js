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

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerRandomNumber();
  }
}
const APP = new App();
APP.play();
export default App;
