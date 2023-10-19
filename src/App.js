import { MAX_INPUT_LENGTH, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from "./constants.js";

class App {
	async play() {}

	/**
	 * @description 1부터 9까지의 숫자 중 중복되지 않은 랜덤한 3개의 숫자를 생성합니다.
	 * @returns {string}
	 */
	generateRandomNumbers() {
		let randomNumber = "";

		while (randomNumber.length < MAX_INPUT_LENGTH) {
			const number = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

			if (randomNumber.includes(number)) {
				continue;
			}

			randomNumber += number;
		}

		return randomNumber;
	}
}

export default App;
