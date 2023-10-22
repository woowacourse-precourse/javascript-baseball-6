import { MissionUtils } from '@woowacourse/mission-utils';

class MyError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = value;
		this.name = '[ERROR]';
	}
}

class App {
	async play() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		start();
	}
}

const getComputerInput = () => {
	const computer = [];
	while (computer.length < 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer;
};

const compareUserComputer = (userArr, computerArr) => {
	let strike = 0;
	let ball = 0;
	//strike 계산
	for (let i = 0; i < 3; i++) {
		if (userArr[i] === computerArr[i]) {
			strike++;
		}
	}
	const ballArr = userArr.filter((item) => computerArr.includes(item));
	ball = ballArr.length - strike;
	return {
		strike: strike,
		ball: ball,
	};
};

const getScore = (strike, ball) => {
	if (strike === 3) {
		MissionUtils.Console.print('3스트라이크');
		MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		return;
	}
	if (strike === 0 && ball === 0) {
		MissionUtils.Console.print('낫싱');
		return;
	}
	if (strike === 0) {
		MissionUtils.Console.print(`${ball}볼`);
		return;
	}
	if (ball === 0) {
		MissionUtils.Console.print(`${strike}스트라이크`);
		return;
	}
	MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
	return;
};

const end = async () => {
	MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
	try {
		const decision = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
		// if (decision.includes('1')) {
		// 	start();
		// 	return;
		// } else if (decision.includes('2')) {
		// 	MissionUtils.Console.print('게임 종료');
		// 	return;
		// }
		switch (decision) {
			case '1':
				start();
				break;
			case '2':
				MissionUtils.Console.print('게임 종료');
				break;
		}
	} catch (error) {
		throw new MyError('[ERROR]', '숫자가 유효하지 않습니다.');
	}
};
const start = async () => {
	try {
		const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
		MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
		if (userInput.length !== 3) {
			throw new MyError('[ERROR]', '세자리를 입력해주세요.');
		}
		if (userInput.length === 3) {
			const userArr = userInput.split('').map((num) => +num);
			if (userArr.includes(0)) {
				throw new MyError('[ERROR]', '1부터 9까지의 자연수만 가능합니다.');
			} else {
				// userArr 는 모두 자연수
				if (userArr[0] !== userArr[1] && userArr[0] !== userArr[2] && userArr[1] !== userArr[2]) {
					//값이 전부 다르면
					//드디어 사용자 숫자와 비교 시작 가능
					const computerArr = getComputerInput();
					const { strike, ball } = compareUserComputer(userArr, computerArr);
					getScore(strike, ball);
					end();
					return;
				} else {
					//같은 애가 있다면
					throw new MyError('[ERROR]', '다 다른 숫자여야 합니다.');
				}
			}
		}
	} catch (error) {
		throw new MyError('[ERROR]', '숫자를 입력해주세요.');
	}
};

export default App;
