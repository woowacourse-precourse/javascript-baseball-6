import { MissionUtils } from '@woowacourse/mission-utils';

const getComputerInput = () => {
	try {
		const COMPUTERARR = [];
		while (COMPUTERARR.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!COMPUTERARR.includes(number)) {
				COMPUTERARR.push(number);
			}
		}
		return COMPUTERARR;
	} catch (error) {}
};

const compareUserComputer = (USERARR, COMPUTERARR) => {
	let STRIKE = 0;
	let BALL = 0;
	//strike 계산
	for (let i = 0; i < 3; i++) {
		if (USERARR[i] === COMPUTERARR[i]) {
			STRIKE++;
		}
	}
	const BALLARR = USERARR.filter((item) => COMPUTERARR.includes(item));
	BALL = BALLARR.length - STRIKE;
	return {
		strike: STRIKE,
		ball: BALL,
	};
};

const validateUserInput = (USERINPUT) => {
	try {
		if (USERINPUT.length === 3) {
			const USERARR = USERINPUT.split('').map((num) => +num);
			if (USERARR.includes(0)) {
				throw new MyError('[ERROR]', '1부터 9까지의 자연수만 가능합니다.');
			} else {
				// USERARR 는 모두 자연수
				if (USERARR[0] !== USERARR[1] && USERARR[0] !== USERARR[2] && USERARR[1] !== USERARR[2]) {
					return USERARR;
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

const getScore = (STRIKE, BALL, COMPUTERARR) => {
	if (STRIKE === 3) {
		MissionUtils.Console.print('3스트라이크');
		MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
		return;
	} else if (STRIKE === 0 && BALL === 0) {
		MissionUtils.Console.print('낫싱');
		process(COMPUTERARR);
		return;
	} else if (STRIKE === 0) {
		MissionUtils.Console.print(`${BALL}볼`);
		return;
	} else if (BALL === 0) {
		MissionUtils.Console.print(`${STRIKE}스트라이크`);
		return;
	} else {
		MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
	}
};

const start = async () => {
	const COMPUTERARR = getComputerInput();
	await process(COMPUTERARR);
};

const process = async (COMPUTERARR) => {
	try {
		const USERINPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
		MissionUtils.Console.print(`숫자를 입력해주세요 : ${USERINPUT}`);
		// 사용자이 입력값이 유효한지 확인 / boolean 반환
		const USERARR = validateUserInput(USERINPUT);
		if (USERARR) {
			const { strike, ball } = compareUserComputer(USERARR, COMPUTERARR);
			getScore(strike, ball, COMPUTERARR);
		} else {
			throw new MyError('[ERROR]', '유효한 입력값이 아닙니다.');
		}
	} catch (error) {
		throw new MyError('[ERROR]', error);
	}
};
const end = async () => {
	MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
	try {
		const DECISION = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
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
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		await start(); //await 있어야 유효성 검사 통과
		await end();
		return;
	}
}

export default App;
