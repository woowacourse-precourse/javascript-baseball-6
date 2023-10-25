import { Console } from "@woowacourse/mission-utils";

export default class HintView {
  static printHintMessage(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
      return;
    }
    
    if (ball === 0) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    
    if (strike === 0) {
      Console.print(`${ball}볼`);
      return;
    }

    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}
