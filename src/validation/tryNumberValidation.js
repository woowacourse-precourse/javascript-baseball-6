import ERROR from '../constants/Error.js';
import GAME from '../constants/Game.js';
import TryNumberError from '../error/TryNumberError.js';
import isHaveDupNumber from '../utils/isHaveDupNumber.js';
import isHaveInvalidNum from '../utils/isHaveInvalidNum.js';
import isNan from '../utils/isNan.js';

const isValidTryNumber = (input) => {
	if (isNan(input)) throw new TryNumberError(ERROR.isNan); // 숫자가 아닌 경우
	if (input.length !== GAME.size) throw new TryNumberError(ERROR.size); // 입력 길이가 안맞는 경우
	if (isHaveInvalidNum(input)) throw new TryNumberError(ERROR.inValidNum); // 유효 숫자 범위 벗어난 경우
	if (isHaveDupNumber(input)) throw new TryNumberError(ERROR.dupNumber); // 중복되는 숫자 입력인 경우
};

export default isValidTryNumber;
