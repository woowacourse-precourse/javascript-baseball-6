const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randoms;
    this.init();
  }

  init() {
    this.randoms = this.getRandomNums();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ", (answer) => {
      if (!this.isValidBallNumber(answer)) {
        throw new Error();
      }
    });
  }

  getRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!randomNums.includes(num)) {
        randomNums.push(num);
      }
    }

    return randomNums;
  }

  isValidBallNumber(answer) {
    if (answer.length !== 3) {
      return false;
    }
    if (
      answer[0] === answer[1] ||
      answer[1] === answer[2] ||
      answer[2] === answer[0]
    ) {
      return false;
    }
    if (isNaN(Number(answer))) {
      return false;
    }
    return true;
  }

  play() {
    console.log(this.randoms);
  }
}

const app = new App();
app.play();

module.exports = App;
