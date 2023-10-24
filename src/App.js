import { Console } from '@woowacourse/mission-utils';
import { INPUT_LENGTH, MESSAGE, RESTART } from './utils/Constants';
import { printPitchingCount, getPitchingCount } from './utils/BallCount';
import { checkIsReplay, checkIsValid } from './utils/CheckInput';
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

			const { ballCount, strikeCount } = getPitchingCount(
				this.computerNumber,
				userNumber
			);

			printPitchingCount(ballCount, strikeCount);

			if (strikeCount === INPUT_LENGTH) {
				Console.print(MESSAGE.end);
				const choice = await Console.readLineAsync(MESSAGE.restart);

				checkIsReplay(choice);

				if (choice !== RESTART) {
					return;
				}

				this.computerNumber = getRandomNumber();
			}
		}
	}
}

export default App;
