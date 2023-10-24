/**
 * 고정적으로 사용될 문자열
 */
const STRING = Object.freeze({
    // 게임 시작 안내 문구
    START : "숫자 야구 게임을 시작합니다.",
    
    // 게임 클리어 안내 문구
    CLEAR : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    
    // 게임 클리어 시 재시작 여부를 묻는 문구
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    
    // 게임 진행중 플레이어의 입력을 받는 문구
    INPUT: "숫자를 입력해주세요 : ",
    
    /**
     *  게임 진행중 숫자 판별을 위한 문구들
    */
    BALL: "볼",
    STRIKE: "스트라이크",
    NOTHING: "낫싱",
});
/**
 * 입력값 제한
 */
const INPUT_LIMIT = 3;

/**
 * 랜덤 숫자 범위
 */
const RANDOM_NUMBER_MIN = 1;
const RANDOM_NUMBER_MAX = 9;

/**
 * 에러에 사용될 문자열
 */
const ERRORS = Object.freeze({
    FRONT: "[ERROR]",
    LENGTH: "데이터의 길이가 3이 아닙니다.",
    NUMBER: "데이터의 인덱스 값은 [1~9]범위의 값으로만 이루어져야합니다.",
    DUPLICATION: "중복되는 숫자가 존재합니다.",
    // 게임 클리어 후 재시작 혹은 종료를 위한 입력값을 벗어났을때 발생하는 오류 메세지
    CLEAR_INPUT_NUMBER: "[1,2]를 제외한 숫자는 입력할 수 없습니다."
})
/*
*   게임을 클리어 하기 위한 strike 조건
*/
const STRIKE_GAME_CLEAR = 3;

/**
 * 게임 재시작 및 종료를 위한 사용자 입력 값
 */
const RESTART_NUMBER = 1;
const END_NUMBER = 2;

export{
    STRING,
    INPUT_LIMIT,
    RANDOM_NUMBER_MIN,
    RANDOM_NUMBER_MAX,
    ERRORS,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER,
}
