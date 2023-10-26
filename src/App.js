import { Random , Console } from '@woowacourse/mission-utils';

const getComputerInput = () => {
	try {
		const COMPUTER_ARR = [];
		while (COMPUTER_ARR.length < 3) {
			const number = Random.pickNumberInRange(1, 9);
			if (!COMPUTER_ARR.includes(number)) {
				COMPUTER_ARR.push(number);
			}
		}
		return COMPUTER_ARR;
	} catch (error) {}
};

const compareUserComputer = (USER_ARR, COMPUTER_ARR) => {
	let STRIKE = 0;
	let BALL = 0;
	//strike 계산
	for (let i = 0; i < 3; i++) {
		if (USER_ARR[i] === COMPUTER_ARR[i]) {
			STRIKE++;
		}
	}
	const BALL_ARR = USER_ARR.filter((item) => COMPUTER_ARR.includes(item));
	BALL = BALL_ARR.length - STRIKE;
	return {
		strike: STRIKE,
		ball: BALL,
	};
};

const validateUserInput = (USER_INPUT) => {
	try {
		if (USER_INPUT.length === 3) {
			const USER_ARR = USER_INPUT.split('').map((num) => +num);
			if (USERARR.includes(0)) {
				throw new MyError('[ERROR]', '1부터 9까지의 자연수만 가능합니다.');
			} else {
				// USER_ARR 는 모두 자연수
				if (USER_ARR[0] !== USER_ARR[1] && USER_ARR[0] !== USER_ARR[2] && USER_ARR[1] !== USER_ARR[2]) {
					return USER_ARR;
				} else {
					return false;
				}
			}
		} else {
			throw new MyError('[ERROR]', '유효한 입력값이 아닙니다.');
		}
	} catch (error) {
		throw new MyError('[ERROR]', error);
	}
};

const getScore = (STRIKE, BALL, COMPUTER_ARR) => {
	if (STRIKE === 3) {
		Console.print('3스트라이크');
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'); //Escape Sequence 사용하면 한 번에 두 줄 출력 가능
		return;
	} else if (STRIKE === 0 && BALL === 0) {
		Console.print('낫싱');
		process(COMPUTER_ARR);
		return;
	} else if (STRIKE === 0) {
		Console.print(`${BALL}볼`);
		return;
	} else if (BALL === 0) {
		Console.print(`${STRIKE}스트라이크`);
		return;
	} else {
		Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
	}
};

const start = async () => {
	const COMPUTER_ARR = getComputerInput();
	await process(COMPUTER_ARR);
};

const process = async (COMPUTER_ARR) => {
	try {
		const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 :');
		Console.print(`숫자를 입력해주세요 : ${USER_INPUT}`);
		// 사용자이 입력값이 유효한지 확인 / boolean 반환
		const USER_ARR = validateUserInput(USER_INPUT);
		if (USER_ARR) {
			const { strike, ball } = compareUserComputer(USER_ARR, COMPUTER_ARR);
			getScore(strike, ball, COMPUTER_ARR);
		} else {
			throw new MyError('[ERROR]', '유효한 입력값이 아닙니다.');
		}
	} catch (error) {
		throw new MyError('[ERROR]', error);
	}
};
const end = async () => {
	Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
	try {
		const DECISION = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
		switch (DECISION) {
			case '1':
				await start();
				break;
			case '2':
				return;
			default:
				throw new MyError('[ERROR]', '유효한 입력값이 아닙니다. 1, 2 중에서 입력해주세요.');
		}
	} catch (error) {}
};

class MyError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.message = [...params];
		this.name = value;
	}
}

class App {
	async play() {
		Console.print('숫자 야구 게임을 시작합니다.');
		await start(); //await 있어야 유효성 검사 통과
		await end();
		return;
	}
}

export default App;
