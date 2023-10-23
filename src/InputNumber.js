import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 사용자의 숫자 입력을 받는 함수
 * @returns {Array} 사용자가 입력한 서로 다른 세 가지 숫자를 담은 배열
 */
async function InputNumber() {
  const userInputNumber = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  ).then((res) => res.split(""));
  // 유저에게 받은 숫자의 길이가 3 이하인 경우
  if (userInputNumber.length !== 3) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  // 유저에게 받은 숫자가 온전한 세 자리 숫자가 아닌경우
  if (isNaN(+userInputNumber.join(""))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  // 유저에게 받은 숫자에 중복숫자가 있는 경우
  if (new Set(userInputNumber).size !== 3) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return userInputNumber;
}

export default InputNumber;
