class Analyzer {
	#answer;
	#userInputValue;

	settingAnalyzer(answer, userInputValue) {
		this.#answer = answer;
		this.#userInputValue = userInputValue;
	}

	checkValidInput() {
		this.#userInputValue = this.#userInputValue.split("");
		const userInputValue = this.#userInputValue;

		if (userInputValue.length !== this.#answer.length) {
			throw new Error(
				`[ERROR] ${this.#answer.length} 자리의 숫자를 입력하세요.`
			);
		}

		for (const value of userInputValue) {
			if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) {
				throw new Error(`[ERROR] 숫자만 입력하세요.`);
			}
		}
	}

	checkTheResult() {
		let [strike, ball] = [0, 0];
		const length = this.#answer.length;
		const userInputValue = this.#userInputValue.map((value) =>
			Number(value)
		);

		for (let i = 0; i < length; i++) {
			if (this.#answer.includes(userInputValue[i])) {
				this.#answer[i] === userInputValue[i]
					? (strike += 1)
					: (ball += 1);
			}
		}

		return {
			strike,
			ball,
		};
	}
}

export default Analyzer;
