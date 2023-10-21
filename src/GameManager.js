const { Console, Random } = require('@woowacourse/mission-utils');
const Strings = require('./resources/Strings');
const Board = require('./Board');


class GameManager {

	_board = null;

	// GameManager를 실행한다.
	play() {
		do {
			this._startGame();
			this._playGame();
			this._finishGame();
		} while (this._willReplay());
	}

	// 게임을 시작한다.
	_startGame() {
		Console.print(Strings.START);
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
		Console.print(Strings.FINISH);
	}

	// 재시작 여부를 입력받는다.
	_willReplay() {
		Console.readLine(Strings.REPLAY, (input) => {
			if (input === '1') return true;
			if (input === '2') return false;

			throw new Error(Strings.ERROR_INPUT_REPLAY)
		});
	}
}
