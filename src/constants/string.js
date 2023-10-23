export const GAME_TEXT = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  ERROR(message) {
    return `[ERROR] ${message}`;
  },
  NOT_MATCH_LENGTH: "3개의 숫자가 아닙니다.",
  INVALID_NUMBER: "숫자가 잘못된 형식입니다.",
  DUPLICATE_NUMBER: "중복된 수가 있습니다.",
  IS_NEGATIVE_NUMBER: "음수는 입력할 수 없습니다.",
  CONTAIN_ZERO_NUMBER: "0은 포함될 수 없습니다.",
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
  WIN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  CHOICE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  NOT_MATCH_CHOICE: "1 또는 2만 입력해주세요.",
});
