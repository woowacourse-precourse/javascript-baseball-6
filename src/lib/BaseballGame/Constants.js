const INPUT_MESSAGE ={
    GUESS: '숫자를 입력해주세요 :',
    COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const COMMAND_HASH = {
    '1' : true,
    '2' : false,
};

const VALIDATION_RULE = {
    VALID_GUESS_LENGTH: 3,
    VALID_COMMAND: Object.keys(COMMAND_HASH),
    GUESS_MIN_VALUE_INCLUSIVE: 1,
    GUESS_MAX_VALUE_INCLUSIVE: 9,
};


const _Error_HEAD = '[ERROR]'
const ERROR_MESSAGE = {
    NOT_AN_INT: `${_Error_HEAD} 입력은 정수형이어야 합니다.`,
    INVALID_GUESS_LENGTH: `${_Error_HEAD} 입력은 ${VALIDATION_RULE.VALID_GUESS_LENGTH} 자리의 정수형이어야 합니다.`,
    INVALID_GUESS_VALUE: `${_Error_HEAD} 입력은 ${VALIDATION_RULE.GUESS_MIN_VALUE_INCLUSIVE}부터 ${VALIDATION_RULE.GUESS_MAX_VALUE_INCLUSIVE} 사이의 정수값이어야 합니다.`,
    INVALID_COMMAND: `${_Error_HEAD} 명령어는 [${VALIDATION_RULE.VALID_COMMAND.join(' ,')}] 중 하나로 제한됩니다.`,
    UNIQUE_CONSTRAINT_VIOLATED: `${_Error_HEAD} 중복된 값은 입력할 수 없습니다.`
};

const OUTPUT_MESSAGE = {
    INIT: '숫자 야구 게임을 시작합니다.',
    NOTHING: '낫싱',
    BALL: '볼',
    STRIKE: '스트라이크',
    WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
};

module.exports = { COMMAND_HASH, ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, VALIDATION_RULE };