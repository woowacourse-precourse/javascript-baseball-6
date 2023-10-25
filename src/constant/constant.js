const OUTPUT_MESSAGES = Object.freeze({
    START_GAME: '숫자 야구 게임을 시작합니다.',
    END_GAME: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RESTART_GAME: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    INPUT_GUIDE: '숫자를 입력해주세요 : ',
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
});

const ERROR_MESSAGES = Object.freeze({
    OUT_OF_RANGE_1_TO_9: '[ERROR] 1부터 9까지의 숫자만 입력해주세요. (공백 없이)',
    INCORRECT_INPUT_COUNT_3: '[ERROR] 3개의 숫자만 입력해주세요.',
    DUPLICATE_NUMBER: '[ERROR] 서로 다른 숫자를 입력해주세요.',
    OUT_OF_RANGE_1_TO_2: '[ERROR] 숫자 1 또는 2만 입력해주세요. (공백 없이)',
    INCORRECT_INPUT_COUNT_1: '[ERROR] 1개의 숫자만 입력해주세요.',
});

export { OUTPUT_MESSAGES, ERROR_MESSAGES };