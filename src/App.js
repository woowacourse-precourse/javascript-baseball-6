import { Random, Console } from "@woowacourse/mission-utils";

class App {
  static setComputerNum() {
    const computerNum = [];

    while (computerNum.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(num)) computerNum.push(num);
    }

    return computerNum;
  }

  static async setUserNum() {
    const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!inputNumber.match(/^[1-9]{3}$/)) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }

    const userNum = inputNumber.split("").map((item) => +item);

    const duplicate = (arr) => {
      return arr.some((item, index) => arr.indexOf(item) !== index);
    };

    if (duplicate(userNum)) {
      throw new Error("[ERROR] 숫자가 중복되지 않도록 입력해주세요.");
    }

    return userNum;
  }

  static printCount(computerNum, userNum) {
    let strikeCount = 0;
    let ballCount = 0;

    computerNum.forEach((item, index) =>
      item === userNum[index] ? ++strikeCount : userNum.includes(item) && ++ballCount
    );

    const strikeMessage = strikeCount ? `${strikeCount}스트라이크` : "";
    const ballMessage = ballCount ? `${ballCount}볼` : "";
    const messageSpace = strikeCount && ballCount ? " " : "";

    const message = !strikeCount && !ballCount ? "낫싱" : strikeMessage + messageSpace + ballMessage;
    Console.print(message);

    return strikeCount === 3 ? true : false;
  }

  static async play() {
    let isSuccess = false;
    const couputerNum = this.setComputerNum();
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(couputerNum); // todo delete

    while (!isSuccess) {
      const userNum = await this.setUserNum();
      isSuccess = this.printCount(couputerNum, userNum);
    }
  }
}

App.play(); // todo delete

export default App;
