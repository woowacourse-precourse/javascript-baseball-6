import { ERROR_MESSAGE } from "../Message";

class GameUtil {
  // 게임 인풋 유효성 검사
  gameInputValidator(userInput) {
    // 중복검사를위한 객체 생성
    const isDuple = new Set(userInput).size;

    if (userInput.length !== 3) {
      // 인풋의 길이가 3이상이면 LENTH_ERROR 반환
      throw new Error(ERROR_MESSAGE.LENTH_ERROR);
    } else if (isDuple !== 3) {
      // isDuple의 size가 3이 아니면 중복된 값이 있었기 때문에 DUPLE_ERROR 반환
      throw new Error(ERROR_MESSAGE.DUPLE_ERROR);
    } else if (/\D/.test(userInput)) {
      // 인풋값을 정수로 파싱후 Number.isInterger을사용해 정수인지 확인하여 false면 TYPE_ERROR 반환
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  // 재시작 유효성 검사
  restartInputVaildator(userRestart) {
    // 1이나 2 이외의 값이 입력되면 에러 출력
    if (userRestart !== "1" && userRestart !== "2") {
      throw new Error(ERROR_MESSAGE.RESTART_ERROR);
    }
  }
}

export default GameUtil;
