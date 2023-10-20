const DONE_COUNT = 3;

const RESTART_COMMAND = Object.freeze({
  NEWGAME_NUM: 1,
  END_NUM: 2,
});

export const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.\n",
  INPUT: "숫자를 입력해주세요 : ",
  END: `${DONE_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료\n`,
  RESTART: `게임을 새로 시작하려면 ${RESTART_COMMAND.NEWGAME_NUM}, 종료하려면 ${RESTART_COMMAND.END_NUM}를 입력하세요.\n`,
  getGameResult: ({ ball, strike }) => {
    if (strike === DONE_COUNT) {
      return MESSAGE.END;
    }

    if (!ball && !strike) {
      return `낫싱\n`;
    }

    if (ball && strike) {
      return `${ball}볼 ${strike}스트라이크\n`;
    }

    if (ball && !strike) {
      return `${ball}볼\n`;
    }

    if (!ball && strike) {
      strike === 3
        ? `${strike}스트라이크\n${MESSAGE.END}`
        : `${strike}스트라이크\n`;
    }
  },
});

const ERROR_PREFIX = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  INVALID_RANGE: `${ERROR_PREFIX} 1부터 9까지의 숫자 3개를 입력해주세요.\n`,
  INVALID_INPUT: `${ERROR_PREFIX} 숫자만 입력할 수 있습니다.\n`,
  INVALID_END_COMMAND: `${ERROR_PREFIX} 새 게임 시작(${RESTART_COMMAND.NEWGAME_NUM}) 또는 게임 종료(${RESTART_COMMAND.END_NUM})중 하나의 숫자만 입력해주세요.`,
  DUPLICATION: `${ERROR_PREFIX} 중복된 숫자는 입력할 수 없습니다.\n`,
});
