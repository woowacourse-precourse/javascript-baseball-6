import { Console, Random } from "@woowacourse/mission-utils";
class Game {
  computerNums = [];

  start = async () => {
    Console.print("숫자 야구 게임을 시작합니다.");
    do {
      await this.playRound();
    } while (await this.checkPlayAgain());
  };

  playRound = async () => {
    this.setComputerNums();
    //console.log("computer: ", this.computerNums);

    while (true) {
      const userNums = await this.getUserNums();

      const result = this.checkResult(userNums);
      const resultStr = this.getResultStr(result);
      Console.print(resultStr);

      if (result.strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
  };

  // 컴퓨터가 임의의 수를 선택하고 저장하는 메소드
  setComputerNums = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerNums = computer;
  };

  // 사용자의 입력을 받는 메소드
  getUserNums = async () => {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!this.checkUserNumsInput(input)) {
      throw new Error("올바른 입력이 아닙니다.");
    }
    const userNums = input.split("").map(Number);
    return userNums;
  };

  // 사용자의 입력이 유효한지 검사하는 메소드
  checkUserNumsInput = (input) => {
    let isValid = true;
    const reg = /^[0-9]{3}$/;
    if (!reg.test(input)) {
      // 입력에 숫자가 아닌 문자가 포함된 경우
      isValid = false;
    } else if (new Set(input).size !== 3) {
      // 입력에 같은 문자가 포함된 경우
      isValid = false;
    }
    return isValid;
  };

  // computerNums와 userNums를 비교하여 스트라이크, 볼 개수를 반환하는 메소드
  checkResult = (userNums) => {
    const result = {
      strike: 0,
      ball: 0,
    };

    userNums.forEach((num, index) => {
      if (num === this.computerNums[index]) {
        result.strike++;
      } else if (this.computerNums.includes(num)) {
        result.ball++;
      }
    });
    return result;
  };

  // 스트라이크, 볼 개수로 구성된 객체를 문자열로 변환하는 메소드
  getResultStr = (result) => {
    if (result.strike === 0 && result.ball === 0) {
      return "낫싱";
    } else if (result.strike === 0) {
      return `${result.ball}볼`;
    } else if (result.ball === 0) {
      return `${result.strike}스트라이크`;
    } else {
      return `${result.ball}볼 ${result.strike}스트라이크`;
    }
  };

  // 게임 재시작 여부를 입력받는 메소드
  checkPlayAgain = async () => {
    const input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (!this.checkPlayAgainInput(input)) {
      throw new Error("올바른 입력이 아닙니다.");
    }
    const inputNum = Number(input);
    return inputNum === 1;
  };

  // 게임 재시작 여부의 입력값이 유효한지 검사하는 메소드
  checkPlayAgainInput = (input) => {
    if (input === "1" || input === "2") {
      return true;
    }
    return false;
  };
}

export default Game;
