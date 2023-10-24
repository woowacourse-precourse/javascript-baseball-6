import * as MissionUtils from "@woowacourse/mission-utils";
// import { Console } from '@woowacourse/mission-utils';

/* 사용자로부터 값을 입력받는 기능 */
export default async function InputUserNumber() {
  const userInput = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요: "
  );

  if (isNaN(userInput)) {
    throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
  }

  if (userInput.length !== 3) {
    throw new Error("[ERROR] 입력값은 세 자리여야 합니다.");
  }

  const sameNumber = new Set(userInput);
  if (sameNumber.size !== userInput.length) {
    throw new Error("[ERROR] 입력값의 각 자리 수는 서로 다른 숫자여야 합니다.");
  }
  // parseInt([...userInput].map((e) => parseInt(e, 10)));
  // return [...userInput].map((e) => {
  //   return parseInt(e);
  // });

  return [...userInput].map(Number);
}
