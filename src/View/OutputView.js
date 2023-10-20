import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  print(msg) {
    Console.print(msg);
  },
  printError(err) {
    Console.print(`[ERROR] ${err}`);
  },
};

export default OutputView;
