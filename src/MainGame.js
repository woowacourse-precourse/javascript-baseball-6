import { Computer } from "./Computer.js";
import { Console } from "@woowacourse/mission-utils";

class MainGame {
  //랜덤숫자 선택 후 시작 문구 프린트
  start = () => {
    this.computer = new Computer();
    this.printStart();
  };

  printStart = () => {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  };
}

export { MainGame };
