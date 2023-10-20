const OUTPUT_MSG = {
    START_GAME : '숫자 야구 게임을 시작합니다.',
    END_GAME : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RE_GAME : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    GAME_OVER : '게임 종료'
};

const ERROR_MSG = {
    COMMAND_ERROR : '[ERROR] 잘못 입력하셨습니다',
    NUMBER_LENGTH_ERROR : '[ERROR] 3자리의 숫자를 입력해주세요.',
    IS_NUMBER : '[ERRROR] 숫자형태로 입력해주세요.'
}

module.exports = { OUTPUT_MSG ,ERROR_MSG } 