const COMMAND = {
  START: '숫자 야구 게임을 시작합니다.',
  END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  ENTER_NUMBER: '숫자를 입력해주세요 : ',
  ASK: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  RESTART: '1',
};

const COMPUTER = {
  START_NUMBER: 1,
  END_NUMBER: 9,
  STORAGE_LIMIT: 3,
};

const GAME = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  STRIKE_OUT: 3,
  ZERO: 0,
};

const ERROR = {
  INVALID_NUMBER: '숫자가 잘못된 형식입니다.',
};

export { COMMAND, COMPUTER, GAME, ERROR };
