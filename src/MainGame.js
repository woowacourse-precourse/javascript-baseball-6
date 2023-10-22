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
  isValidateNumber = (number) => {
    if (!/^[1-9]{3}$/.test(number)) {
      throw new Error("[ERROR] 1-9사이의 세자리 숫자가 아닙니다.");
    }

    const numberSet = new Set(number);
    if (numberSet.size !== 3) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  };

  //숫자를 입력 받음
  getUserInput = async () => {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.isValidateNumber(input);
  };
}

export { MainGame };
