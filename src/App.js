import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT_LENGTH, MESSAGE, RESTART } from './utils/Constants';
import { printBallCount, getStrikeAndBall } from './utils/BallCount';
import { checkIsValid } from './utils/CheckInput';
import getRandomNumber from './utils/Random';

class App {
	constructor() {
		Console.print(MESSAGE.start);
		this.computerNumber = getRandomNumber();
	}

	async play() {
		while (true) {
			const input = await Console.readLineAsync(MESSAGE.pitch);
			const userNumber = input.split('').map((num) => parseInt(num));
			checkIsValid(userNumber);

			const { ballCount, strikeCount } = getStrikeAndBall(
				this.computerNumber,
				userNumber
			);

			printBallCount(ballCount, strikeCount);

			if (strikeCount === INPUT_LENGTH) {
				Console.print(MESSAGE.end);
				const choice = await Console.readLineAsync(MESSAGE.restart);

				if (choice !== RESTART) {
					return;
				}

				this.computerNumber = getRandomNumber();
			}
		}
	}
}

export default App;
