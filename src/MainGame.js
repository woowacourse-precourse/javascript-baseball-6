import { Computer } from "./Computer.js";
import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Messages.js";

class MainGame {
  //컴퓨터(상대방)이 랜덤한 3개의 숫자 선택
  constructor() {
    this.computer = new Computer();
    this.computerSelectNumber = this.computer.createRandomNumber();
  }

  //입략값이 1.1-9사이의 숫자인지 2.3자리인지 를 확인해야함
  isValidateNumber = (input) => {
    if (!/^[1-9]+$/.test(input)) {
      throw new Error(Messages.ERROR.NOT_NUMBER);
    }

    if (input.length !== 3) {
      throw new Error(Messages.ERROR.NOT_THREE_FIGURES);
    }

    if (new Set(input).size !== 3) {
      throw new Error(Messages.ERROR.NOT_UNIQUE);
    }
    return true;
  };

  //숫자를 입력 받음
  getUserInput = async () => {
    const input = await Console.readLineAsync(Messages.INPUT_NUMBER);

    if (this.isValidateNumber(input)) {
      const userInput = input.split("").map(Number);
      return userInput;
    }
  };

  //컴퓨터가 랜덤으로 지정한 값에 대한 나의 값 비교
  getResult = async () => {
    let resultArr = [0, 0, 0];
    const userNumber = await this.getUserInput();
    const computerNumber = [...this.computerSelectNumber];

    for (let i = 0; i < userNumber.length; i++) {
      if (userNumber[i] === computerNumber[i]) resultArr[0]++;
      else if (computerNumber.includes(userNumber[i])) {
        resultArr[1]++;
      } else {
        resultArr[2]++;
      }
    }

    this.printResult(resultArr);

    if (resultArr[0] === 3) {
      await this.isRestartOrExit();
    } else return this.getResult();
  };

  //결과를 출력
  printResult = (resultArr) => {
    let result = "";

    if (resultArr[1] > 0) result += `${resultArr[1]}볼 `;
    if (resultArr[0] > 0) result += `${resultArr[0]}스트라이크`;
    if (resultArr[2] === 3) result += `낫싱`;

    Console.print(result);
    return;
  };

  isRestartOrExit = async () => {
    const input = await Console.readLineAsync(Messages.RESULT);

    if (input === "1") {
      this.computerSelectNumber = this.computer.createRandomNumber();
      return this.getResult();
    } else if (input === "2") {
      Console.print(Messages.END);
      return;
    } else {
      throw new Error(Messages.ERROR.NOT_RANGE);
    }
  };
}

export { MainGame };
