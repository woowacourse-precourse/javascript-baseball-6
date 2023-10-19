/**
 * 게임에 사용되는 상수들을 모아놓은 파일
 * - 다음 프로퍼티가 존재합니다.
 * - START, RESTART, INPUT_NUMBER, CORRECT, ERROR, STRIKE, BALL, NOTHING
 */
const LOG = {
	/**
	 * 게임 시작 시 출력되는 메시지
	 */
	START: "숫자 야구 게임을 시작합니다.",

	/**
	 * 게임을 재시작할지 묻는 메시지
	 */
	RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",

	/**
	 * 사용자 입력을 받는 메시지
	 */
	INPUT_NUMBER: "숫자를 입력해주세요 : ",

	/**
	 * 정답을 맞혔을 때 출력되는 메시지
	 */
	CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",

	/**
	 * 에러 발생 시 출력되는 메시지
	 */
	ERROR: "[ERROR]",

	STRIKE: "스트라이크",
	BALL: "볼",
	NOTHING: "낫싱",
};

/**
 * 사용자 입력의 최대 길이
 */
const MAX_INPUT_LENGTH = 3;

/**
 * 스트라이크의 최대 개수
 */
const MAX_STRIKE_COUNT = 3;

/**
 * 랜덤 숫자의 최소 값
 */
const MIN_RANDOM_NUMBER = 1;

/**
 * 랜덤 숫자의 최대 값
 */
const MAX_RANDOM_NUMBER = 9;

/**
 * 게임을 재시작할 경우, 사용자 입력
 */
const RESTART_NUMBER = 1;

/**
 * 게임을 종료할 경우, 사용자 입력
 */
const END_NUMBER = 2;

export {
	LOG,
	MAX_INPUT_LENGTH,
	MAX_STRIKE_COUNT,
	MIN_RANDOM_NUMBER,
	MAX_RANDOM_NUMBER,
	RESTART_NUMBER,
	END_NUMBER,
};
