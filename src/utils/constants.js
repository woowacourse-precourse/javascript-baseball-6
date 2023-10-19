export const GAME_CONSTANTS = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  ANSWER_LENGTH: 3,
  STRIKE_OUT_COUNT: 3,
};

export const GAME_RESULTS = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NO_MATCH: "낫싱",
};

export const USER_COMMANDS = {
  RESTART: "1",
  QUIT: "2",
};

export const GAME_MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  FINISH: `${GAME_CONSTANTS.ANSWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  INPUT_NUMBERS: "숫자를 입력해주세요 : ",
  INPUT_COMMAND: `게임을 새로 시작하려면 ${USER_COMMANDS.RESTART}, 종료하려면 ${USER_COMMANDS.QUIT}를 입력하세요.\n`,
};

export const ERROR_MESSAGES = {
  INVALID_NUMBERS: `[ERROR] 입력 숫자는 ${GAME_CONSTANTS.MIN_NUMBER}~${GAME_CONSTANTS.MAX_NUMBER} 사이의 중복되지 않는 ${GAME_CONSTANTS.ANSWER_LENGTH}개의 숫자여야 합니다.`,
  INVALID_COMMAND: `[ERROR] 명령어는 ${USER_COMMANDS.RESTART}이나 ${USER_COMMANDS.QUIT}만 입력할 수 있습니다.`,
};
