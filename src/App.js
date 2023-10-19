//1부터 9까지 서로 다른 수로 이루어진 3자리의 수
//같은 수가 같은 자리에 있으면 스트라이크
//같은 수가 다른 자리에 있으면 볼
//같은 수가 전혀 없으면 낫싱
import { MissionUtils } from '@woowacourse/mission-utils';
function start() {
	makeRandomNumber();
	getUserInput();
}
function makeRandomNumber() {
	const computer = [];
	while (computer.length <= 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer;
}
async function getUserInput() {
	const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
	validateUserInput(userInput, computer);
	//compare
}
function validateUserInput(userInput, computer) {
	if (userInput.length === 3) {
		const user = userInput.split('').map((number) => +number && +number); //arr
		//console.log(user)
		if (user[0] && user[1] && user[2]) {

			const { strike, ball } = compareUserComputer(user, computer);
			const strikeScore = strike ? `${strike}스트라이크` : '';
			const ballScore = ball ? `${ball}볼` : '';
		}
	}
}
function compareUserComputer(user, computer) {
	//123, 236
	let strike = 0;
	let ball = 0;
	for (let i = 0; i < user.length; i++) {
		for (let j = 0; j < computer.length; j++) {
			if (user[i] === computer[j]) {
				strike++;
			} else if (computer.includes(user[i])) {
				ball++;
			}
		}
		return {
			strike: strike,
			ball: ball,
		};
	}
}
class App {
	async play() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		start();
	}
}

export default App;
