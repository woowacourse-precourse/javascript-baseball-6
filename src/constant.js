export const CONTINUE_OPTIONS = {
  START: "1",
  END: "2",
};

export const INFO = {
  START_COMMENT: "숫자 야구 게임을 시작합니다.",
  USER_INPUT_COMMENT: "숫자를 입력해주세요 : ",
  IS_CONTINUE_COMMENT: `게임을 새로 시작하려면 ${CONTINUE_OPTIONS.START}, 종료하려면 ${CONTINUE_OPTIONS.END}를 입력하세요.`,
  CORRECT_COMMENT: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

const ERROR_LABELS = {
  DEFAULT: "ERROR",
};

export const INPUT_ERROR_MESSAGES = {
  IS_NAN: `[${ERROR_LABELS.DEFAULT}] 숫자가 아닌 값을 입력했습니다.`,
  WRONG_LENGTH: `[${ERROR_LABELS.DEFAULT}] 세 자리의 숫자를 입력해야 합니다.`,
  IS_DUPLICATE: `[${ERROR_LABELS.DEFAULT}] 중복되는 숫자가 존재합니다.`,
};

export const CONTINUE_ERROR_MESSAGES = {
  NOT_IN_OPTIONS: `[${ERROR_LABELS.DEFAULT}] "${CONTINUE_OPTIONS.START}" 또는 "${CONTINUE_OPTIONS.END}"만 입력할 수 있습니다.`,
};
