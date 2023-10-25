const LOG_MESSAGE = Object.freeze({
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  END_GAME: '게임 종료',
  RESTART_INPUT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const HINT_MESSAGE = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTING: '낫싱',
  ALL_STRIKE: '3스트라이크',
});

const GAME_SELECT = Object.freeze({
  RESTART: '1',
  END: '2',
});

const ERROR_MESSAGE = Object.freeze({
  INCORRECT_VALUE: '[ERROR] 숫자가 잘못된 형식입니다.',
});

export {
  LOG_MESSAGE, HINT_MESSAGE, GAME_SELECT, ERROR_MESSAGE,
};
