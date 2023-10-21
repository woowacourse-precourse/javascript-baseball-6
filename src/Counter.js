class Counter {
	count(input, answer) {
		let [strike, ball] = [0, 0];

		input = input.split("").map((value) => Number(value));

		for (let i = 0; i < answer.length; i++) {
			if (answer.includes(input[i])) {
				answer[i] === input[i] ? (strike += 1) : (ball += 1);
			}
		}

		return { strike, ball };
	}
}

export default Counter;
