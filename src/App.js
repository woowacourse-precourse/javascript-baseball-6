import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 서로 다른 숫자 3자리 랜덤 생성하기
    let finish = false;
    const random_num = [];
    while (random_num.length < 3) {
      if (random_num.length == 0) {
        random_num.push(MissionUtils.Random.pickNumberInRange(1, 9));
      } else {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (random_num.indexOf(num) < 0) {
          random_num.push(num);
        }
      }
    }

    // 게임 시작 문구 출력하기
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // result 스트링 만들어내는 함수
    function judge_num(_strike, _ball) {
      let result = "";
      if (_strike == 0 && _ball == 0) {
        result = "낫싱";
      }
      if (_ball != 0) {
        result = `${_ball}볼 `;
      }
      if (_strike != 0) {
        result += `${_strike}스트라이크`;
      }
      if (_strike == 3) {
        finish = true;
      }
      return result;
    }
    //사용자의 입력 값 받고 판단하는 함수
    async function check_user() {
      let user_num = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      let strike = 0;
      let ball = 0;

      for (let i = 0; i < 3; i++) {
        if (random_num[i] == Number(user_num[i])) {
          strike += 1;
        } else if (random_num.includes(Number(user_num[i]))) {
          ball += 1;
        }
      }
      MissionUtils.Console.print(judge_num(strike, ball));
    }

    // 입력 다시 받을지 끝낼지 결정하는 함수
    function again_or_finish() {
      if (finish == false) {
        check_user().then(() => {
          again_or_finish();
        });
      } else if (finish == true) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    }

    again_or_finish();
  }
}

export default App;
