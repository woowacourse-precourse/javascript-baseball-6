export const GAME_MESSAGE = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  GAME_END: "게임 종료",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  ASK_REPLAY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

export const ERROR_MESSAGE = Object.freeze({
  NOT_VALID_CHOICE:
    "[ERROR] 올바르지 않은 명령입니다. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  NOT_VALID_NUMBER: "[ERROR] 유효하지 않은 숫자입니다.",
});
