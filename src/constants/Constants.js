export const GAME_RULES = {
  LIMIT_LENGTH: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  RESTART_GAME: 1,
  END_GAME: 2,
  NO_BALL: 0,
  NO_STRIKE: 0,
  NUMBER_REGEX: /^\d+$/,
};

export const MESSAGES = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  USER_INPUT: "숫자를 입력해주세요 : ",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  GAME_WIN: "번 승리하였습니다.\n",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

export const ERRORS = {
  NOT_NUMBER: "[ERROR] 반드시 숫자만 입력해야 합니다.",
  OUT_OF_RANGE_LENGTH: "[ERROR] 반드시 3자리 이내의 숫자를 입력해야 합니다.",
  OUT_OF_RANGE_NUMBER: "[ERROR] 반드시 1과 9사이의 숫자를 입력해야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 중복된 숫자를 입력할 수 없습니다.",
  INVALID_RESTART_INPUT: "[ERROR] 1 또는 2만 입력해야 합니다.",
};
