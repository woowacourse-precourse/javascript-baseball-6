const MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  CORRECT_NUMBER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_DONE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: "숫자 야구 게임을 종료합니다.",

  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",

  ERROR: {
    INPUT_NUMBER_LENGTH_ERROR: "[ERROR] 세 자리 수를 입력하세요.",
    INPUT_NUMBER_RANGE_ERROR: "[ERROR] 1에서 9 사이의 숫자만 입력하세요.",
    INPUT_NUMBER_DUPLICATION_ERROR: "[ERROR] 중복된 숫자는 사용할 수 없습니다.",
    RESTART_NUMBER_ERROR:
      "[ERROR] 재시작 여부 선택 시, 1 또는 2를 입력해야합니다.",
  },
};

export { MESSAGES };
