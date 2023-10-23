const SETTING = Object.freeze({
  INPUT_NUMBER_LENGTH: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  RESTART_NUMBER: 1,
  FINISH_NUMBER: 2,
});

const SCORE = Object.freeze({
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
});

const MESSAGE = Object.freeze({
  GAME: {
    START: "숫자 야구 게임을 시작합니다.",
    END: "게임 종료",
    INPUT_NUMBER: "숫자를 입력해주세요 : ",
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  },
  ERROR: {
    WRONG_VALUE: "[ERROR] 숫자가 잘못된 형식입니다.",
  },
});

export { SETTING, SCORE, MESSAGE };
