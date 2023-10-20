const GuideMessage = Object.freeze({
  START_GAME: "숫자 야구 게임을 시작합니다.",
  RESTART_GAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  INPUT_NUMBER: "숫자를 입력해주세요 :",
  CORRECT_NUMBER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

const ErrorMessage = Object.freeze({
  RESTART_NUMBER_ERROR: "[ERROR] 입력값은 1 또는 2로 이루어진 숫자여야 합니다.",
  RESTART_COUNT_ERROR: "[ERROR] 입력값은 1 또는 2, 둘 중 하나여야 합니다.",
  USER_LENGTH_ERROR: "[ERROR] 입력값은 3자리로 구성되어야 합니다.",
  USER_NUMBER_ERROR: "[ERROR] 입력값은 숫자로 구성되어야 합니다.",
  USER_DUPLICATE_ERROR: "[ERROR] 입력값은 모두 다른 숫자로 구성되어야 합니다.",
  USER_INCLUDE_ZERO_ERROR: "[ERROR] 입력값에 0은 포함될 수 없습니다.",
});

export { GuideMessage, ErrorMessage };
