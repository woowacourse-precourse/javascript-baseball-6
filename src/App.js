import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.userNumber = "";
    this.computerNumber;
    this.answer = false;
    this.end = false;
    this.exit_number;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (!this.end) {
      this.answer = false;
      this.computerNumber = this.setRandomNumber();
      Console.print(this.computerNumber);
      while (!this.answer) {
        await this.getUserNumber().then(() => this.printResult());
      }
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await this.getExitNumber();
    }
  }

  async getUserNumber() {
    try {
      this.userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (isNaN(this.userNumber)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else {
        if (this.userNumber.length != 3) {
          throw new Error("[ERROR] 세자리 수가 아닙니다.");
        } else {
          if (this.duplicateNum(this.userNumber)) {
            throw new Error("[ERROR] 숫자가 중복됬습니다.");
          } else {
            const tempNum = this.userNumber.toString();
            if (tempNum[0] == 0 || tempNum[1] == 0 || tempNum[2] == 0) {
              throw new Error("[ERROR] 1~9 숫자로 이루어져 있지 않습니다.");
            }
          }
        }
      }
    } catch (e) {
      throw e;
    }
  }

  async getExitNumber() {
    try {
      this.exit_number = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (this.exit_number == 2) {
        this.end = true;
      } else if (this.exit_number == 1) {
        this.end = false;
      } else {
        throw new Error("[ERROR] 1 또는 2가 아닌 다른 형식이 입력됬습니다.");
      }
    } catch (e) {
      throw e;
    }
  }

  setRandomNumber() {
    let num;
    let duplicate = true;
    while (duplicate) {
      num = (
        Random.pickNumberInRange(1, 9) * 100 +
        Random.pickNumberInRange(1, 9) * 10 +
        Random.pickNumberInRange(1, 9)
      ).toString();
      duplicate = this.duplicateNum(num);
    }
    return num;
  }

  duplicateNum(num) {
    let duplicate = true;
    if (num[0] !== num[1] && num[0] !== num[2] && num[1] !== num[2]) {
      duplicate = false;
    }
    return duplicate;
  }

  printResult() {
    let strike = 0;
    let ball = 0;

    const userStringNumber = this.userNumber.toString();

    for (let i = 0; i < this.computerNumber.length; i++) {
      for (let j = 0; j < userStringNumber.length; j++) {
        if (this.computerNumber[i] === userStringNumber[j]) {
          if (i === j) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }

    if (strike === 3) {
      this.answer = true;
    }

    if (strike == 0 && ball == 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default App;
