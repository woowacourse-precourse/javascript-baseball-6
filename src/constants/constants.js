const MESSAGE = {
	START : "숫자 야구 게임을 시작합니다.",
	INPUT : "숫자를 입력해주세요 : ",
	CORRECT : "3스트라이크", 
	SUCCESS : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
	RETRY : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",  
	STRIKE : "스트라이크",
	BALL : "볼",
	NOTHING : "낫싱",
	GAMEOVER : "게임 종료.",
	ERROR : "[ERROR]",
};

const CONSTANT = {
	RETRY : '1',
	END : '2',
	THREESTRIKE : 3,
}

const resultObject = {
	STRIKE: 0,
	BALL: 0,
	NOTHING: false,
}
export {MESSAGE, resultObject, CONSTANT};