import { MissionUtils, Console } from "@woowacourse/mission-utils"; // 라이브러리 가져오기

const randomNumber = () => { // 랜덤 숫자 생성
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER; //랜덤으로 만들어진 숫자 리턴
}

class App {
  async play() {
    let secretNumber = randomNumber(); // 랜덤 숫자 생성
    let ball = 0; // 볼 카운트
    let strike = 0; // 스트라이크 카운트
    Console.print("숫자 야구 게임을 시작합니다."); // 시작안내 메시지

    const RETRY = async() => { // 재시작 이벤트
      // 야구 게임 종료 후 재시작 로직 구현
    }

    const BASE_BALL = async()  => { // 야구 게임 이벤트
      const VALUE = await Console.readLineAsync("숫자를 입력해주세요 : ")
      ball = 0;
      strike = 0;

      for(let i = 0; i < secretNumber.length; i++) {
        if(secretNumber[i] === VALUE[i]){ // 스트라이크
          strike++;
        } else if(secretNumber.includes(VALUE[i])) { // 볼
          ball++;
        }
      }

    }
    
    await BASE_BALL(); // 야구게임 실행(랜덤 값)
  }
}

export default App;