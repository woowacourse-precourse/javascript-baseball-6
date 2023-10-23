import { MissionUtils } from "@woowacourse/mission-utils";

async function handleProgress(message) {
  try {
    MissionUtils.Console.print(message);
    const IS_GAME_OVER = message === "3스트라이크";

    if (IS_GAME_OVER) {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
      );

      if (INPUT === "1" || INPUT === "2") {
        return INPUT;
      } else {
        const ERROR_MESSAGE = "[ERROR] ";
        throw ERROR_MESSAGE;
      }
    }
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default handleProgress;
