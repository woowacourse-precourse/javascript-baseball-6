import { MissionUtils } from "@woowacourse/mission-utils";

/* 다시 시작하는 기능 */
export default async function restartGame() {
  const userInput = await MissionUtils.Console.readLineAsync(
    `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
  );
  if (userInput === "1") {
    return true;
  } else if (userInput === "2") {
    return false;
  }
}
