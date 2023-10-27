export const COMMENT = Object.freeze({
	START: '숫자 야구 게임을 시작합니다.',
	END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
	ASK_INPUT: '숫자를 입력해주세요: '
});

export const RESULT = Object.freeze({
	BALL: '볼',
	STRIKE: '스트라이크',
	NOTHING: '낫싱',
	ALL_STRIKE: '3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료 '
});

export const DECISION = Object.freeze({
	RESTART: '1',
	END: '2'
});

export const ERROR = Object.freeze({
	NAME: '[ERROR]',
	MESSAGE: {
		INVALID_INPUT: '유효한 입력값이 아닙니다.',
		ONLY_THREE: '3 글자만 입력해주세요.',
		ONLY_ONE_TO_NINE: '1부터 9까지의 자연수만 입력해주세요.',
		ONLY_ONE_TO_TWO: '1 또는 2 중에서 입력해주세요.'
	}
});
