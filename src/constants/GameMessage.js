import GAME from './Game.js';

// TODO: freeze 유효성 알아보기
const GAME_MESSAGE = Object.freeze({
	start: '숫자 야구 게임을 시작합니다.\n',
	getNumber: '숫자를 입력해주세요 : ',
	nothing: '낫싱',
	strike: '스트라이크',
	ball: '볼',
	clear: `${GAME.size}개의 숫자를 모두 맞히셨습니다!`,
	exit: '게임 종료',
	restart: `게임을 새로 시작하려면 ${GAME.restart}, 종료하려면 ${GAME.exit}를 입력하세요.\n`,
});

export default GAME_MESSAGE;
