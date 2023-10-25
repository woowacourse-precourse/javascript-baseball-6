// 라이브러리 import
import { Console, Random } from "@woowacourse/mission-utils";

// 메인 App 클래스
class App {  
  async play() {  // play 메소드.   async는 비동기 처리를 할 때 await와 함께 쓰인다고 함.

    Console.print("숫자 야구 게임을 시작합니다.");

    // 1~9 사이의 랜덤한 중복되지 않는 3자리 수 뽑기
    const computer_number = [];
    while (computer_number.length < 3) {  // 숫자 세 번 뽑음
      const number = Random.pickNumberInRange(1, 9);  // 1에서 9 사이의 숫자 랜덤 뽑음
      if (!computer_number.includes(number)) {  // 이미 있는 숫자가 아니면 저장
        computer_number.push(number);
      }
    }

    const isClear = false;

    Console.print("답 : " + computer_number);

    while (!isClear) {  // 게임이 클리어되지 않은 경우, 세 자리 숫자 입력 받고 검증을 반복.
      let userInputNumber = await getUserInputNumber("숫자를 입력해주세요 : ");

      if(!isUserInputNumberValid(userInputNumber)) {  // 올바른 3자리수 입력인지 검증.
        throw new Error("[ERROR] 1~9 사이의 숫자로 이루어진 중복되지 않은 세 자리 수를 입력해주세요 !!");
      }

      Console.print("검증 완료 : " + userInputNumber);
    }
  }
}

async function getUserInputNumber(msg) {  // 플레이어로부터 3자리 숫자를 입력받음.
  try {
    const userNumber = await Console.readLineAsync(msg);  // 입력 후 반환
    return userNumber;
  } catch (error) { 
    throw new Error("[ERROR] 잘못 된 형식의 입력입니다 !!");
  }
}

function isUserInputNumberValid(num){  // 입력받은 수가 올바른지 검증.
  if(num.length !== 3)  // 세 자리 수인지 확인
    throw new Error("[ERROR] 세 자리 수를 입력해주세요 !!");
  
  if(Math.sign(num) === -1)  // 음수가 아닌지 확인
    throw new Error("[ERROR] 양수를 입력해주세요 !!");

  const numSet = new Set(num);  // 중복 값 확인을 위해 set으로 변경 후 길이 비교
  if(num.length !== numSet.size) {  // 값이 다르면 중복 값이 있는 것.
    throw new Error("[ERROR] 서로 다른 세 자리 수를 입력해주세요 !!");
  }

  return true;
}

export default App;

// app.play()로 실행
const app = new App();
app.play();