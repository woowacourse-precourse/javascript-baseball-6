import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printStaticMessage(message) {
    Console.print(message);
  },
  
  printGameProgress(ball, strike) {
    let message = '';

    if (ball === 0 && strike === 0) message = '낫싱';
    if (ball === 0 && strike > 0) message = `${strike}스트라이크`;
    if (ball > 0 && strike === 0) message = `${ball}볼`;
    if (ball > 0 && strike > 0) message = `${ball}볼 ${strike}스트라이크`;
    
    return this.printStaticMessage(message);
  },
}

export default OutputView;