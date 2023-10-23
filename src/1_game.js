import { MissionUtils } from "@woowacourse/mission-utils";

//게임 종료
const endGame = () => {
  MissionUtils.Console.close();
}
//컴퓨터의 문제 출제
const createRandomNumber = () => {
  const com = [];
  while (com.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!com.includes(number)) {
      com.push(number);
    }
  };
  return com.join('');
}
//유저의 입력값 검사
const validNumber = (userNum) => {
  if (userNum.length !== 3) {
    return false;
  }
  if (userNum.includes(0)) {
    return false;
  }
  if (isNaN(parseInt(userNum))) {
    return false;
  }
  if (userNum[0] === userNum[1]) {
    return false;
  }
  if (userNum[1] === userNum[2]) {
    return false;
  }
  if (userNum[2] === userNum[0]) {
    return false;
  }
}
//게임 컨트롤러 생성
const askGame = () => {
  MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.readLine('게임 재시작 : 1번, 게임 종료 : 2번', (replay) => {
    if (replay === '1') {
      return startGame();
    } else if (replay === '2') {
      return endGame();
    } else {
      throw new Error("1번과 2번 중에 입력해주세요.");
    }
  });
}
//게임 결과 판별
const result = (comNum,userNum) => {
  const judge = { strike: 0, ball: 0 };
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (comNum[i] === userNum[j]) {
        if (i === j) {
          judge.strike++;
        } else {
          judge.ball++;
        }
      }
    }
    return judge;
  }
}
//게임 결과 출력
const resultText = (ball, strike) => {
  let text = [];
  if(ball !== 0){
    text.push(`${ball}볼`);
  }else if(strike !== 0){
    text.push(`${strike}스트라이크`);
  }else{
    text.push('낫싱');
  }
  return text;
}
//게임 실행
const ballManager = (comNum, userNum) => {
  if (comNum === userNum) {
    MissionUtils.Console.print('3스트라이크');
    return askGame();
  } 
  const {ball, strike} = result(comNum, userNum);
  MissionUtils.Console.print(resultText(ball,strike).join(''));
  startGame(comNum);
}
//게임 시작
const startGame = (comNum) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNum) => {
    if (validNumber(userNum)) {
      throw new Error("올바른 숫자 형태가 아닙니다.");
    }
    ballManager(comNum, userNum);
  })
};
//게임 첫시작
const firstGameStart = () => {
  const comNum = createRandomNumber();
  startGame(comNum);
}

export { firstGameStart };