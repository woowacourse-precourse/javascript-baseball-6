import { Console } from "@woowacourse/mission-utils";

async function restartCheck() {
  const restartOptionNumber = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  //사용자 입력 검증
  if (restartOptionNumber === "1") {
    return true;
  } else if (restartOptionNumber === "2") {
    return false;
  }
  throw "[ERROR] 숫자가 잘못된 형식입니다.";
}

export default restartCheck;
