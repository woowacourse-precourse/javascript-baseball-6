import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  print(msg) {
    Console.print(msg);
  },
  printError(err) {
    Console.print(`${err}\n`);
  },
};

export default OutputView;
