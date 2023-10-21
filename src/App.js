import { Random } from '@woowacourse/mission-utils';

class App {
	generateRandomNumber() {
		const generateNumberResponse = Random.pickUniqueNumbersInRange(1, 10, 3);
		return generateNumberResponse;
	}

	async play() {}
}

const app = new App();

export default App;
