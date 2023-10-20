import { Console } from "@woowacourse/mission-utils";
import checkRange from "./checkRange";
import countBallAndStrike from "./countBallAndStrike";

const askNumbers = (randomNumber) => {
  Console.readLineAsync("숫자를 입력해주세요 : ").then((value) => {
    if (!checkRange(value)) {
      throw new Error("잘못된 숫자 형식입니다.");
    }

    countBallAndStrike(randomNumber, value);
  });
};

export default askNumbers;
