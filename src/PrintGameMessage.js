import GameConsole from "./GameConsole.js";

class PrintGameMessage {
  compareResult(strike, ball) {
    let message;
    if (strike > 0 && ball > 0) {
      message = `${ball}볼 ${strike}스트라이크`;
    } else if (ball > 0) {
      message = `${ball}볼`;
    } else if (strike > 0) {
      message = `${strike}스트라이크`;
    } else {
      message = "낫싱";
    }
    GameConsole.print(message);
  }
}

export default PrintGameMessage;
