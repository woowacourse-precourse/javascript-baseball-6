import { MissionUtils } from "@woowacourse/mission-utils";
class App {

  async play() {
    function check_input(input) {//input값 유효성 확인
      if (isNaN(input)) {
        throw new Error('[ERROR] 숫자가 아닙니다.')
      }
      if (input.length != 3) {
        throw new Error('[ERROR] 3자리 숫자여야 합니다.')
      }
      if (input.includes("0")) {
        throw new Error('[ERROR] 0이 포함되서는 안됩니다.')
      }
      if (input[0] == input[1] || input[0] == input[2] || input[1] == input[2]) {
        throw new Error('[ERROR] 숫자가 중복되서는 안됩니다.')
      }
    }

    function get_random_number() {//서로 다른 랜덤숫자 3개 
      const COMPUTER = [];
      while (COMPUTER.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(number)) {
          COMPUTER.push(number);
        }
      }
      return COMPUTER
    }

    let computer=get_random_number();//컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택
    let game="running"
    let ball;
    let strike; 

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (game ==="running") {
      MissionUtils.Console.print('숫자를 입력해주세요 : ');

      //사용자 입력 받기, 입력값 유효한지 확인
      const input=await MissionUtils.Console.readLineAsync();
      check_input(input);
      
      //볼, 스트라이크 계산
      ball = 0;
      strike = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (input[i] == computer[j]) {
            if (i == j) { strike += 1 }//스트라이크
            else { ball += 1 }//볼
          }
        }
      }

      //야구 게임 결과 출력
      if (strike == 0 & ball == 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        MissionUtils.Console.print(ball === 0 ? `${strike}스트라이크` : (strike == 0 ? `${ball}볼` : `${ball}볼 ${strike}스트라이크`));
      }
      //3스트라이크 일 때
      if (strike == 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        //입력받기
        game=await MissionUtils.Console.readLineAsync();
        if (!(game === "1" || game === "2")){throw new Error('[ERROR] 1 또는 2를 입력해주세요')};

        if (game === "1"){//새로운 게임을 시작할 때
          computer=get_random_number();
          game="running";
        };
      }
    }
  }
}

export default App;
