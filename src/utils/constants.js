export const GAME_CONSTANTS = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  ANSWER_LENGTH: 3,
  STRIKE_OUT_COUNT: 3,
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
