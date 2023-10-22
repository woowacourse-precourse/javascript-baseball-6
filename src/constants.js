const LOG = Object.freeze({
  /**
   * 게임 시작 시 출력되는 메시지
   */
  START: "숫자 야구 게임을 시작합니다.",

  /**
   * 게임을 재시작할지 묻는 메시지
   */
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",

  /**
   * 사용자 입력을 받는 메시지
   */
  INPUT_NUMBER: "숫자를 입력해주세요 : ",

  /**
   * 정답을 맞혔을 때 출력되는 메시지
   */
  CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

const ERROR_MESSAGE = Object.freeze({
  HEADER: "[ERROR]",

  /**
   * 사용자 입력이 숫자가 아닐 경우
   */
  NOT_NUMBER: "숫자가 아닙니다.",

  /**
   * 사용자 입력이 3자리가 아닐 경우
   */
  NOT_LENGTH: "3자리의 숫자를 입력해주세요.",

  /**
   * 사용자 입력이 중복된 숫자일 경우
   */
  NOT_UNIQUE: "중복된 숫자가 있습니다.",

  /**
   * 사용자 입력이 0을 포함할 경우
   */
  NOT_RANGE: "1 ~ 9 사이의 숫자가 아닙니다.",

  /**
   * 사용자 입력이 1 또는 2가 아닐 경우
   */
  NOT_RESTART_OR_END: "1 또는 2를 입력해주세요.",
});

const GAME_SETTING = Object.freeze({
  /**
   * 사용자 입력의 최대 길이
   */
  MAX_INPUT_LENGTH: 3,

  /**
   * 랜덤 숫자의 최소 값
   */
  MIN_RANDOM_NUMBER: 1,

  /**
   * 랜덤 숫자의 최대 값
   */
  MAX_RANDOM_NUMBER: 9,

  /**
   * 게임을 재시작할 경우, 사용자 입력
   */
  RESTART_NUMBER: 1,

  /**
   * 게임을 종료할 경우, 사용자 입력
   */
  END_NUMBER: 2,
});

const SCORE = Object.freeze({
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
});

export { LOG, GAME_SETTING, ERROR_MESSAGE, SCORE };
