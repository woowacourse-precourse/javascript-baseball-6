import { Random, Console } from "@woowacourse/mission-utils";

class App {
	constructor() {
		this.LIMIT = 3;
		this.BALL = 0;
		this.STRIKE = 0;
		this.COMPUTER = [];
		this.START = true;
	}

	// 컴퓨터 수 생성
	generate_computer_number() {
		const computer = [];
		while (computer.length < this.LIMIT) {
			const number = Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}
		return computer;
	}

	async play() {
		Console.print("숫자 야구 게임을 시작합니다.");
		while (this.START) {
			this.COMPUTER = this.generate_computer_number();
			// console.log(this.COMPUTER);
			while (this.STRIKE < 3) {
				// 결과값 초기화
				this.BALL = this.STRIKE = 0;

				// 입력 받는 부분
				const input = await Console.readLineAsync(
					"숫자를 입력해주세요 : "
				);
				const user = input.split("").map(Number);

				// 에러 처리하는 부분
				let errorMessage = "";
				switch (true) {
					case user.length !== 3:
						errorMessage = "3자리 숫자를 입력하지 않았습니다.";
						break;
					case user.some((c) => isNaN(c) || c === 0):
						errorMessage = "1부터 9 이외의 값들을 입력하셨습니다.";
						break;
					case new Set(user).size !== 3:
						errorMessage = "중복되는 숫자가 존재합니다.";
						break;
				}
				if (errorMessage) {
					throw new Error("[ERROR] " + errorMessage);
				}

				// 볼, 스트라이크 카운트
				for (let i = 0; i < this.LIMIT; i++) {
					if (user[i] === this.COMPUTER[i]) this.STRIKE++;
					else if (this.COMPUTER.includes(user[i])) this.BALL++;
				}

				// 결과 출력
				let result = ``;
				if (this.BALL) {
					result += this.BALL + "볼";
				}
				if (this.STRIKE) {
					result += (this.BALL && " ") + this.STRIKE + "스트라이크";
				}
				Console.print(result ? result : `낫싱`);
			}
			Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

			// 재시작 여부 판단
			Console.print(
				"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
			);
			const restart = +(await Console.readLineAsync(``));
			if (restart === 2) {
				this.START = false;
			} else {
				this.STRIKE = 0;
			}
		}
	}
}

// new App().play().catch((e) => console.log(e.message));

export default App;
