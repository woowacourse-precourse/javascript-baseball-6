class Validator {
  static validateNumber(userNumbers) {
    if (/\s/.test(userNumbers.trim())) {
      throw new Error('[ERROR] 중간에 공백은 입력할 수 없습니다.');
    }
    if (isNaN(Number(userNumbers))) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (userNumbers.trim().length !== 3) {
      throw new Error('[ERROR] 길이가 3이여야 합니다.');
    }
    if (userNumbers.includes('0')) {
      throw new Error('[ERROR] 0이 포함되어서는 안됩니다.');
    }
    if (new Set(userNumbers).size !== userNumbers.length) {
      throw new Error('[ERROR] 중복된 숫자를 입력해서는 안됩니다.');
    }
  }

  static validateCommand(userCommand) {
    if (userCommand !== '1' && userCommand !== '2') {
      throw new Error('[ERROR] 1(재시작) 또는 2(종료)를 입력해야 합니다.');
    }
  }
}

export default Validator;
