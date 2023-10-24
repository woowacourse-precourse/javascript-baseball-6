import { Console } from "@woowacourse/mission-utils";

/**
 * 컴퓨터의 숫자와 유저의 입력 숫자를 비교한 결과를 출력하는 함수
 * @param {Object} result 컴퓨터의 숫자와 유저의 입력 숫자를 비교한 결과가 담긴 객체
 */
function AnswerMessage(result) {
  const strikeMessage = result.strike === 0 ? "" : `${result.strike}스트라이크`;
  const ballMessage = result.ball === 0 ? "" : `${result.ball}볼 `;
  // 0볼 0스트라이크인 경우
  if (result.strike === 0 && result.ball === 0) {
    Console.print("낫싱");
  }
  // ?볼 ?스트라이크인 경우
  else {
    Console.print(ballMessage + strikeMessage);
    if (result.strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}

export default AnswerMessage;
