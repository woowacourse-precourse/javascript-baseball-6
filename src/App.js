const MissionUtils = require('@woowacourse/mission-utils');

class App {
	constructor() {
		answerNumber;
	}

	// 컴퓨터 랜덤 숫자
	randomNumber() {
		this.answerNumber = [];
		while (answerNumber.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!answerNumber.includes(number)) {
				answerNumber.push(number);
			}
		}
	}
	// 스트라이크 수, 볼 수 체크
	ballCheck(guessNum, answerNumber) {
		let strike = 0;
		let ball = 0;
		for (let i = 0; i < guessNum.length; i++) {
			if (guessNum[i] === answerNumber[i]) strike++;
			else ball++;
		}
	}
	// 시작
	async play() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		const guessNum = [];

		MissionUtils.Console.readLineAsync('숫자를 입력하세요', (input) => {
			input.split('').map((num) => guessNum.push(num));
			this.StrikeCheck(guessNum, answerNumber);
		});
	}
}

export default App;
