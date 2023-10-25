const ANSWER_LENGTH = 3;

const GAME = {
  RESTART: '1',
  STOP: '2',
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: `${ANSWER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_STOP: `게임을 새로 시작하려면 ${GAME.RESTART}, 종료하려면 ${GAME.STOP}를 입력하세요.`,
  STOP: `게임 종료`,
  ERROR: {
    INPUT: '[ERROR] 숫자가 잘못된 형식입니다.',
    RESTART: `[ERROR] 숫자가 ${GAME.RESTART} 또는 ${GAME.STOP}가 아닙니다.`,
  },
};

export default { MESSAGE, GAME, ANSWER_LENGTH };
