const INVALID_INPUT_ERROR = "[ERROR] 유효하지 않은 입력입니다.";

const GAME_RESTART = "1";
const GAME_EXIT = "2";

/**
 * 사용자가 입력한 선택값(재시작 혹은 종료)에 대한 에러를 검증하는 함수
 * @param {string} userSelectNumber 사용자가 입력한 숫자
 * @throw 사용자가 입력한 선택값이 재시작 혹은 종료가 아니라면 throw 에러
 * @returns 사용자가 입력한 선택값에 에러가 없다면 false 반환
 */
function validateUserSelectNumber(userSelectNumber) {
  if (userSelectNumber !== GAME_RESTART && userSelectNumber !== GAME_EXIT) {
    throw new Error(INVALID_INPUT_ERROR);
  }

  return;
}

export { validateUserSelectNumber, GAME_EXIT };
