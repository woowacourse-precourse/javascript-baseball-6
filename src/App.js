import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';
import CheckBaseball from './CheckBaseball.js';
import ResponseGameRestart from './ResponseGameRestart.js';

class App {
	async play() {
		// 시작 문구 출력
		this.gameStart();
		// 랜덤으로 값 설정
		const COMPUTER = this.randomNumber();
		// 추후 지울 것
		console.log('com', COMPUTER);
		// 정답일때까지 반복문 실행
		let CHECKBASEBALL = true;
		while (CHECKBASEBALL) {
			try {
				// 입력값 받기
				const PLAYER = await PlayerInputNumber();
				if (PLAYER === undefined) {
					throw { name: 'PLAYERERROR', message: 'PLAYER 입력 값이 옳지 않습니다.' };
				}
				// 정답 유무 확인
				CHECKBASEBALL = CheckBaseball(PLAYER, COMPUTER);
			} catch (error) {
				console.log(error);
				break;
			}
		}
		// 정답 문구 출력
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		let CHECKRESTART = await ResponseGameRestart();
		if (CHECKRESTART === 1) {
			app.play();
		}
	}
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
	randomNumber() {
		return Random.pickUniqueNumbersInRange(1, 9, 3).join('');
	}
}

const app = new App();
app.play();
