export const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  GOOD_GAME: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: "게임 종료",
});

export const ERROR = Object.freeze({
  INVALID_LENGTH: "3자리 숫자로 입력해주세요..",
  INVALID_DUPLICATE: "중복된 숫자가 입력되었습니다.",
  INVALID_INPUT: "정수로 입력해주세요.",
  INVALID_RESTART: "'1' 또는 '2'를 입력해주세요.",
});

export const CHECK = Object.freeze({
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});
