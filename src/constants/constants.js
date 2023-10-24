const ANSWER_LENGTH = 3;

const GAME_STATUS = {
  RESTART: '1',
  STOP: '2',
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: `${ANSWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_STOP: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  STOP: `게임 종료`,
};

export default { MESSAGE, GAME_STATUS, ANSWER_LENGTH };
