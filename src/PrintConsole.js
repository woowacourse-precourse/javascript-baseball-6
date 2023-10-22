import { Console } from '@woowacourse/mission-utils';

class PrintConsole {
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}

	gameResult(ball, strike) {
		let text = '';
		if (ball) text += `${ball}볼 `;
		if (strike) text += `${strike}스트라이크`;
		if (ball === 0 && strike === 0) text += '낫싱';

		Console.print(text);
	}

	gameEnd() {
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
	}
}

export default PrintConsole;
