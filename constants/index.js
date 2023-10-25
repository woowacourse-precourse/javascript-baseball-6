const GUIDE_MESSAGE = Object.freeze({
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    PLAYER_WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
});

const REGEXP_PTTERN = Object.freeze({
    THREE_DIGIT_PATTERN: new RegExp(/^(?!.*(.).*\1)\d{3}$/),
})

const ERROR_MESSAGE = Object.freeze({
    INVAILD_INPUT_MESSAGE: '[ERROR] 서로 다른 3자리의 수를 입력해주세요.',
    INVALID_RESTART_MESSAGE: '[ERROR] 1 또는 2를 입력해주세요.',
});

const BALL_COUNT = Object.freeze({
    BALL: '볼',
    STRIKE: '스트라이크',
    OUT: '낫싱',
});

const SETTING = Object.freeze({
    MIN_RANGE: 1,
    MAX_RANGE: 9,
    NUMBER_OF_RANDOM: 3,
    WINNIN_NUMBER: 3,
});

const RESTART_GAME_NUMBERS = Object.freeze({
    RESTART: '1',
    END: '2',
});

export { GUIDE_MESSAGE, REGEXP_PTTERN, ERROR_MESSAGE, BALL_COUNT, SETTING, RESTART_GAME_NUMBERS }