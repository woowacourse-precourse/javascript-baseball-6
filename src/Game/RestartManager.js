import { MissionUtils } from "@woowacourse/mission-utils";

class RestartManager {
  static async askForRestart() {
    await MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    const restartInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    switch (restartInput.trim()) {
      case "1":
        return true;
      case "2":
        MissionUtils.Console.print("게임을 종료합니다.");
        return false;
      default:
        throw new Error("잘못된 값을 입력하였습니다.");
    }
  }
}

export default RestartManager;
