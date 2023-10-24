import { Console } from "@woowacourse/mission-utils";

const restartChecked = async () => {
  const inputValue = await Console.readLineAsync("");

  if (
    (Number(inputValue) === 1 && Number(inputValue) === 2) ||
    isNaN(Number(inputValue))
  ) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return inputValue;
};

export default restartChecked;
