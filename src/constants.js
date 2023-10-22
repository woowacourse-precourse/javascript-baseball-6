export const LOGS = {
    INPUT_PROMPT: '숫자를 입력해주세요',
    INPUT_PROMPT2: '',
    RESTART_PROMPT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',

    GAME_START: '숫자 야구 게임을 시작합니다.',
    GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    NOTHING: '낫싱',
    
    INVALID_INPUT1: `[ERROR] : 서로 다른 세자리 자연수를 입력해야합니다.\n게임을 종료합니다.`,
    INVALID_INPUT2: `[ERROR] : 1 혹은 2를 입력해야합니다.\n게임을 종료합니다.`,
    END: '게임을 종료합니다.'
}

export const STRIKE_END_POINTS = 3; // 스트라이크로 이길 필요한 스트라이크 개수
export const INPUT_LENGTH = 3; // 입력 숫자의 길이
export const MAX_NUMBER = 9; // 허용되는 숫자의 최댓값
export const MIN_NUMBER = 1; // 허용되는 숫자의 최솟값