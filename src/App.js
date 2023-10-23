import { Random, Console } from '@woowacourse/mission-utils';
import { RESTART, INPUT_LENGTH, MESSAGE } from './utils/Constants';
import { checkIsPitch, checkIsReplay } from './utils/CheckInput';
class App {
	create(message = null) {
		Console.print(message ? message : null);
		this.start(this.getRandomNumbers);
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
			if (userNumber.indexOf(element) === index) strikeCount += 1;
			if (![-1, index].includes(USER.indexOf(element))) ballCount += 1;
		});

		this.printCount(ballCount, strikeCount);
	}

	printCount(ballCount, strikeCount) {
		
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

	async start(computerNumber) {
		while (true) {
			const userNumber = [];

			try {
				const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
				input.split('').forEach((element) => {
					const convertedNumber = parseInt(element);
					if (!isNaN(convertedNumber) && !userNumber.includes(convertedNumber))
						userNumber.push(parseInt(element));
				});

				if (userNumber.length !== INPUT_LENGTH) {
					throw new Error('[ERROR]');
				}
			} catch (error) {
				return error;
			}

			const { ballCount, strikeCount } = this.judgement(
				computerNumber,
				userNumber
			);
			if (ballCount > 0 && strikeCount > 0) {
				Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
				continue;
			}
			if (ballCount > 0 && strikeCount === 0) {
				Console.print(`${ballCount}볼`);
				continue;
			}
			if (ballCount === 0 && strikeCount > 0) {
				Console.print(`${strikeCount}스트라이크`);
				Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
				const RESTART = await Console.readLineAsync(
					'게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
				);
				if (RESTART === 1) {
					console.log('restart');
					continue;
				}
				if (RESTART === 2) return;
			}
			if (BALL === 0 && STRIKE === 0) {
				Console.print('낫싱');
				continue;
			}
		}
	}

	async play() {
		this.create(MESSAGE.start);
	}
}
const app = new App();
app.play();

export default App;
