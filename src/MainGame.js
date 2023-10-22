import { Computer } from "./Computer.js";
import { Console } from "@woowacourse/mission-utils";

class MainGame {
  //랜덤숫자 선택 후 시작 문구 프린트
  start = () => {
    this.computer = new Computer();
    this.computerSelectNumber = this.computer.createRandomNumber();

    this.printStart();
  };

  //시작 문구 출력
  printStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  };

  //입략값이 1.1-9사이의 숫자인지 2.3자리인지 를 확인해야함
  isValidateNumber = (input) => {
    if (!/^[1-9]{3}$/.test(input)) {
      throw new Error("[ERROR] 1-9사이의 세자리 숫자가 아닙니다.");
    }

    const numberSet = new Set(input);
    if (numberSet.size !== 3) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  };

  //숫자를 입력 받음
  getUserInput = async () => {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.isValidateNumber(input);

    this.userInput = input.split("").map(Number);

    this.getResult();
  };

  //컴퓨터가 랜덤으로 지정한 값에 대한 나의 값 비교
  getResult = () => {
    this.resultArr = [0, 0, 0];
    const userInputArray = Array.from(this.userInput);
    const computerSelectNumberArray = Array.from(this.computerSelectNumber);

    userInputArray.forEach((number, index) => {
      if (number === computerSelectNumberArray[index]) resultArr[0]++;
      else if (computerSelectNumberArray.includes(number)) resultArr[1]++;
      else resultArr[2]++;
    });
  };
}

export { MainGame };
