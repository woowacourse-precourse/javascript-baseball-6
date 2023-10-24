import { Random, Console } from "@woowacourse/mission-utils";

class App {
  static setComputerNum() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(num)) randomNumber.push(num);
    }

    return randomNumber;
  }

  static async setUserNum() {
    const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!inputNumber.match(/^[1-9]{3}$/)) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }

    const answer = inputNumber.split("").map((item) => +item);

    const duplicate = (arr) => {
      return arr.some((item, index) => arr.indexOf(item) !== index);
    };

    if (duplicate(answer)) {
      throw new Error("[ERROR] 숫자가 중복되지 않도록 입력해주세요.");
    }

    return answer;
  }

  static setCount(computerNum, userNum) {
    let strike = 0;
    let ball = 0;

    computerNum.forEach((item, index) => (item === userNum[index] ? ++strike : userNum.includes(item) && ++ball));

    return [strike, ball];
  }

  static printMessage(ballCount) {
    const strikeMessage = ballCount[0] ? `${ballCount[0]}스트라이크` : "";
    const ballMessage = ballCount[1] ? `${ballCount[1]}볼` : "";
    const messageSpace = ballCount[0] && ballCount[1] ? " " : "";
    const message = !ballCount[0] && !ballCount[1] ? "낫싱" : strikeMessage + messageSpace + ballMessage;
    Console.print(message);
  }

  static async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const couputerNum = this.setComputerNum();
    Console.print(couputerNum); // todo delete
    const userNum = await this.setUserNum();

    const ballCount = this.setCount(couputerNum, userNum);
    
    this.printMessage(ballCount);
  }
}

App.play(); // todo delete

export default App;
