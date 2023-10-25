import GAME from '../constants/Game.js';

/**
 * 배열 값 중 게임의 유효 숫자 범위를 벗어난 요소가 있는지 판별하는 함수
 * @param {number[]} arr
 * @returns Boolean
 */
const isHaveInvalidNum = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const curNum = arr[i];
		if (GAME.invalidNumArr.includes(curNum)) return true;
	}

	return false;
};

export default isHaveInvalidNum;
