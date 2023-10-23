import { Console, Random } from '@woowacourse/mission-utils';
import { COMMAND, GAME } from './Constant.js';
class App {
	async play() {
		this.showStartMessage();
		this.gameStart();
	}
	showStartMessage() {
		Console.print(COMMAND.START);
	}
	generateRandomNumber() {
		const randomNumberList = [];
		while (randomNumberList.length < GAME.NUMBER_LENGTH) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!randomNumberList.includes(randomNumber))
				randomNumberList.push(randomNumber);
		}
		return randomNumberList.sort();
	}
	gameStart() {
		const answer = this.generateRandomNumber();
	}
}
const app = new App();
app.play();
export default App;
