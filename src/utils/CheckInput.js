import { INPUT_LENGTH } from './Constants';

export const checkIsReplay = (input) => {
	if (!['1', '2'].includes(input))
		throw new Error('[ERROR] 1 또는 2만 입력가능합니다.');
};

export const checkIsValid = (input) => {
	if (input.length !== INPUT_LENGTH) {
		throw new Error(`[ERROR] 입력가능한 길이는 ${INPUT_LENGTH}입니다.`);
	}
	if (new Set(input).size !== input.length) {
		throw new Error('[ERROR] 중복된 값이 입력되었습니다.');
	}

	if (input.includes(NaN)) {
		throw new Error('[ERROR] 숫자만 입력가능합니다.');
	}
};
