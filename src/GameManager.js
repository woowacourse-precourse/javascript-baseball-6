const { Console, Random } = require('@woowacourse/mission-utils');
const Board = require('./Board');


class GameManager {

	_isPlaying = true;
	_board = null;

	// GameManager를 실행한다.
	play() {
		while (this._isPlaying) {
			this._startGame();
			this._playGame();
			this._finishGame();
		}
	}

	// 게임을 시작한다.
	_startGame() {
		// TODO: 게임 시작 메시지 출력
		this._board = new Board();
	}

	// 정답을 맞출 때까지 게임을 진행한다.
	_playGame() {
		// TODO: 추측 요청 메시지 출력
		this._board.getUserGuess();
		this._board.checkUserGuess();
		this._board.printFeedback();
	}

	// 게임을 마무리한다.
	_finishGame() {
		// TODO: 게임 종료 메시지
		this._isPlaying = this._willReplay()
	}

	// 재시작 여부를 입력받는다.
	_willReplay() {
		// TODO: 재경기 안내 메시지 추가
		Console.readLine('', (input) => {
			if (input === '1') return true;
			if (input === '2') return false;

			// TODO: Error 메시지 추가
			throw new Error("Temp: [ERROR] invalid input value")
		});
	}
}