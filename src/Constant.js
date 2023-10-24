export const COMMAND = {
	START: '숫자 야구 게임을 시작합니다.',
	RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
	END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
	INPUT: '숫자를 입력해주세요 : ',
};

export const GAME = {
	PLAYING: 'PLAYING',
	FINISH: 'FINISH',
	NUMBER_LENGTH: 3,
};

export const ERROR = {
	NOT_INPUT: '[ERROR] 입력이 되지 않았습니다.',
	NOT_A_NUMBER: '[ERROR] 숫자가 아닙니다.',
	DUPLICATED_NUMBER: '[ERROR] 중복된 숫자가 있습니다.',
	INVALID_NUMBER: '[ERROR] 숫자가 잘못된 형식입니다.',
	NOT_INVALID_LENGTH: '[ERROR] 세 글자 숫자가 아닙니다.',
};
