export const GAME_CONSTANTS = {
  minNumber: 1,
  maxNumber: 9,
  answerLength: 3,
  strikeOutCount: 3,
};

export const USER_COMMANDS = {
  restart: "1",
  quit: "2",
};

export const GAME_MESSAGES = {
  start: "숫자 야구 게임을 시작합니다.",
  finish: `${GAME_CONSTANTS.answerLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  inputNumbers: "숫자를 입력해주세요 : ",
  inputCommands: `게임을 새로 시작하려면 ${USER_COMMANDS.restart}, 종료하려면 ${USER_COMMANDS.quit}를 입력하세요.\n`,
};
