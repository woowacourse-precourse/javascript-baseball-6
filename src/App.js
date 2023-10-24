import { Random, Console } from "@woowacourse/mission-utils";

class App {
  static setComputerNum() {
    Console.print("숫자 야구 게임을 시작합니다.");

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
    return computerNum.map((item, index) =>
      item === userNum[index] ? "strike" : userNum.includes(item) ? "ball" : "nothing"
    );
  }

  static async play() {
    const computer = this.setComputerNum();
    Console.print(computer); // todo delete
    const user = await this.setUserNum();
    Console.print(user); // todo delete
    const count = this.setCount(computer, user);
    Console.print(count); // todo delete
  }
}

App.play(); // todo delete

export default App;
