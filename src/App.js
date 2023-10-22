import { Console } from '@woowacourse/mission-utils';
import { COMMAND } from './Constant.js';
class App {
	async play() {
		this.showStartMessage();
		this.gameStart();
	}
	showStartMessage() {
		Console.print(COMMAND.START);
	}
	async gameStart() {
		const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
	}
}
const app = new App();
app.play();
export default App;
