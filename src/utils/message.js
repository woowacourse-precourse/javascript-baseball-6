const ERROR_MESSAGES = Object.freeze({
    IS_GAME_COMMAND_VALID : "[ERROR] 게임 종료 옵션을 선택하려면 1을 입력하고 게임 재시작 옵션을 선택하려면 2를 입력하세요.",
    IS_INVALID_INPUT: "[ERROR] 유효하지 않은 입력입니다. 다시 시도해주세요.",
});

const GAME_MESSAGES = Object.freeze({
    GAME_START: "숫자 야구 게임을 시작합니다.",
    GAME_END: "3개의 숫자를 모두 맞히셨습니다! ",
    GAME_QUIT: "게임 종료",
    ENTER_NUMBER: "숫자를 입력해주세요: ",
    START_OR_QUIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

export { ERROR_MESSAGES, GAME_MESSAGES }