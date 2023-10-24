import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';
import CheckBaseball from './CheckBaseball.js';
import ResponseGameRestart from './ResponseGameRestart.js';

export default class App {
	async play() {
		// 시작 문구 출력
		this.gameStart();
		// 랜덤으로 값 설정
		const COMPUTER = this.randomNumber();
		// 추후 지울 것
		// console.log('com', COMPUTER);
		// Console.print(`test ${this.randomNumber()}`);

		// 정답일때까지 반복문 실행
		let CHECKBASEBALL = true;
		while (CHECKBASEBALL) {
			try {
				// 입력값 받기
				// console.log(await PlayerInputNumber());
				const PLAYER = await PlayerInputNumber();
				CHECKBASEBALL = CheckBaseball(PLAYER, COMPUTER);
				if (!PLAYER) {
					throw { name: 'PlayerError', message: 'PLAYER 입력 값이 옳지 않습니다.' };
				}
			} catch (error) {
				// console.log(error);
				break;
			}
		}

		if (!CHECKBASEBALL) {
			// 정답 문구 출력
			Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
			const CHECKRESTART = await ResponseGameRestart();
			if (CHECKRESTART === '1') {
				app.play();
			}
		}
	}
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
		// console.log('숫자 야구 게임을 시작합니다.');
	}
	randomNumber() {
		const PICKRANDOMNUMBER = Random.pickUniqueNumbersInRange(1, 9, 3);
		return PICKRANDOMNUMBER.join('');
		// return [1, 3, 5].join('');
	}
}

// const app = new App();
// app.play();
