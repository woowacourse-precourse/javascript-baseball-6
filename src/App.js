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
}

export default App;
