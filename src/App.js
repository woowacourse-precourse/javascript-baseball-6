import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
	async start() {
		const COMPUTER_NUMBER = [];
		while (COMPUTER_NUMBER.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!COMPUTER_NUMBER.includes(number)) {
				COMPUTER_NUMBER.push(number);
			}
		}

		while (true) {
			const USER_NUMBER = [];

			try {
				const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
				if (input.length !== 3 || parseInt(input).length === 3) {
					throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
				}
				input
					.split('')
					.forEach((element) => USER_NUMBER.push(parseInt(element)));
			} catch (error) {
				// return Promise.reject('[ERROR] 숫자가 잘못된 형식입니다.');
				return error;
			}

      
		}
	}
	async play() {
		Console.print('숫자 야구 게임을 시작합니다.');
		this.start();
	}
}

export default App;
