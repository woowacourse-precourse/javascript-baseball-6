import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import { GUIDE_TEXT, NUMBER_SIZE } from "../constant.js";

class Control {
  constructor(app) {
    this.app = app;
    this.computer = new Computer();
  }

  // 게임 시작
  startGame() {
    Console.print(GUIDE_TEXT.START_GAME);
  }

  // 랜덤으로 출력된 숫자를 constructor에 저장
  assignComputerNumber() {
    this.app.computerNumber = this.computer.getComputerChoice();
  }

  // 사용자의 입력과 컴퓨터의 숫자를 비교
  compareNumbers(userInput) {
    let computer = this.app.computerNumber;
    const userArr = String(userInput).split("");
    const comArr = String(computer).split("");
    const strike = userArr.filter((s, i) => s === comArr[i]).length;
    const ball = comArr.filter(
      (b, i) => b !== userArr[i] && userArr.includes(b)
    ).length;
    return this.getMessage(strike, ball);
  }

  // 비교에 따른 결과 문구 출력
  getMessage(strike, ball) {
    if (strike === NUMBER_SIZE) {
      Console.print("3스트라이크");
      Console.print(GUIDE_TEXT.CORRECT_ANSWER);
      return true;
    }
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    }
    if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
    }
    if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }
    if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }
  
  endGame() {
    this.app.isPlaying = false;
    Console.print(GUIDE_TEXT.END_GAME);
  }
}
export default Control;
