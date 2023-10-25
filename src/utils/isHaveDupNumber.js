/**
 * 배열 값 중 중복된 숫자가 있는지 판별하는 함수
 * @param {number[]} arr
 * @returns Boolean
 */
const isHaveDupNumber = (arr) => {
	const set = new Set(arr);

	return set.size !== arr.length;
};

export default isHaveDupNumber;
