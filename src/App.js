import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    var input = 1; // 1: 게임 실행, 2: 게임 종료
    while (input == 1) {
      input = await playGame();
    }
  }
}

// 게임 실행
async function playGame() { 
  // 각 자리가 겹치지 않는 3자리 숫자 생성
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  // 정답을 맞출 때 까지 실행
  while (true) {
    var guess = 0;
    // 사용자 입력
    guess = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    guess = parseInt(guess);

    // 입력받은 숫자가 3자리가 아닌 경우
    if (guess < 100 || guess > 999) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    // 입력받은 숫자와 정답 비교
    let result = compareGuess(computer, guess);
    
    // 결과 출력
    let interpretation = interpretResult(result);
    MissionUtils.Console.print(interpretation);
    
    // 정답을 맞힌 경우
    if (result[1] == 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      break;
    }
  }

  // 재실행 여부 확인
  let restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1 종료하려면 2를 입력하세요.\n');
  return restart;
}

// 입력받은 숫자와 정답 비교
function compareGuess(computer, guess) {
  var strike = 0
  var ball = 0

  // 입력받은 숫자의 각 자리 분리
  let first = Math.floor(guess / 100);
  let second = Math.floor(guess / 10) - 10 * first;
  let third = guess % 10;

  if (computer[0] == first) {
    strike += 1;
  } else if(computer.includes(first)) {
    ball += 1;
  }

  if (computer[1] == second) {
    strike += 1;
  } else if (computer.includes(second)) {
    ball += 1;
  }

  if (computer[2] == third) {
    strike += 1;
  } else if (computer.includes(third)) {
    ball += 1;
  }

  // 볼, 스트라이크 개수 리턴
  let result = [ball, strike];
  return result;
}

// 결과 출력
function interpretResult(result) {
  var interpretation = '';
  if (result[0] != 0) {
    interpretation += result[0].toString() + '볼 '
  }
  if (result[1] != 0) {
    interpretation += result[1].toString() + '스트라이크'
  }
  
  if (result[0] == 0 && result[1] == 0) {
    interpretation = '낫싱';
  }

  return interpretation;
}

export default App;