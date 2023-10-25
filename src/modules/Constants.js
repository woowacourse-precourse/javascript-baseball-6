const MESSAGE = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  USER_INPUT: "숫자를 입력해주세요 : ",
  RESULT_NOTHING: "낫싱",
  RESULT_STRIKE: "스트라이크",
  RESULT_BALL: "볼",
  GAME_CLEAR: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_RESET: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

const RESET_OPTIONS = {
  RESET_NUMBER: "1",
  END_NUMBER: "2",
};

const ERROR = {
  INPUT_LENGTH: "[ERROR] 잘못된 값입니다. 3자리 수를 입력하세요.",
  UNIQUE_VALUE: "[ERROR] 중복된 값입니다. 서로 다른 3자리 수를 입력하세요.",
  RESET: "[ERROR] 잘못된 값입니다. 1 또는 2를 입력하세요.",
};

export { MESSAGE, RESET_OPTIONS, ERROR };
