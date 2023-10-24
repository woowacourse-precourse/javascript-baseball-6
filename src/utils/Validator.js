import { NUMBER, COMMAND } from './Constant.js';

class Validator {
  static validateNumber(userNumbers) {
    if (/\s/.test(userNumbers.trim())) {
      throw new Error('[ERROR] 중간에 공백은 입력할 수 없습니다.');
    }
    if (!/^\d+$/.test(userNumbers.trim())) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (userNumbers.trim().length !== 3) {
      throw new Error(`[ERROR] 길이가 ${NUMBER.LENGTH}이여야 합니다.`);
    }
    if (userNumbers.includes('0')) {
      throw new Error('[ERROR] 0이 포함되어서는 안됩니다.');
    }
    if (new Set(userNumbers).size !== userNumbers.length) {
      throw new Error('[ERROR] 중복된 숫자를 입력해서는 안됩니다.');
    }
  }

  static validateCommand(userCommand) {
    if (userCommand !== COMMAND.REPLAY && userCommand !== COMMAND.FINISH) {
      throw new Error(
        `[ERROR] ${COMMAND.REPLAY}(재시작) 또는 ${COMMAND.FINISH}(종료)를 입력해야 합니다.`
      );
    }
  }
}

export default Validator;
