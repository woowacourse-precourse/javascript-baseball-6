import { Computer } from "./Computer.js";
import { Console } from "@woowacourse/mission-utils";

class MainGame {
  //컴퓨터(상대방)이 랜덤한 3개의 숫자 선택
  constructor() {
    this.computer = new Computer();
    this.computerSelectNumber = this.computer.createRandomNumber();
  }

  //입략값이 1.1-9사이의 숫자인지 2.3자리인지 를 확인해야함
  isValidateNumber = (input) => {
    if (!/^[1-9]{3}$/.test(input)) {
      throw new Error("[ERROR] 1-9사이의 세자리 숫자가 아닙니다.");
    }

    if (new Set(input).size !== 3) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }

    if (input.length !== 3) {
      throw new Error("[ERROR] 3자리가 아닙니다.");
    }

    return true;
  };

  //숫자를 입력 받음
  getUserInput = async () => {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (this.isValidateNumber(input)) {
      const userInput = input.split("").map(Number);
      return userInput;
    }
  };

  //컴퓨터가 랜덤으로 지정한 값에 대한 나의 값 비교
  getResult = async () => {
    this.resultArr = [0, 0, 0];
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

    if (this.resultArr[1] > 0) result += `${this.resultArr[1]}볼 `;
    if (this.resultArr[0] > 0) result += `${this.resultArr[0]}스트라이크`;
    if (this.resultArr[2] === 3) result += `낫싱`;

    Console.print(result);
    return;
  };

  isRestartOrExit = async () => {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const input = await Console.readLineAsync("");

    if (input === "1") {
      this.start();
    } else if (input === "2") {
      return;
    } else {
      throw new Error("[ERROR] 선택지에 있지 않습니다.");
    }
  };
}

export { MainGame };
