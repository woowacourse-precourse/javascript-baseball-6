import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { LOG, MAX_INPUT_LENGTH, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from "./constants.js";

class App {
	isPlaying;
	randomNumber;

	constructor() {
		this.init();
	}

	/**
	 * @description 게임을 진행하는 함수입니다.
	 * @description 게임이 진행 중일 때, 사용자로부터 입력을 받습니다.
	 * @description 입력이 유효하지 않을 경우, 에러 메시지를 출력합니다.
	 * @description 입력이 유효할 경우, 스트라이크와 볼의 개수에 따라 메시지를 출력합니다.
	 * @description 스트라이크가 3개일 경우, 게임을 재시작할지 확인합니다.
	 * @description 게임을 재시작할 경우, 게임을 초기화합니다.
	 * @description 게임을 재시작하지 않을 경우, 게임을 종료합니다.
	 */
	async play() {
		await Console.print(LOG.START);

		try {
			while (this.isPlaying) {
				const input = (await Console.readLineAsync(LOG.INPUT_NUMBER)).trim();

				const isValid = this.validateInput(input);

				if (!isValid) {
					throw new Error(LOG.ERROR);
				}

				const { strike, ball } = this.calculateStrikeBall(input);
			}
		} catch (e) {
			throw new Error(e.message);
		}
	}

	/**
	 * @description 게임을 초기화합니다.
	 */
	init() {
		this.isPlaying = true;
		this.randomNumber = this.generateRandomNumbers();
	}

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

	/**
	 *
	 * @param {string} input
	 * @description 입력한 데이터가 숫자가 아니거나, 0이 포함되거나, 3자리가 아니거나, 중복된 숫자가 있는지 확인합니다.
	 * @returns {boolean}
	 */
	validateInput(input) {
		const set = new Set(input.split(""));

		const isValid = !(isNaN(Number(input)) || set.has("0") || set.size !== MAX_INPUT_LENGTH);

		return isValid;
	}

	/**
	 * @param {string} input
	 * @description 스트라이크와 볼의 개수를 계산합니다.
	 * @description 스트라이크는 자릿수와 값이 모두 같을 경우, 볼은 자릿수는 다르지만 값이 같을 경우입니다.
	 * @returns {{strike: number, ball: number}}
	 */
	calculateStrikeBall(input) {
		const randomNumberToString = String(this.randomNumber);

		let strike = 0;
		let ball = 0;

		for (let i = 0; i < MAX_INPUT_LENGTH; i++) {
			const inputNumber = input[i];
			const randomNumber = randomNumberToString[i];

			if (inputNumber === randomNumber) {
				strike++;
				continue;
			}

			if (randomNumberToString.includes(inputNumber)) {
				ball++;
			}
		}

		return { strike, ball };
	}
}

export default App;
