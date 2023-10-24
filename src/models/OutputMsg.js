const OUTPUT_MSG = {
    START_GAME : '숫자 야구 게임을 시작합니다.',
    END_GAME : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RE_GAME : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    GAME_OVER : '게임 종료',
    NOTHING : '낫싱',
    STRIKE : '스트라이크',
    BALL :'볼',
};

const ERROR_MSG = {
    COMMAND_ERROR : '[ERROR] 잘못 입력하셨습니다',
    NUMBER_LENGTH_ERROR : '[ERROR] 3자리의 숫자를 입력해주세요.',
    IS_NUMBER : '[ERROR] 숫자형태로 입력해주세요.',
    IS_ZERO : '[ERROR] 1 부터 9 까지의 값을 입력해주세요',
    ANSWER_NUMBER_ERROR : '[ERROR] 정답 숫자가 잘못 입력되었습니다.',
    RE_GAME_NUMBER_ERROR : '[ERROR] 게임을 다시 시작하려면 1, 종료 하려면 2를 입력해주세요.',
    NUMBER_DIFFRENT_ERROR : '[ERROR] 서로 다른 3자리의 수를 입력해주세요.',
    NULL_ERROR : '[ERROR] 빈 값을 입력하였습니다.'
}

module.exports = { OUTPUT_MSG ,ERROR_MSG } 