const REGEX_NUM = Object.freeze(/^[0-9]+$/);

const validate ={
	isNum(input) {
		if (input.match(REGEX_NUM) === null) {
			throw new Error('[ERROR] 입력값은 3가지 숫자여야 합니다.');
		}
	},

	sizeCheck(size, input) {
		if (input.length !== size) {
			throw new Error('[ERROR] 입력값은 3가지 숫자여야 합니다.');
		}
	},
	
	isDuplicatedNumber(input) {
		const numsSet = new Set(input);
		if (input.length !== numsSet.size) {
			throw new Error('[ERROR] 입력값은 중복된 숫자가 올 수 없습니다.');
		}
	},

}


export default validate;