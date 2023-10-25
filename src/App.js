const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  random_number = [];
  user_number;
  answer;

  isDuplicationInRandomNumber(number) {
    return this.random_number.some((num) => num === number);
  }

  getRandomNumber() {
    while (this.random_number.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.isDuplicationInRandomNumber(number))
        this.random_number.push(number);
    }
  }

  numberOfHits() {
    const SCORE = [0, 0];
    this.random_number.map((number, index) => {
      if (this.user_number[index] === number) SCORE[0] += 1;
      else if (this.user_number.includes(number)) SCORE[1] += 1;
    });
    return SCORE;
  }

  printAnswer(result) {
    const STRIKE = result[0];
    const BALL = result[1];
    if (STRIKE === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.answer = true;
      return;
    } else if (STRIKE === 0 && BALL === 0) {
      Console.print("낫싱");
      this.answer = false;
      return;
    } else if (STRIKE === 0 && BALL > 0) {
      Console.print(`${BALL}볼`);
      this.answer = false;
      return;
    } else if (STRIKE > 0 && BALL === 0) {
      Console.print(`${STRIKE}스트라이크`);
      this.answer = false;
      return;
    } else {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      this.answer = false;
      return;
    }
  }

  isDuplicationInUserNumber(nums) {
    const numberSet = new Set(nums);
    if (numberSet.size === 3) return false;
    else return true;
  }

  isRange(nums) {
    const testNum = nums.filter((num) => num > 0 && num < 10);
    if (testNum.length !== 3) {
      return false;
    } else {
      return true;
    }
  }

  isLength(nums) {
    if (nums.length !== 3) return false;
    else {
      return true;
    }
  }

  testUserNumber(number) {
    if (!isNaN(parseInt(number))) {
      const nums = number.split("").map(Number);
      if (
        this.isDuplicationInUserNumber(nums) ||
        !this.isRange(nums) ||
        !this.isLength(nums)
      )
        return false;
      else {
        return true;
      }
    } else {
      return false;
    }
  }

  async restart() {
    const restart_answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (restart_answer) {
      if (restart_answer === "1") {
        this.random_number = [];
        this.user_number = "";
        this.play();
      } else if (restart_answer === "2") {
        return;
      } else {
        throw new Error("[ERROR] 잘못된 입력입니다.");
      }
    }
  }

  async getUserInput() {
    let number = await Console.readLineAsync("숫자를 입력해주세요 :");

    if (!(await this.testUserNumber(number))) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    } else {
      await (this.user_number = number.split("").map(Number));
      const result = await this.numberOfHits();
      await this.printAnswer(result);
      this.answer ? await this.restart() : await this.getUserInput();
      return;
    }
  }

  async gameStart() {
    await this.getRandomNumber();
    await this.getUserInput();
    return;
  }

  async play() {
    await Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameStart();
  }
}
module.exports = App;
