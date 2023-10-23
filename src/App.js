import { Random, Console } from '@woowacourse/mission-utils';
import { RESTART, INPUT_LENGTH, MESSAGE } from './utils/Constants';
import { checkIsPitch, checkIsReplay } from './utils/CheckInput';
class App {
	create(message = null) {
		Console.print(message ? message : null);
		this.pitching(this.getRandomNumbers());
	}

	getRandomNumbers() {
		const list = [];
		while (list.length < 3) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!list.includes(randomNumber)) {
				list.push(randomNumber);
			}
		}
		return list;
	}

	judgement(computerNumber, userNumber) {
		let ballCount = 0;
		let strikeCount = 0;

		computerNumber.forEach((element, index) => {
			if (userNumber.indexOf(String(element)) === index) strikeCount += 1;
			if (![-1, index].includes(USER.indexOf(String(element)))) ballCount += 1;
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
			return;
		}
	}

	async pitching(computerNumber) {
		try {
			const userNumber = await Console.readLineAsync(MESSAGE.pitch);
			console.log(userNumber);
			checkIsPitch(userNumber);
			const { ballCount, strikeCount } = this.judgement(
				computerNumber,
				userNumber
			);
			this.printCount(ballCount, strikeCount);
			return strikeCount === INPUT_LENGTH
				? this.gameOver()
				: this.pitching(computerNumber);
		} catch (error) {
			return error;
		}
	}

	gameOver() {
		Console.print(MESSAGE.end);
		try {
			const input = Console.readLineAsync(MESSAGE.replay);
			this.replay(input);
		} catch (error) {
			return error;
		}
	}

	replay(input) {
		checkIsReplay(input);
		return input === RESTART ? this.create() : null;
	}

	async play() {
		this.create(MESSAGE.start);
	}
}

export default App;
