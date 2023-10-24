import { MissionUtils } from "@woowacourse/mission-utils";
import { runApp } from "./App.js";

const reStartGame = async () => {
  try {
    const questionNum = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );

    if (questionNum.trim() === "1") {
      await runApp.play();
    } else if (questionNum.trim() === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
    } else {
      MissionUtils.Console.print("잘못된 입력입니다. 게임을 종료합니다.");
    }
  } catch (e) {
    throw new Error("[Error] 정확한 숫자를 입력하세요.");
  }
};

export default reStartGame;
