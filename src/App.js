import { Console, Random } from "@woowacourse/mission-utils";

// 정답이 되는 숫자 만들기
function generateRandomNumber() {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}

// 숫자 입력, 입력한 숫자가 형식에 맞는지 검사하기
async function checkRightFormat() {
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (!/^[1-9]{3}$/.test(Number(userInput))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return userInput.split('').map(Number)
}


// 정답이 되는 숫자와 입력한 숫자를 비교하기
function checkNumbers(userInput, answer) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userInput[i] === answer[i]) {
      strikes += 1;
    } else if (answer.includes(userInput[i])) {
      balls += 1;
    }
  }

  return { balls, strikes };
}

// 비교하여 나온 결과값을 출력하기
function printChecked(balls, strikes) {
  if (balls !== 0 && strikes !== 0) {
    Console.print(`${balls}볼 ${strikes}스트라이크`);
  }
  if (balls !== 0) {
    Console.print(`${balls}볼`);
  }
  if (strikes !== 0) {
    Console.print(`${strikes}스트라이크`);
  } else { Console.print('낫싱') }
}

// 게임 실행 제어

class App {
  async play() {
      Console.print('숫자 야구 게임을 시작합니다.')
      let isPlaying = true;

      while (isPlaying) {
        const answer = generateRandomNumber();
        while (true) {
          const userInput = await checkRightFormat();
          const { balls, strikes } = checkNumbers(userInput, answer);
          printChecked(balls, strikes);
          if (strikes === 3) {
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            isPlaying = await this.gameEnding();
            break;
          }
        }
      }
    }
  
  // 게임 종료 or 재시작
  async gameEnding() {
    const condition = Number(await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'));
    
    if (condition === 1) {
      return true;
    } else if (condition === 2) {
      return false;
    } else {
      throw new Error('[ERROR] 1 이나 2 를 입력해야합니다.')
    }
  }
}

export default App;
