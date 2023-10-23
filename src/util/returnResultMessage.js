import { MissionUtils } from "@woowacourse/mission-utils";

async function returnResultMessage(result) {
  const STRIKE = result.strike;
  const BALL = result.ball;

  // ball과 strike를 검사를 분리,
  // return된 string에 따라서 문자열을 합쳐서 반환하는 형식으로 refactor

  try {
    let resultMessage = ``;

    switch (true) {
      case STRIKE === 3:
        resultMessage = `3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
        break;
      case BALL !== 0 && STRIKE === 0:
        resultMessage = `${BALL}볼`;
        break;
      case BALL !== 0 && STRIKE !== 0:
        resultMessage = `${BALL}볼 ${STRIKE}스트라이크`;
        break;
      case BALL === 0 && STRIKE !== 0:
        resultMessage = `${STRIKE}스트라이크`;
        break;
      default:
        resultMessage = `낫싱`;
    }
    return resultMessage;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default returnResultMessage;
