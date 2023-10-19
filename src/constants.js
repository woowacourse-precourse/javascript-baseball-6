const LOG = {
	START: "숫자 야구 게임을 시작합니다.",
	RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
	INPUT_NUMBER: "숫자를 입력해주세요 : ",
	CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
	STRIKE: "스트라이크",
	BALL: "볼",
	NOTHING: "낫싱",
	ERROR: "[ERROR]",
};

const MAX_INPUT_LENGTH = 3;
const MAX_STRIKE_COUNT = 3;

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 9;

const RESTART_NUMBER = 1;
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
