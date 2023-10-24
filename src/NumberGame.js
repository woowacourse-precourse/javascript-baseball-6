class NumberGame {
	generateRandomNumber() {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const shuffledNumbers = new Set();

		while (shuffledNumbers.size < 3) {
			const randomIndex = Math.floor(
				Random.pickNumberInRange(1, 9) * numbers.length
			);
			shuffledNumbers.add(numbers[randomIndex]);
		}

		return Array.from(shuffledNumbers).join("");
	}

	checkGuess(userGuess, secretNumber, attempts) {
		if (!/^\d{3}$/.test(userGuess)) {
			throw new Error("세 자리 숫자를 입력하세요.");
		}

		if (new Set(userGuess).size !== 3) {
			throw new Error("중복된 숫자를 입력할 수 없습니다.");
		}

		attempts++;
		let strikes = 0;
		let balls = 0;

		userGuess.split("").forEach((digit, index) => {
			if (digit === secretNumber[index]) {
				strikes++;
			} else if (secretNumber.includes(digit)) {
				balls++;
			}
		});

		if (strikes === 3) {
			return `축하합니다! ${secretNumber}을(를) ${attempts}번 시도 후 맞췄습니다.`;
		} else if (strikes === 0 && balls === 0) {
			return "낫싱";
		} else {
			return `${strikes} 스트라이크, ${balls} 볼`;
		}
	}
}

export default NumberGame;
