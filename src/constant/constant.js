const BALL_RESULT_TEXT = {
    NOTHING: '낫싱',
    BALL : '볼',
    STRIKE: '스트라이크',
};

const GAME_PROGRESS_TEXT = {
    GAME_START_MESSAGE: '숫자 야구 게임을 시작합니다.',
    GAME_USER_INPUT_MESSAGE: '숫자를 입력해주세요 : ',
    GAME_ANSWER_MESSAGE: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    GAME_RETRY_MESSAGE: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
};

const ERROR = {
    INVALID_USER_INPUT: '[ERROR] 숫자가 잘못된 형식입니다.',
};

export default  {BALL_RESULT_TEXT, GAME_PROGRESS_TEXT, ERROR };