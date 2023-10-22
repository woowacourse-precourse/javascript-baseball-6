const { Console, Random } = require('@woowacourse/mission-utils');

class App {
	async play() {
		Console.print('숫자 야구 게임을 시작합니다.');

		while (true) {
			const answerNumber = this.setAnswerNumber();

			while (true) {
				const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
				if (this.numberCheck(userNumber)) throw new Error('[ERROR] 올바른 숫자 형식이 아닙니다.');
				const result = this.countCheck(answerNumber, userNumber);
				Console.print(result);
				if (result === '3스트라이크') {
					Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
					break;
				}
			}
			const askRestart = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
			if (askRestart === '2') break;
		}
	}
	// 컴퓨터 숫자 세팅
	setAnswerNumber() {
		const answerNumber = [];
		while (answerNumber.length < 3) {
			const number = Random.pickNumberInRange(1, 9);
			if (!answerNumber.includes(number)) {
				answerNumber.push(number);
			}
		}
		return answerNumber;
	}
	// 사용자 숫자 체크
	numberCheck(inputNumber) {
		const number = inputNumber;
		if (number.length !== 3 || number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) return true;
	}
	// 스트라이크 볼 수 체크
	countCheck(answerNumber, inputNumber) {
		let strike = 0;
		let ball = 0;
		answerNumber.forEach((num, idx) => {
			if (num == inputNumber[idx]) {
				strike++;
			} else if (inputNumber.includes(num)) {
				ball++;
			}
		});
		if (strike === 0 && ball === 0) return '낫싱';
		else if (strike === 3) return '3스트라이크';
		else if (ball === 3) return `${ball}볼`;
		else return `${ball}볼 ${strike}스트라이크`;
	}
}

export default App;
