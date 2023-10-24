import { Console } from "@woowacourse/mission-utils";
import checkRange from "./checkRange";
import countBallAndStrike from "./countBallAndStrike";

const askNumbers = async (randomNumber) => {
  const value = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (checkRange(value)) {
    countBallAndStrike(randomNumber, value);
  }
};

export default askNumbers;
