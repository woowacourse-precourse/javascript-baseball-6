import { Console } from "@woowacourse/mission-utils";

const restartChecked = async () => {
  const inputValue = await Console.readLineAsync("");
  if (inputValue.length > 1 || isNaN(Number(inputValue))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    return inputValue;
  }
};

export default restartChecked