import * as MissionUtils from '@woowacourse/mission-utils';

class App {
  async play() {
    // 게임 시작 문구 출력
    console.log("숫자 야구 게임을 시작합니다.");

    // 게임 반복 여부를 저장할 변수
    let gameOn = true;

    // 게임이 진행되는 동안 반복
    while (gameOn) {
      // 컴퓨터가 랜덤하게 선택한 3개의 숫자를 저장할 배열
      const computer = [];

      // 3개의 숫자를 뽑을 때까지 반복
      while (computer.length < 3) {
        // 1에서 9까지의 임의의 수를 뽑음
        const number = MissionUtils.Random.pickNumberInRange(1, 9);

        // 중복되지 않는 경우에만 배열에 추가
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      // 사용자가 맞춘 횟수를 저장할 변수
      let tries = 0;

      // 정답 여부를 저장할 변수
      let correct = false;

      // 정답을 맞출 때까지 반복
      while (!correct) {
        // 사용자가 입력한 값을 비동기적으로 받음
        const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

        // 입력값이 3자리의 숫자인지 검사
        if (!/^[1-9]{3}$/.test(input)) {
          // 잘못된 값이면 예외 발생시킴
          throw new Error("잘못된 입력값입니다. 1에서 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.");
        }

        // 입력값을 배열로 변환
        const user = input.split("").map(Number);

        // 스트라이크와 볼의 개수를 저장할 변수
        let strike = 0;
        let ball = 0;

        // 컴퓨터와 사용자의 배열을 비교하여 스트라이크와 볼의 개수를 계산
        for (let i = 0; i < 3; i++) {
          if (computer[i] === user[i]) {
            strike++;
          } else if (computer.includes(user[i])) {
            ball++;
          }
        }

        // 결과 문구를 저장할 변수
        let result = "";

        // 스트라이크와 볼의 개수에 따라 결과 문구를 결정
        if (strike === 0 && ball === 0) {
          result = "낫싱";
        } else if (strike === 3) {
          result = "3스트라이크";
          correct = true;
        } else {
          if (strike > 0) {
            result += strike + "스트라이크 ";
          }
          if (ball > 0) {
            result += ball + "볼";
          }
        }

        // 결과 문구 출력
        console.log(result);

        // 시도 횟수 증가
        tries++;
      }

      // 정답을 맞춘 경우 축하 문구 출력
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      // 게임 재시작 여부를 물음
      const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ");

      // 입력값이 2이면 게임 반복을 종료
      if (restart === "2") {
        gameOn = false;
      }
    }
  }
}

export default App;
