import { Console } from "@woowacourse/mission-utils";
import askRepeat from "./askRepeat";
import askNumbers from "./askNumbers";

const printCount = (cntBall, cntStrike, randomNumber) => {
  if (cntStrike === 3) {
    Console.print(`${cntStrike}스트라이크\n`);
    askRepeat();
  }

  if (cntBall === 0 && cntStrike === 0) {
    Console.print("낫싱\n");
    askNumbers(randomNumber);
  }

  if (cntBall > 0 && cntStrike > 0) {
    Console.print(`${cntBall}볼 ${cntStrike}스트라이크\n`);
    askNumbers(randomNumber);
  }

  if (cntBall > 0 && cntStrike === 0) {
    Console.print(`${cntBall}볼\n`);
    askNumbers(randomNumber);
  }
};

export default printCount;
