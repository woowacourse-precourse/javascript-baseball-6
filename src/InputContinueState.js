import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 게임을 계속 할 지 사용자의 입력을 받는 함수
 * @returns {Boolean} 게임 계속 진행 여부
 */
async function InputContinueState() {
  MissionUtils.Console.print(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  const userInputContinueState = await MissionUtils.Console.readLineAsync();
  return userInputContinueState === "1" ? true : false;
}

export default InputContinueState;
