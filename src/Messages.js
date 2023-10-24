const GAME_MSG = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  INPUT: "숫자를 입력해주세요 : ",
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const ERROR_MSG = Object.freeze({
  INPUT_ERROR_LEN: "[ERROR]세자리 수를 입력해주세요.",
  INPUT_ERROR_SAME: "[ERROR]숫자가 중복되지 않아야 합니다.",
  INPUT_ERROR_NOT_NUM: "[ERROR]숫자만 입력해주세요.",
  RESTART_ERROR_NOT_ANS: "[ERROR]1 혹은 2를 입력해주세요.",
});

export { GAME_MSG, ERROR_MSG };
