import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 게임 재시작 여부를 반환한다
 * 
 * @returns {boolean}
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default async function getRestartDecision() {
  const userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

  try {
    if (userInput !== "1" && userInput !== "2"){
      throw new Error("잘못된 값을 입력했습니다.");
    }
  } catch (err){
    MissionUtils.Console.print("Error : " + err.message);
  }

  const restartDecision = (userInput === "1" ? true : false);
  return restartDecision;
}