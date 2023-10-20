import { Console, Random } from "@woowacourse/mission-utils";
class Game {
  computerNums = [];

  start = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  };

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
  getUserNums = async () => {
    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const userNums = input.split("").map(Number);
      return userNums;
    } catch (err) {
      console.log(err);
    }
  };
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
}

export default Game;
