export const NUMS = {
  REPLAY: '1',
  END: '2',
  ASNWER_LENGTH: 3,
};

export const ERROR = {
  INVALID_CONTROL_NUM: `${NUMS.REPLAY}, ${NUMS.END} 중 1개를 입력하세요.`,
  INVALID_LENGTH: `서로 다른 숫자 ${NUMS.ASNWER_LENGTH}개를 입력하세요.`,
};

export const COMMAND = {
  WELCOME: '숫자 야구 게임을 시작합니다.',
  ASK_NUMBER: '숫자를 입력해주세요 : ',
  ASK_REPLAY: `게임을 새로 시작하려면 ${NUMS.REPLAY}, 종료하려면 ${NUMS.END}를 입력하세요.\n`,
  MATCH: `${NUMS.ASNWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};
