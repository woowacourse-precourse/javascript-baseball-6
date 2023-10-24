import { MissionUtils } from "@woowacourse/mission-utils";
import makeAnswer from "../makeAnswer/makeAnswer";
import getUserInput from "../input/getUserInput";
import gameResult from "./gameResult";

/**
 * 야구게임을 실행한다
 * 
 */
export default function baseballGame() {
  const answer = makeAnswer();
  const userInput = getUserInput();

  const strikeCount = countStrike(answer, userInput);
  const ballCount = countBall(answer, userInput) - strikeCount;

  if (strikeCount === 3) {
    MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    // 재시작/종료 구현
  }
  
  const resultMessage = gameResult(strikeCount, ballCount);
}

