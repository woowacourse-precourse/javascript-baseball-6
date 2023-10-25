import { MissionUtils } from "@woowacourse/mission-utils";

// 입력값 예외처리
function checkInput(human_input) {
  if (isNaN(human_input) == true) {
    return "[ERROR] 숫자가 아닙니다";
  } else if (human_input.length > 3) {
    return "[ERROR] 세자리만 입력하십시오!";
  } else if (human_input.length < 3) {
    return "[ERROR] 세자리를 입력하십시오!";
  }
}

//유저 인풋 받기
export default async function getUserNumbers() {
  let user_input = "";

  try {
    user_input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요:"
    );
  } catch (error) {
    MissionUtils.Console.print(error);
  }
  const error_message = checkInput(user_input);
  if (error_message) {
    throw new Error(error_message);
  }

  return user_input;
}
