/**
 * 배열의 값이 모두 0인지 아닌지 판별하는 함수
 * @param {number[]} arr 숫자 배열
 * @returns Boolean
 */
const isAllZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) return false;
	}
	return true;
};

export default isAllZero;
