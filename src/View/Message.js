class Message {
  constructor() {}

  // 게임 메시지
  static START = '숫자 야구 게임을 시작합니다.';
  static INPUT_BASEBALL_NUMBER = '숫자를 입력해주세요 : ';
  static THREE_STRIKE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  static RETRY = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

  // 에러 메시지
  static COMMON_ERROR_MESSAGE = '[ERROR] ';
  static ERROR_NAN = `${Message.COMMON_ERROR_MESSAGE}숫자를 입력해야합니다.`;
  static ERROR_RANGE = `${Message.COMMON_ERROR_MESSAGE}0을 제외한 1~9사이 숫자를 입력해야 합니다.`;
  static ERROR_LENGTH = `${Message.COMMON_ERROR_MESSAGE}3자리 수를 입력해야 합니다.`;
  static ERROR_DUPLICATE = `${Message.COMMON_ERROR_MESSAGE}중복 없이 서로 다른 숫자를 입력해야 합니다.`;
  static ERROR_ONEORTWO = `${Message.COMMON_ERROR_MESSAGE}'1' 또는 '2'만 입력 가능합니다.`;
}

export default Message;
