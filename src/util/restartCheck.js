import { Console } from "@woowacourse/mission-utils";

async function restartCheck(gaming) {
  var flag = gaming;
  const restartOptionNumber = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  //사용자 입력 검증
  if (Number(restartOptionNumber) === 1) {
  } else if (Number(restartOptionNumber) === 2) {
    flag = false;
  } else {
    throw "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  return flag;
}

export default restartCheck;
