// const MissionUtils = require("@woowacourse/mission-utils");
import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  RANDOM_NUMBER = [];

  USER_NUMBER;

  ANSWER;
  ERROR = false;

  isDuplicated(number) {
    return this.RANDOM_NUMBER.some((num) => num === number);
  }

  getRandomNumber() {
    // while (this.RANDOM_NUMBER.length < 3) {
    //   const number = Random.pickNumberInRange(1, 9);
    //   if (!this.isDuplicated(number)) this.RANDOM_NUMBER.push(number);
    // }
    this.RANDOM_NUMBER = [1, 3, 5];
  }

  numberOfHits() {
    const SCORE = [0, 0];
    this.RANDOM_NUMBER.map((number, index) => {
      if (this.USER_NUMBER[index] === number) SCORE[0] += 1;
      else if (this.USER_NUMBER.includes(number)) SCORE[1] += 1;
    });
    // console.log(SCORE)
    return SCORE;
  }

  printAnswer(result) {
    const STRIKE = result[0];
    const BALL = result[1];
    // console.log(STRIKE, BALL);
    if (STRIKE === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.ANSWER = true;
      return;
    } else if (STRIKE === 0 && BALL === 0) {
      Console.print("낫싱");
      this.ANSWER = false;
      return;
    } else if (STRIKE === 0 && BALL > 0) {
      Console.print(`${BALL}볼`);
      this.ANSWER = false;
      return;
    } else if (STRIKE > 0 && BALL === 0) {
      Console.print(`${STRIKE}스트라이크`);
      this.ANSWER = false;
      return;
    } else {
      Console.print(`${STRIKE}스트라이크 ${BALL}볼`);
      this.ANSWER = false;
      return;
    }
  }
  /**
   * input 값이 숫자인지, 3자리인지, 중복된 숫자가 있는지,1~9 사이인지 확인
   */

  //중복된 숫자가 있는지 확인, 중복 값 있으면 true

  isDup(nums) {
    const numberSet = new Set(nums);
    if (numberSet.size === 3) return false;
    else return true;
  }
  //1~9 사이의 숫자인지 확인, 모두 사이 숫자면 true
  isRange(nums) {
    const testNum = nums.filter((num) => num > 0 && num < 10);
    if (testNum.length !== 3) {
      return false;
    }
    return true;
  }
  //길이 3 아니면 false
  isLength(nums) {
    if (nums.length !== 3) return false;
    return true;
  }

  testNumber(number) {
    if (!isNaN(parseInt(number))) {
      const nums = number.split("").map(Number);
      if (this.isDup(nums) || !this.isRange(nums) || !this.isLength(nums))
        return false;
      return true;
    }
    return false;
  }

  async restart() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (answer) {
      if (answer === "1") {
        this.RANDOM_NUMBER = [];
        this.USER_NUMBER = "";
        this.play();
      } else if (answer === "2") {
        //Console.print("게임 종료");
        // Console.close();
        return;
      } else {
        this.ERROR = true;
        return;
      }
    }
  }

  async getUserInput() {
    let number = await Console.readLineAsync("숫자를 입력해주세요 :");

    if (!(await this.testNumber(number))) {
      this.ERROR = true;
    } else {
      //   await console.log(this.RANDOM_NUMBER, number);
      await (this.USER_NUMBER = number.split("").map(Number));
      const result = await this.numberOfHits();
      await this.printAnswer(result);
      this.ANSWER ? await this.restart() : await this.getUserInput();
      return;
    }
  }

  async start() {
    await this.getRandomNumber();
    await this.getUserInput();
    return;
  }

  async play() {
    await Console.print("숫자 야구 게임을 시작합니다.");

    await this.start();

    if (this.ERROR) {
      this.ERROR = false;
      return Promise.reject(new Error("[ERROR] 숫자가 잘못된 형식입니다."));
    }
  }
}
const app = new App();
app.play();

// module.exports = App;
