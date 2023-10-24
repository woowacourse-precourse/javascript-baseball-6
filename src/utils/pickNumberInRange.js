import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 범위 최소 ~ 최대의 범위로 지정 길이만큼의 랜덤 수열을 반환하는 함수
 * @param {number} min 범위 최소
 * @param {number} max 범위 쵀대
 * @param {number} size 결과 배열 길이
 * @returns 결과 배열
 */
const pickNumberInRange = (min, max, size) => {
	const numberArr = [];

	while (numberArr.length < size) {
		const number = MissionUtils.Random.pickNumberInRange(min, max);
		if (!numberArr.includes(number)) numberArr.push(number);
	}

	return numberArr;
};

export default pickNumberInRange;
