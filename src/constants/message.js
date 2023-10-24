import SETTING from "./setting.js";

const MESSAGE = {
  INPUT: {
    GUESS_NUMBER: `숫자를 입력해주세요 : `,
    RESTART: `게임을 새로 시작하려면 ${SETTING.COMMAND.RESTART}, 종료하려면 ${SETTING.COMMAND.EXIT}를 입력하세요.\n`

  },
  ERROR: {
    PREFIX: `[ERROR] `,
    DUPLICATED: `숫자가 중복되었습니다. 게임을 종료합니다.`,
    INVALID_LENGTH: `${SETTING.RULE.SIZE}자리의 숫자가 아닙니다. 게임을 종료합니다.`,
    INVALID_RANGE: `${SETTING.RULE.RANGE.MIN}~${SETTING.RULE.RANGE.MAX} 사이의 숫자가 아닙니다. 게임을 종료합니다.`,
    INVALID_RESTART_COMMAND: `${SETTING.COMMAND.RESTART} 또는 ${SETTING.COMMAND.EXIT}를 입력하지 않았습니다. 게임을 종료합니다.`
  }
};

export default Object.freeze(MESSAGE);