import GAME from '../constants/Game.js';

const isHaveInvalidNum = (input) => {
	for (let i = 0; i < input.length; i++) {
		const curNum = input[i];
		if (GAME.invalidNumArr.includes(curNum)) return true;
	}

	return false;
};

export default isHaveInvalidNum;
