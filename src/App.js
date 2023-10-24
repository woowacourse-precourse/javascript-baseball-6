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
      const SELECT = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
      if(SELECT == "1"){
        secretNumber = randomNumber(); // 새로운 랜덤 숫자 생성
        BASEBALL_GAME();
      } else if(SELECT == "2"){
       Console.print("게임을 종료합니다.");
      } else{
       Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
       RETRY(); // 1과 2를 제외한 숫자를 입력한 경우
      }
    }

    const BASEBALL_GAME = async()  => { // 야구 게임 이벤트
      const VALUE = await Console.readLineAsync("숫자를 입력해주세요 : ")
      ball = 0;
      strike = 0;

      if(!isNaN(Number(VALUE)) && VALUE.length === 3){ // 3자리 숫자의 값을 입력한 경우
        let myValue = VALUE.split("").map(Number); // 입력값 숫자 배열로 변경

        for(let i = 0; i < secretNumber.length; i++) {
          if(secretNumber[i] === myValue[i]){ // 스트라이크
            strike++;
          } else if(secretNumber.includes(myValue[i])) { // 볼
            ball++;
          }
        }

        if(strike === 3){ // 세자리 모두 맞춘 경우
         Console.print(`${strike}스트라이크`);
         Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
         RETRY();
        } else if(strike === 0 && ball === 0) { // 아무것도 맞추지 못한 경우
         Console.print("낫싱");
         BASEBALL_GAME();
        } else if(strike === 0){ // 볼만 맞춘 경우
         Console.print(`${ball}볼`);
         BASEBALL_GAME();
        } else if(ball === 0){ // 스트라이크만 맞춘 경우
         Console.print(`${strike}스트라이크`);
         BASEBALL_GAME();
        } else{ // 볼, 스트라이크 모두 포함된 경우
         Console.print(`${ball}볼 ${strike}스트라이크`);
         BASEBALL_GAME();
        }
      } else{ // 잘못된 값을 입력한 경우
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    
    await BASEBALL_GAME(); // 야구게임 실행(랜덤 값)
  }
}

export default App;