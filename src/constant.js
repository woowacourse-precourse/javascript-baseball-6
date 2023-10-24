export const CONTINUE_OPTIONS = {
  start: "1",
  end: "2",
};

export const INFO = {
  start_comment: "숫자 야구 게임을 시작합니다.",
  user_input_comment: "숫자를 입력해주세요 : ",
  is_continue_comment: `게임을 새로 시작하려면 ${CONTINUE_OPTIONS.start}, 종료하려면 ${CONTINUE_OPTIONS.end}를 입력하세요.`,
  correct: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

const ERROR_LABELS = {
  default: "ERROR",
};

export const INPUT_ERROR_MESSAGES = {
  is_nan: `[${ERROR_LABELS.default}] 숫자가 아닌 값을 입력했습니다.`,
  wrong_length: `[${ERROR_LABELS.default}] 세 자리의 숫자를 입력해야 합니다.`,
  is_duplicate: `[${ERROR_LABELS.default}] 중복되는 숫자가 존재합니다.`,
};

export const CONTINUE_ERROR_MESSAGES = {
  not_in_options: `[${ERROR_LABELS.default}] "${CONTINUE_OPTIONS.start}" 또는 "${CONTINUE_OPTIONS.end}"만 입력할 수 있습니다.`,
};
