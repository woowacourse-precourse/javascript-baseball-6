import GAME from './Game.js';

const ERROR = Object.freeze({
	prefix: '[ERROR]',
	isNan: '숫자를 입력해주세요.\n',
	size: `${GAME.size}개의 숫자를 입력해주세요.\n`,
	inValidNum: `${GAME.validNumMin} ~ ${GAME.validNumMax} 사이의 숫자를 입력해주세요.`,
	dupNumber: '중복되는 숫자가 없도록 입력해주세요.\n',
	invalidRestartCommand: `새로 시작하려면 ${GAME.restart}, 종료하려면 ${GAME.exit}를 입력해주세요.\n`,
});

export default ERROR;
