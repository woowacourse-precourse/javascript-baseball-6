const ERROR = Object.freeze({
  INVALID_TYPE: '숫자가 아닙니다.',
  INVALID_DIGITS: '숫자는 3자리여야 합니다.',
  OUT_OF_RANGE: '숫자는 1~9 사이여야 합니다.',
});

const READ = Object.freeze({
  USER_NUMBER: '숫자를 입력해주세요 : ',
});

export const MESSAGE = Object.freeze({
  READ,
  ERROR,
  START_GAME: '숫자 야구 게임을 시작합니다.',
});
