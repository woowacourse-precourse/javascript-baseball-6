const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT_NUMBER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  THREE_STRKIE: '3스트라이크',
  NOTHING: '낫싱',
};
const ERROR_MESSAGE = {
  INPUT_THREE_NUMBER: '[ERROR] 세 자리를 입력하세요.',
  INPUT_ONLY_NUMBER: '[ERROR] 숫자를 입력하세요.',
  INPUT_NUMBER_IN_RANGE: '[ERROR] 0을 포함할 수 없습니다.',
  INPUT_DIFFERENT_NUMBER: '[ERROR] 서로 다른 숫자를 입력하세요.',
  INPUT_ONE_OR_TWO: '[ERROR] 1 혹은 2를 입력하세요.',
};

const resultMessage = (ball, strike) => {
  return `${ball}볼 ${strike}스트라이크`;
};

export { MESSAGE, ERROR_MESSAGE, resultMessage };
