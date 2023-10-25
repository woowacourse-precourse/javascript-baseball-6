const Message = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  RESTART_GAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  GUESS_NUMBER: "숫자를 입력해주세요 : ",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const StaticNumber = Object.freeze({
  RESTART_NUMBER: "1",
  END_NUMBER: "2",
  ANSWER_NUMBER_LENGTH: 3,
  POSSIBLE_BASEBALL_NUMBER: /[1-9]/g,
  POSSIBLE_END_OR_NOT_NUMBER: /1|2/g,
});

const ErrorMessage = Object.freeze({
  RESTART_NUMBER_ERROR: "[ERROR] 입력값은 1 또는 2인 숫자여야 합니다.",
  RESTART_COUNT_ERROR: "[ERROR] 입력값은 1 또는 2, 둘 중 하나여야 합니다.",
  USER_LENGTH_ERROR: "[ERROR] 입력값은 3자리로 구성되어야 합니다.",
  USER_NUMBER_ERROR: "[ERROR] 입력값은 숫자로 구성되어야 합니다.",
  USER_DUPLICATE_ERROR: "[ERROR] 입력값은 모두 다른 숫자로 구성되어야 합니다.",
  USER_INCLUDE_ZERO_ERROR: "[ERROR] 입력값에 0은 포함될 수 없습니다.",
});

export { Message, StaticNumber, ErrorMessage };
