export const GameMessage = Object.freeze({
  START_GAME: "숫자 야구 게임을 시작합니다.",
  USER_INPUT: "숫자를 입력해주세요 : ",
  END_GAME: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_GAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

export const ErrorMessage = Object.freeze({
  INVALID_SPACE: "[ERROR] 공백이 포함되어 있습니다.",
  INVALID_ZERO: "[ERROR] 1에서 9까지 숫자만 입력해 주세요.",
  INVALID_LENGTH: "[ERROR] 3개의 숫자를 입력해 주세요.",
  INVALID_PATTERN: "[ERROR] 서로 다른 숫자를 입력해 주세요.",
  INVALID_RESTART: "[ERROR] 1 또는 2를 입력해 주세요.",
});
