import { MissionUtils } from "@woowacourse/mission-utils";
import hasDuplicateDigits from "./hasDuplicateDigits";
async function getUserInput() {
  const NUMBER_LENGTH = 3;
  let userNumber = "";

  userNumber = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );

  if (
    userNumber === null ||
    userNumber === undefined ||
    userNumber.length !== NUMBER_LENGTH ||
    Number.isNaN(Number(userNumber)) ||
    hasDuplicateDigits(userNumber)
  ) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return userNumber;
}

export default getUserInput;
