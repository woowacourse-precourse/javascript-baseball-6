const numbers = Object.freeze({
  length: '[ERROR] 입력하신 숫자가 3자리가 아닙니다.',
  notANumber: '[ERROR] 숫자를 입력해주세요.',
  negative: '[ERROR] 숫자가 음수입니다. 다시 입력해주세요.',
  duplicated: '[ERROR] 숫자가 중복되었습니다. 다시 입력해주세요.',
  empty: '[ERROR] 숫자를 입력해주세요.',
});

const ERROR = Object.freeze({
  numbers,
});

export default ERROR;
