class Message {
  constructor() {}

  // 게임 메시지
  static START = '숫자 야구 게임을 시작합니다.';
  static INPUT_BASEBALL_NUMBER = '숫자를 입력해주세요 : ';

  // 에러 메시지
  static COMMON_ERROR_MESSAGE = '[ERROR] ';
  static ERROR_RANGE = `${Message.COMMON_ERROR_MESSAGE}숫자는 0을 제외한 1~9까지 입력 가능합니다.`;
  static ERROR_LENGTH = `${Message.COMMON_ERROR_MESSAGE}3자리 수를 입력해주세요.`;
  static ERROR_DUPLICATE = `${Message.COMMON_ERROR_MESSAGE}서로 다른 숫자를 입력해주세요.`;
}

export default Message;
