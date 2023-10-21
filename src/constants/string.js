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
});
