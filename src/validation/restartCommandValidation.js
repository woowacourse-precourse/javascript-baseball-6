import ERROR from '../constants/Error.js';
import GAME from '../constants/Game.js';
import RestartCommandError from '../error/RestartCommandError.js';
import isNan from '../utils/isNan.js';

const restartCommandValidation = (input) => {
	if (isNan(input)) throw new RestartCommandError(ERROR.isNan);
	if (parseInt(input) !== GAME.restart && parseInt(input) !== GAME.exit)
		throw new RestartCommandError(ERROR.invalidRestartCommand);

	return parseInt(input); // 형태 변화도 같이 해서 준다. 단순한 변환이므로 함께했다.
};

export default restartCommandValidation;
