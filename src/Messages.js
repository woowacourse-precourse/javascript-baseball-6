const MESSAGES = Object.freeze({
  MSG_START: '숫자 야구 게임을 시작합니다.',
  MSG_NOTHING: '낫싱',
  MSG_STRIKE: '스트라이크',
  MSG_BALL: '볼',
  MSG_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  INPUT_NUM: '숫자를 입력해주세요 : ',
  INPUT_MENU: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  ERR_INVALID_NUM: '[ERROR] 숫자가 잘못된 형식입니다.',
  ERR_NOT_THREE_NUM: '[ERROR] 3개의 숫자를 입력해야 합니다.',
  ERR_OUT_OF_RANGE_NUM: '[ERROR] 1~9 사이의 숫자를 입력해야 합니다.',
  ERR_DUPLICATE_NUM: '[ERROR] 중복되지 않은 3개의 숫자를 입력해야 합니다.',
  ERR_INVALID_MENU: '[ERROR] 1 또는 2를 입력해야 합니다.',
});

export default MESSAGES;
