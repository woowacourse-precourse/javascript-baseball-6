import * as MissionUtils from "@woowacourse/mission-utils";

// 3자리의 랜덤 숫자를 생성하는 함수
const create_random_number = () => {
  let number_list = "";
  while (number_list.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    number_list += number.toString();
  }

  return number_list;
};

// 스트라이크 카운트를 계산하는 함수
const get_strike_count = (string_number, target_number) => {
  let count = 0;

  string_number.split("").forEach((number, index) => {
    if (number === target_number[index]) count += 1;
  });

  return count;
};

// 볼 카운트를 계산하는 함수
const get_ball_count = (string_number, target_number) => {
  let count = 0;

  string_number.split("").forEach((number, index) => {
    if (target_number.includes(number) && number !== target_number[index]) count += 1;
  });

  return count;
};

// 사용자 입력 값에 따른 게임 종료 또는 재시작 ( '1' === 재시작 / '2' === 종료 )
const game_reset_or_end = async () => {
  MissionUtils.Console.print("3개의 숫자를 모두 맞추셨습니다! 게임 종료");
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");

  while (true) {
    const user_input = await MissionUtils.Console.readLineAsync("");

    if (user_input === "1") {
      return false;
    } else if (user_input === "2") {
      return true;
    } else {
      MissionUtils.Console.print("[ERROR] 잘못된 형식입니다.");
    }
  }
};

class App {
  async play() {}
}

export default App;
