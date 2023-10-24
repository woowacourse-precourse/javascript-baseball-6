import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";
import { GuideText, SIZE } from "../constant";

export default class Control {
  constructor(app) {
    this.app = app;
    this.computer = new Computer();
  }

  startGame() {
    Console.print(GuideText.START_GAME);
  }

  assignComputerNumber() {
    this.app.computerNumber = this.computer.getComputerChoice();
  }

  compareNumbers(userInput) {
    const COMPUTER = this.app.computerNumber;
    const USER_ARR = String(userInput).split("");
    const COM_ARR = String(COMPUTER).split("");
    const STRIKE = USER_ARR.filter((s, i) => s === COM_ARR[i]).length;
    const BALL = COM_ARR.filter(
      (b, i) => b !== USER_ARR[i] && USER_ARR.includes(b)
    ).length;
    return { STRIKE, BALL };
  }

  hasThreeStrikes(userInput) {
    const { STRIKE, BALL } = this.compareNumbers(userInput);

    if (STRIKE === SIZE) {
      Console.print("3스트라이크");
      Console.print(GuideText.CORRECT_ANSWER);
      return true;
    }

    if (STRIKE === 0 && BALL === 0) {
      Console.print("낫싱");
    } else {
      let message = "";

      if (BALL > 0) {
        message += `${BALL}볼`;
      }
      if (STRIKE > 0) {
        if (message) message += " ";
        message += `${STRIKE}스트라이크`;
      }
      Console.print(message);
    }
    return false;
  }

  endGame() {
    this.app.isPlaying = false;
    Console.print(GuideText.END_GAME);
  }
}
