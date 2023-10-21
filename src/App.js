import { MissionUtils } from '@woowacourse/mission-utils';
function start() {
	const computer = makeRandomNumber();
	try {
		getUserInput(computer);
	} catch (error) {
		throw new Error('[Error]', error);
	}
}
function makeRandomNumber() {
	const computer = [];
	while (computer.length < 3) {
		const number = MissionUtils.Random.pickNumberInRange(1, 9);
		if (!computer.includes(number)) {
			computer.push(number);
		}
	}
	return computer;
}
async function getUserInput(computer) {
	const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
	validateUserInput(userInput, computer);
	//compare
}
function isRepeated(user){
  let newArr = []
  for(let i = 0; i < user.length; i++){
    if(newArr.includes(user[i])){
      continue;
    } else {
      newArr.push(user[i]);
    }
  }
  return newArr.length === 3 ? false : true;
}
function validateUserInput(userInput, computer) {
	if (userInput.length === 3) {
		const user = userInput.split('').map((number) => +number && +number); //arr
		//console.log(user)
    console.log(user[0], user[1], user[2])
		if (user[0] && user[1] && user[2]) {
      //숫자 중복이 있을 경우
      if(isRepeated(user)){
        throw new Error('[ERROR] 서로 다른 수를 입력해주세요')
      } else {
        const { strike, ball } = compareUserComputer(user, computer);
        returnScore(strike, ball);
        finishGame();
      }
		} else {
      throw new Error('[Error] 숫자가 잘못된 형식입니다.');
    }
	} else {
    throw new Error('[Error] 세자리 숫자를 입력해주세요.');
  }
}
async function finishGame() {
	const finalResult = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
	switch (finalResult) {
		case 1:
			// 게임 새로 시작
			start();
			break;
		case 2:
			//게임 끝
			break;
	}
}
function returnScore(strike, ball) {
	const strikeScore = strike ? `${strike}스트라이크` : '';
	const ballScore = ball ? `${ball}볼` : '';
	if (strike === 3) {
		MissionUtils.Console.print(strikeScore);
		MissionUtils.Console.print('3개의 숫자를 모두 맞추셨습니다! 게임 종료');
	} else {
		if (strike === 0) {
			MissionUtils.Console.print(ballScore);
			if (ball === 0) {
				MissionUtils.Console.print('낫싱');
			}
		} else {
			MissionUtils.Console.print(ballScore + ' ' + strikeScore);
		}
	}
}
function compareUserComputer(user, computer) {
	//123, 236
	let strike = 0;
	let ball = 0;
	for (let i = 0; i < user.length; i++) {
		for (let j = 0; j < computer.length; j++) {
			if (user[i] === computer[j]) {
				strike++;
			} else if (computer.includes(user[i])) {
				ball++;
			}
		}
	}
  return {
    strike: strike,
    ball: ball,
  };
}
class App {
	async play() {
		MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
		start();
	}
}

export default App;
