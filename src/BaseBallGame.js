import { Console, Random } from '@woowacourse/mission-utils';
import getRandomNumber from './utils/Random';
import { getPitchingCount, printPitchingCount } from './utils/BallCount';
// import { checkIsValid } from './utils/CheckInput';
import { MESSAGE, RESTART, INPUT_LENGTH } from './utils/Constants';

class BaseBallGame {
	start() {
		Console.print(MESSAGE.start);
		this.playBall(getRandomNumber());
	}

	getRandomNumber() {
		const computerNumber = [];

		while (computerNumber.length < INPUT_LENGTH) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!computerNumber.includes(randomNumber)) {
				computerNumber.push(randomNumber);
			}
		}
		return computerNumber;
	}

	checkIsValid(input) {
		// 잘못된 입력 시 에러 던지기
		for (let i = 0; i < input.length; i++) {
			if (Number.isNaN(input[i])) {
				throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
			}
		}
		if (input.length !== 3) {
			throw new Error('[ERROR] 숫자가 3자리가 아닙니다.');
		}
	}
	async playBall(computerNumber) {
		while (true) {
			const input = await Console.readLineAsync(MESSAGE.pitch);
			const userNumber = input.split('').map((element) => parseInt(element));
			this.checkIsValid(userNumber);

			const { ballCount, strikeCount } = getPitchingCount(
				computerNumber,
				userNumber
			);

			printPitchingCount(ballCount, strikeCount);

			if (strikeCount === 3) {
				Console.print(MESSAGE.end);
				const choice = await Console.readLineAsync(MESSAGE.restart);

				if (choice !== RESTART) {
					return '게임 종료';
				}

				computerNumber = this.getRandomNumber();
			}
		}
	}
}

export default BaseBallGame;
