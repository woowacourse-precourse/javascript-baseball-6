export const GUIDE_MESSAGES = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  ENTER_USER_NUMBER: '숫자를 입력해주세요 : ',
  ENTER_RESTART_NUMBER: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
  GAME_FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  NONE_MATCHING: '낫싱',
});

export const ERROR_MESSAGES = Object.freeze({
  NOT_DIGIT_IN_RANGE: '[ERROR] 사용자의 입력값의 각 자리는 1~9 사이의 숫자로 이루어져야 합니다.',
  NOT_THREE_DIGITS: '[ERROR] 사용자의 입력값은 3자리 수이어야 합니다.',
  DUPLICATE: '[ERROR] 중복된 숫자가 존재합니다.',
  NOT_CORRECT_RESTART_NUMBER: `[ERROR] 재시작/종료를 구분하는 올바른 입력값이 아닙니다.`,
});
