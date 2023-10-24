import { Random, Console } from "@woowacourse/mission-utils";

class App {
  setComputerNum() {
    const computerNum = [];

    while (computerNum.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(num)) computerNum.push(num);
    }

    return computerNum;
  }

  async setUserNum() {
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

  printCount(computerNum, userNum) {
    let ballCount = 0;
    let strikeCount = 0;

    computerNum.forEach((item, index) =>
      item === userNum[index] ? ++strikeCount : userNum.includes(item) && ++ballCount
    );

    const ballMessage = ballCount ? `${ballCount}볼` : "";
    const strikeMessage = strikeCount ? `${strikeCount}스트라이크` : "";
    const messageSpace = strikeCount && ballCount ? " " : "";

    const message = !strikeCount && !ballCount ? "낫싱" : ballMessage + messageSpace + strikeMessage;
    Console.print(message);

    return strikeCount === 3 ? "isSuccess" : "isPlaying";
  }

  async resetGame() {
    const input = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    if (!(input == 1 || input == 2)) {
      throw new Error("[ERROR] 값을 잘못 입력하였습니다. 게임을 종료합니다.");
    }

    if (input == 1) return "isPlaying";
    if (input == 2) return "isQuit";
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let status = "isPlaying";

    while (status === "isPlaying") {
      const couputerNum = this.setComputerNum();

      while (!(status === "isSuccess")) {
        const userNum = await this.setUserNum();
        status = this.printCount(couputerNum, userNum);
      }

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      status = await this.resetGame();
    }
  }
}

export default App;
