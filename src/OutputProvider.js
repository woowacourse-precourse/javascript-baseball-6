/**
 * @typedef {Object} GameResult
 * @property {"Correct" | "Incorrect"} result
 * @property {string} message
 */

class OutputProvider {
	/**
	 *
	 * @param {{strike: number, ball: number}} counts - 스트라이크와 볼의 갯수
	 * @param {number[]} answer - 정답
	 * @returns {GameResult} -  스트라이크와 볼의 갯수에 따른 게임의 결과를 반환.
	 */
	calculate(counts, answer) {
		const answerLength = answer.length;
		const { strike, ball } = counts;
		let result = "Incorrect",
			message = "";

		if (strike === answerLength)
			return {
				result: "Correct",
				message: "3스트라이크",
			};

		if (ball === 0 && strike === 0)
			return {
				result,
				message: "낫싱",
			};

		const strikeMessage = strike !== 0 ? `${strike}스트라이크` : "";
		const ballMessage = ball !== 0 ? `${ball}볼` : "";
		message = `${ballMessage} ${strikeMessage}`.trim();

		return {
			result,
			message,
		};
	}
}

export default OutputProvider;
