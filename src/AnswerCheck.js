import { Console } from '@woowacourse/mission-utils';

function AnswerCheck(correctAnswer ,answer) {
	let ball = 0;
	let strike = 0;

	for (let i = 0 ; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (correctAnswer[i] === answer[j] && i === j) {
				strike++;
			} else if (correctAnswer[i] === answer[j] && i !== j) {
				ball++;
			}
		}
	}
	
	if (ball === 0 && strike === 0) {
		Console.print('낫싱');
		return 0;
	}
	if (strike === 3) {
		Console.print(strike + '스트라이크');
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		return 1;
	}
	if (strike === 0) {
		Console.print(ball + '볼');
		return 0;
	}
	if (ball === 0) {
		Console.print(strike + '스트라이크');
		return 0;
	}
	Console.print(ball + '볼 ' + strike + '스트라이크');
}

export default AnswerCheck;