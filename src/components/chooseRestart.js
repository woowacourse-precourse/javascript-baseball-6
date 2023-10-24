import { MissionUtils } from "@woowacourse/mission-utils";

async function chooseRestart() {
  try {
    const userChoice = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    return userChoice;
  } catch (error) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

export default chooseRestart;