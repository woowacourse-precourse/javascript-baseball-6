class Counter {
	countStrikeAndBall(inputValue, answer) {
		let [strike, ball] = [0, 0];
		inputValue = inputValue.map((value) => Number(value));
		const length = answer.length;

		for (let i = 0; i < length; i++) {
			if (answer.includes(inputValue[i])) {
				answer[i] === inputValue[i] ? (strike += 1) : (ball += 1);
			}
		}

		return { strike, ball };
	}
}

export default Counter;
