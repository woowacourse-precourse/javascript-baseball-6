const VALUE = require('./value');

const ERROR = Object.freeze({
    NUMBER_LENGTH: `[ERROR] ${VALUE.LENGTH}자리 숫자를 입력할 수 있습니다.`,
    NUMBER_DUPLICATE: '[ERROR] 중복되는 숫자는 입력할 수 없습니다.',
    NUMBER_RANGE: `[ERROR] ${VALUE.RANGE_MINIMUM}과 ${VALUE.RANGE_MAXIMUM} 사이의 숫자를 입력할 수 있습니다.`,
    OPTION: `[ERROR] ${VALUE.OPTION_RESTART} 혹은 ${VALUE.OPTION_FINISH}를 입력할 수 있습니다.`,
  });
  
  module.exports = ERROR;