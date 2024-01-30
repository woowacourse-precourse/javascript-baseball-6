const GameMessage = Object.freeze({
    GAME_START_MESSAGE: "숫자 야구 게임을 시작합니다.",
    GAME_END_MESSAGE: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    INVALID_USER_INPUT_LENGTH: '[ERROR] 3개의 숫자만 입력해 주세요',
    INVALID_USER_INPUT_NOT_NUMBER: '[ERROR] 숫자만 입력해 주세요',
    INVALID_USER_INPUT_DUPLICATE: '[ERROR] 서로 다른 세 개의 숫자를 입력해 주세요',
    INVALID_RESTART_INPUT: '[ERROR] 1 또는 2의 숫자만 입력해 주세요.',
    INVALID_INPUT: "[ERROR] 잘못된 입력입니다."
});

export default GameMessage;