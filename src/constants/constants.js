const MESSAGE = {
	start : '숫자 야구 게임을 시작합니다.',
	input : '숫자를 입력해주세요 : ',
	correct : '3스트라이크', 
	success : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
	retry : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',  
	strike : '스트라이크',
	ball : '볼',
	nothing : '낫싱',
	gameover : '게임 종료.',
	error : '[ERROR]',
};

const CONSTANT = {
	retry : '1',
	end : '2',
	threestrike : 3,
}

const RESULTOBJECT = {
	strike: 0,
	ball: 0,
}

export {MESSAGE, RESULTOBJECT, CONSTANT};