import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const getComputerValue = () => {
      const computer = [];
      while (computer.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    };

    let computerValue = getComputerValue();

    const isValidInput = (userInput) => {
      const inputRegex = /^[0-9]{3}$/.test(userInput);
      return inputRegex;
    };

    const getUserValue = async () => {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!isValidInput(userInput)) {
        throw new Error("[ERROR] 서로 다른 숫자 3개만 입력 가능합니다.");
      }
      const userValue = [...userInput].map((value) => Number(value));
      return userValue;
    };

    let playGame = true;
    while (playGame) {
      const userValue = await getUserValue();
    }
  }
}

export default App;
