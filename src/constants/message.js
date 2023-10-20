/*
게임에 사용되는 문구들을 모아놓은 파일
START, RESTART, INPUT_NUM, CORRECT, ERROR, STRIKE, BALL, NOTHING
 */

const LOG = {

	 // 게임 시작 문구
	START: "숫자 야구 게임을 시작합니다.",

	 // 게임을 재시작 문구
	RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",


	// 사용자 입력 문구
	INPUT_NUM: "숫자를 입력해주세요 : ",

	// 정답(게임 종료) 문구
	CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",


	//에러 문구
	ERROR: "[ERROR]",


	//결과 문구
	STRIKE: "스트라이크",
	BALL: "볼",
	NOTHING: "낫싱",
};

export {LOG}