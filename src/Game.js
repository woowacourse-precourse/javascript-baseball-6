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
}

export default Game;
