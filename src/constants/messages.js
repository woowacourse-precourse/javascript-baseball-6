export const DONE_COUNT = 3;

const RESTART_COMMAND = Object.freeze({
  NEWGAME: 1,
  QUIT: 2,
});

export const MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  END: `${DONE_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART: `게임을 새로 시작하려면 ${RESTART_COMMAND.NEWGAME}, 종료하려면 ${RESTART_COMMAND.QUIT}를 입력하세요.\n`,
  getGameResult: ({ ball, strike }) => {
    if (!ball && !strike) {
      return `낫싱`;
    }

    if (ball && strike) {
      return `${ball}볼 ${strike}스트라이크`;
    }

    if (ball && !strike) {
      return `${ball}볼`;
    }

    if (!ball && strike) {
      return strike === DONE_COUNT ? `${strike}스트라이크\n${MESSAGE.END}` : `${strike}스트라이크`;
    }
  },
});

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
  INVALID_RANGE: `${ERROR_PREFIX} 1부터 9까지의 숫자 3개를 입력해주세요.\n`,
  INVALID_INPUT: `${ERROR_PREFIX} 숫자 외의 문자 및 공백은 입력할 수 없습니다.\n`,
  INVALID_END_COMMAND: `${ERROR_PREFIX} 새 게임 시작(${RESTART_COMMAND.NEWGAME_NUM}) 또는 게임 종료(${RESTART_COMMAND.END_NUM})중 하나의 숫자만 입력해주세요.`,
  DUPLICATION_INPUT: `${ERROR_PREFIX} 중복된 숫자는 입력할 수 없습니다.\n`,
  INVALID_COPUTER_RANGE: `${ERROR_PREFIX} 1부터 9까지 범위의 숫자 3개로 이루어져야 합니다.\n`,
  INVALID_COPUTER_NUMBER: `${ERROR_PREFIX} 번호는 숫자로만 이루어져야 합니다.\n`,
  DUPLICATION_COMPUTER_NUMBER: `${ERROR_PREFIX} 중복된 숫자는 사용할 수 없습니다.\n`,
});
