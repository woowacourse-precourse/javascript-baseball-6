const Constants = {
    INPUT_MESSAGE: {
        GUESS: `숫자를 입력해주세요 :`,
        COMMAND: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
    },

    VALIDATION_RULE: {
        VALID_GUESS_LENGTH: 3,
        VALID_COMMAND: [0, 1]
    },

    ERROR_MESSAGE: {
        NOT_AN_INT: `입력은 정수형이어야 합니다.`,
        INVALID_GUESS_LENGTH: `입력은 ${VALIDATION_RULE.VALID_GUESS_LENGTH} 자리의 정수형이어야 합니다.`,
        INVALID_COMMAND: `명령어는 [${VALIDATION_RULE.VALID_COMMAND.join(' ')}] 중 하나로 제한됩니다.`
    },

    OUTPUT_MESSAGE: {
        INIT: `숫자 야구 게임을 시작합니다.`,
        BALL: `볼`,
        STRIKE: `스트라이크`,
        SUCCESS: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`
    }
}

module.exports = Constants