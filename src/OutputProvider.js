class OutputProvider {
	output(strike, ball, answerLength) {
		let result = "Incorrect",
			message = "";

		if (strike === answerLength)
			return {
				result: "Correct",
				message: `${answerLength}스트라이크`,
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
