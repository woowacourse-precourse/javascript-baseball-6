/**
 * 입력으로 들어온 자료가 숫자인지 아닌지 판별하는 함수
 * @param {any[] | string} input
 * @returns Boolean
 */
const isNan = (input) => {
	if (Array.isArray(input)) return isNaN(input.join(''));
	if (typeof input === 'string') return isNaN(input);
};

export default isNan;
