import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';
import Board from './Board';


class GameManager {

	_board = null;

	// GameManager를 실행한다.
	async play() {
		do {
			this._startGame();
			await this._playGame();
			this._finishGame();
		} while (await this._willReplay());
	}

	// 게임을 시작한다.
	_startGame() {
		Console.print(Strings.START);
		this._board = new Board();
		this._board._setAnswer();
	}

	// 정답을 맞출 때까지 게임을 진행한다.
	async _playGame() {
		do {
			await this._board.getUserGuess();
			this._board.checkUserGuess();
			this._board.printFeedback();
		} while (this._board.isCorrectAnswer());
	}

	// 게임을 마무리한다.
	_finishGame() {
		Console.print(Strings.FINISH);
	}

	// 재시작 여부를 입력받는다.
	async _willReplay() {
		Console.print(Strings.REPLAY);
		const input = await Console.readLineAsync();
		if (input === '1') return true;
		if (input === '2') return false;
		throw new Error(Strings.ERROR_INPUT_REPLAY)
	}
}

export default GameManager;
