import { Console, Random } from '@woowacourse/mission-utils';
import PlayerInputNumber from './PlayerInputNumber.js';
import CheckBaseball from './CheckBaseball.js';
import ResponseGameRestart from './ResponseGameRestart.js';

export default class App {
	async play() {
		// 시작 문구 출력
		this.gameStart();

		// 게임 실행
		// true일 동안 계속 게임 실행
		while (true) {
			await this.gamePlay();
			// 게임 재시작 여부 확인
			const CHECKRESTART = await ResponseGameRestart();
			// 1(재시작)이 아니므로 while문 종료
			if (CHECKRESTART !== '1') {
				break;
			}
		}
	}
	// 게임 시작 출력
	gameStart() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}
	// 랜덤 3자리수 뽑기
	randomNumber() {
		const RANDOMNUMBERLIST = [];
		while (RANDOMNUMBERLIST.length < 3) {
			const RANDOMNUMBER = Random.pickNumberInRange(1, 9);
			if (!RANDOMNUMBERLIST.includes(RANDOMNUMBER)) {
				RANDOMNUMBERLIST.push(RANDOMNUMBER);
			}
		}
		return RANDOMNUMBERLIST.join('');
	}
	// 게임 실행
	async gamePlay() {
		// 랜덤으로 3자리수 뽑기
		const COMPUTER = this.randomNumber();
		let CHECKBASEBALL = true;
		// true일 동안 while 실행
		while (CHECKBASEBALL) {
			// 플레이어에게 입력값 받기
			const PLAYER = await PlayerInputNumber();
			// 플레이이어와 컴퓨터의 값 결과 확인
			// 모두 일치할 경우 CHECKBASEBALL이 false가 되면서 while 종료
			CHECKBASEBALL = CheckBaseball(PLAYER, COMPUTER);
		}
	}
}

const app = new App();
app.play();
