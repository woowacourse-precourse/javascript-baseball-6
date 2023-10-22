import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class App {
  constructor() {
    this.computer = new Computer();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  }
  
  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    this.duringGameInput(input);
  }

  duringGameInput(input) {
    if(!this.computer.checkInputValid(input)){
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
  }
};


export default App;
