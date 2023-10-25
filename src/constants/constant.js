const Message = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  GET_NUMBER: '숫자를 입력해주세요 : ',
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',

  ERROR: {
    SPECIAL_CHAR: '[ERROR] 입력하신 숫자에 특수문자가 포함되어 있습니다!',
    LENGTH: '[ERROR] 3자리 숫자를 입력해주세요!',
    DUPLICATE: '[ERROR] 중복되지 않은 숫자를 입력해 주세요!',
    SPACE: '[ERROR] 입력하신 숫자에 공백이 포합되어 있습니다!',
    RANGE: '[ERROR] 1~9 사이의 숫자를 입력해 주세요!',
  },
});

export default Message;
