const GUIDE = Object.freeze({

    START: "숫자 야구 게임을 시작합니다.",
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    INPUT_NUMBER: "숫자를 입력해주세요 : ",
    CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  });
  
  const ERROR_MESSAGE = Object.freeze({
    HEADER: "[ERROR]",
    NOT_NUMBER: "숫자가 아닙니다.",
    NOT_LENGTH: "3자리의 숫자를 입력해주세요.",
    NOT_UNIQUE: "중복된 숫자가 있습니다.",
    NOT_RANGE: "1 ~ 9 사이의 숫자가 아닙니다.",
    NOT_RESTART_OR_END: "1 또는 2를 입력해주세요.",
  });
  
  const GAME_SETTING = Object.freeze({
    MAX_INPUT_LENGTH: 3,
    MIN_RANDOM_NUMBER: 1,
    MAX_RANDOM_NUMBER: 9,
    RESTART_NUMBER: 1,
    END_NUMBER: 2,
  });
  
  const SCORE = Object.freeze({
    STRIKE: "스트라이크",
    BALL: "볼",
    NOTHING: "낫싱",
  });
  
  export { GUIDE, GAME_SETTING, ERROR_MESSAGE, SCORE };