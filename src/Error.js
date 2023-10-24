import { Console } from "@woowacourse/mission-utils";

class Error {
  static handle(error) {
    Console.print(`${error.message}`);
  }
}

export default Error;
