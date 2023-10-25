import { Console, MissionUtils } from "@woowacourse/mission-utils";

class GameManager {
  constructor() {
    this.randomNum = this.generateRandomNum();
  }

  async gamestart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomNum() {
    let randomNum = [];

    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) {
        randomNum.push(number);
      }
    }

    return randomNum;
  }

  async insertNum() {
    while (true) {
      try {
        const myNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
        this.checkNum(myNum);
        return myNum;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  checkNum(num) {
    const numArr = Array.from(num).map(Number);

    if (numArr.some(isNaN)) {
      throw new Error("정수를 입력하세요.");
    }

    if (numArr.length != 3) {
      throw new Error("3자리 수를 입력하세요.");
    }

    const setCollection = new Set(numArr);
    if (setCollection.size != 3) {
      throw new Error("중복되지 않는 수를 입력하세요.");
    }
  }

  async baseBall() {
    let strike = 0;
    let ball = 0;

    const myNum = await this.insertNum();

    for (let i = 0; i < 3; i++) {
      if (myNum.charAt(i) - "0" === this.randomNum[i]) {
        strike++;
      } else if (this.randomNum.includes(parseInt(myNum.charAt(i)))) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike !== 3) {
      await this.baseBall();
    } else {
      Console.print("정답입니다. 게임 종료!");
    }
  }
}

export default GameManager;
