import { INPUT_LENGTH } from './Constants';

export const checkIsReplay = (input) => {
	if (!['1', '2'].includes(input))
		throw new Error('[ERROR] 1 또는 2만 입력가능합니다.');
};

export const checkIsPitch = (input) => {
	if (input.length !== INPUT_LENGTH) {
		throw new Error(`[ERROR] 입력가능한 길이는 ${INPUT_LENGTH}입니다.`);
	}

	const inputArray = [];
	input.split().forEach((element) => {
		if (inputArray.includes(parseInt(element))) {
			throw new Error('[ERROR] 중복된 숫자가 입력되었습니다.');
		}
		inputArray.push(parseInt(element));
	});
	if (inputArray.includes(NaN)) {
		throw new Error('[ERROR] 숫자만 입력가능합니다.');
	}
};
