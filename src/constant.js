export const CORRECT_NUMBER = 3;

export const ERROR_MESSAGE = {
  INVALID_CHOICE: '[ERROR] : 올바르지 않은 입력입니다. 1 또는 2를 입력해주세요.',
  INVALID_INPUT: '[ERROR] : 잘못된 입력입니다. 게임을 종료합니다',
  INVALID_NUMBER: '[ERROR] : 유효하지 않은 입력입니다.'
};

export const PROMPT_MESSAGE = {
  PRESS_NUMBER: '숫자를 입력해주세요 : ',
  CHOICE_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
};

export const ALERT_MESSAGE = {
  resultMessage(strike, ball) {
    if (strike === CORRECT_NUMBER) {
      return `${CORRECT_NUMBER}스트라이크\n${CORRECT_NUMBER}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }

    if (strike === 0 && ball === 0) {
      return '낫싱';
    }

    if (strike > 0 || ball > 0) {
      return `${ball ? ball + '볼' : ''} ${strike ? strike + '스트라이크' : ''}`.trim();
    }
  }, 
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_OVER: '게임 종료'
};