import ERROR from '../constants/Error.js';
import GAME from '../constants/Game.js';
import RestartCommandError from '../error/RestartCommandError.js';
import isNan from '../utils/isNan.js';
import restartCommandValidation from '../validation/restartCommandValidation.js';

// 다른 커멘드가 추가될 수 있으므로 클래스로 따로 분리하였다.
// 또한 입력받은 커맨드를 기억해야한다는 요구사항이 들어올 수도 있다.
class GameConsole {
	constructor() {
		this.currentCommand = this.currentCommand;
	}

	setRestartCommand(input) {
		restartCommandValidation(input); // 에러 발생 가능성 위치

		this.currentCommand = parseInt(input);
	}
}

export default GameConsole;
