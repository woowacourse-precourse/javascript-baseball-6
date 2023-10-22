/**
 * @typedef {Object} Count
 * @property {number} strike
 * @property {number} ball
 */
class Counter {
	/**
	 * @param {Values} values - 사용자의 입력 값인 input과 정답인 answer로 구성
	 * @returns {Count} - 현재 입력 값의 strike, ball의 갯수
	 */
	count(values) {
		const { input, answer } = values;
		let [strike, ball] = [0, 0];

		for (let i = 0; i < answer.length; i++) {
			if (answer.includes(input[i])) {
				answer[i] === input[i] ? (strike += 1) : (ball += 1);
			}
		}

		const count = { strike, ball };
		return count;
	}
}

export default Counter;
