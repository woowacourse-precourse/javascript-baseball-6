import { Random, Console } from "@woowacourse/mission-utils";

//클래스 정의
class App {
  async play() {
    playGame()
    while(true){
    
      let computer = initializeComputer();

      while (true) {
        getAndValidateUserInput(getUserInput());
      
        const result = checkGuess(computer, userNumber);
        Console.print(result);

        if (result.includes("3스트라이크")) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }
      const playAgain = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      
      if(playAgain === '1'){
        continue;
      }
      else if (playAgain === '2') {
        Console.print("게임 종료");
        return;
      }
      else{
        throw new Error(`[ERROR] 1 또는 2를 입력하세요`);
      }
    }
  }
}
  //숫자야구 시작
function playGame() {
  Console.print('숫자 야구 게임을 시작합니다.');
  }

  //컴퓨터가 1~9 사이 임의의 수 3개를 선택
  function initializeComputer() {
    const computer = [];
    while (computer.length < 3) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  
  // 사용자에게 입력값 받기
  async function getUserInput() {
    while (true) {
      const userNumber = [];
      const number = String(await Console.readLineAsync("숫자를 입력해주세요 : "));
      userNumber.push(number);
      return userNumber;
    }
  }
  

  //입력값과 정답값 비교하여 ball/strike 반환 / 낫싱 반환
  function checkGuess(computer, userGuess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        if (userGuess[i] === computer[i]) {
            strikes++;
        } else if (computer.includes(userGuess[i])) {
            balls++;
        }
        if (balls > 0) {
          result.push(`${balls}볼 `);
      }
  
      if (strikes > 0) {
          result.push(`${strikes}스트라이크`);
      }

      if (strikes === 0 && balls === 0) {
        Console.print('낫싱');
    }
    if (strikes === 3) {
      Console.print(`3스트라이크\n`); // 3개를 다 맞췄을 때 
    }   
  }
    return result.join(' ');
  }
    
function getAndValidateUserInput(inputNumber) {
  const ANSWER_LENGTH = 3;
  const NUMBER_RANGE = /^[1-9]+$/;

  if (inputNumber.length !== ANSWER_LENGTH) {
    throw new Error("[ERROR] 3자리 숫자를 입력해야 합니다.");
  }

  if (new Set(inputNumber).size !== ANSWER_LENGTH) {
    throw new Error(`[ERROR] 서로 다른 숫자를 입력해야 합니다.`);
  }

  if (!NUMBER_RANGE.test(inputNumber)) {
    throw new Error(`[ERROR] 1부터 9까지의 숫자만 입력해야 합니다.`);
  }

}

const app = new App();
app.play();