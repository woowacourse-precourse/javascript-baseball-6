export const GAME_MESSAGE = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해 주세요 : ",
  GAME_FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER_LENGTH: "[ERROR] 3자리 숫자만 입력가능합니다.",
  NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력하세요",
  DUPLICATE_NUMBER: "[ERROR] 중복된 숫자가 입력되었습니다.",
});

export const BASEBALL_MESSAGE = Object.freeze({
  NOTHING: "낫싱",
  BALL: "볼",
  STRIKE: "스트라이크",
  END_GAME: "3스트라이크",
});
