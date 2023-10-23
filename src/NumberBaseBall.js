import { Random, Console } from '@woowacourse/mission-utils';
import { RESTART, INPUT_LENGTH, MESSAGE } from './utils/Constants';
import { checkIsPitch, checkIsReplay } from './utils/CheckInput';

class NumberBaseBall {
	start(message = null) {
		if (message) Console.print(message);
		this.pitching(this.getRandomNumbers());
	}

	getRandomNumbers() {
		const list = [];
		while (list.length < INPUT_LENGTH) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!list.includes(randomNumber)) {
				list.push(randomNumber);
			}
		}
		return list;
	}

	async pitching(computerNumber) {
		const userNumber = await Console.readLineAsync(MESSAGE.pitch);
		checkIsPitch(userNumber);
		const { ballCount, strikeCount } = this.judgement(
			computerNumber,
			userNumber
		);
		this.printCount(ballCount, strikeCount);
		return strikeCount === INPUT_LENGTH
			? this.gameOver()
			: this.pitching(computerNumber);
	}

	judgement(computerNumber, userNumber) {
		let ballCount = 0;
		let strikeCount = 0;

		computerNumber.forEach((element, index) => {
			if (userNumber.indexOf(String(element)) === index) strikeCount += 1;
			if (![-1, index].includes(userNumber.indexOf(String(element))))
				ballCount += 1;
		});

		return { ballCount, strikeCount };
	}

	printCount(ballCount, strikeCount) {
		if (ballCount !== 0 && strikeCount !== 0) {
			Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
			return;
		}
		if (ballCount !== 0) {
			Console.print(`${ballCount}볼`);
			return;
		}
		if (strikeCount !== 0) {
			Console.print(`${strikeCount}스트라이크`);
			return;
		}
		if (ballCount === 0 && strikeCount === 0) {
			Console.print('낫싱');
		}
	}

	gameOver() {
		Console.print(MESSAGE.end);
		this.restart();
	}

	async restart() {
		const input = await Console.readLineAsync(MESSAGE.restart);
		checkIsReplay(input);
		return input === RESTART ? this.start() : null;
	}
}
export default NumberBaseBall;
