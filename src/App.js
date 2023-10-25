import * as MissionUtils from "@woowacourse/mission-utils";

// 3자리의 랜덤 숫자를 생성하는 함수
const create_random_number = () => {
  let number_list = [];
  while (number_list.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9).toString();

    if (!number_list.includes(number)) number_list.push(number);
  }

  return number_list;
};

// 스트라이크 카운트를 계산하는 함수
const get_strike_count = (random_number, user_number) => {
  let count = 0;

  random_number.forEach((number, index) => {
    if (number === user_number[index]) count += 1;
  });

  return count;
};

// 볼 카운트를 계산하는 함수
const get_ball_count = (random_number, user_number) => {
  let count = 0;

  random_number.forEach((number, index) => {
    if (user_number.includes(number) && number !== user_number[index]) count += 1;
  });

  return count;
};

// 사용자 예측 값 입력받기
const get_user_guess = async () => {
  const user_input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

  // 예외 처리 ( 입력한 자리 수가 3자리 수 보다 짧은 경우, 숫자 외에 다른 문자가 입력된 경우 )
  if (user_input == undefined || user_input.length < 3 || Number.isNaN(user_input)) {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }

  // 예외 처리 ( 입력 값에 0이 포함된 경우, 중복된 값이 입력된 경우 )
  const user_input_split = user_input.split("");
  const is_includes_zero = user_input.includes("0");
  const is_all_different_number = user_input_split.every(
    (number) => user_input_split.indexOf(number) === user_input_split.lastIndexOf(number),
  );

  if (!is_includes_zero && is_all_different_number) return user_input;

  if (is_includes_zero) {
    throw new Error("[ERROR] 입력 값에 0이 포함되어 있습니다.");
  } else if (!is_all_different_number) {
    throw new Error("[ERROR] 입력 값에 중복된 값이 있습니다.");
  } else {
    throw new Error("[ERROR] 올바른 형식이 아닙니다.");
  }
};

// 예측 결과 출력
const guess_result = (random_number, user_input) => {
  const strike = get_strike_count(random_number, user_input);
  const ball = get_ball_count(random_number, user_input);

  const strike_count_text = strike ? `${strike}스트라이크` : "";
  const ball_count_text = ball ? `${ball}볼` : "";

  const resuslt_text = ball || strike ? `${ball_count_text} ${strike_count_text}` : "낫싱";

  MissionUtils.Console.print(resuslt_text);

  return strike;
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
      throw new Error("[ERROR] 잘못된 형식입니다.");
    }
  }
};

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 숫자 야구 게임 시작
    while (true) {
      const random_number = create_random_number();

      while (true) {
        const user_input = await get_user_guess();
        const strike_result = guess_result(random_number, user_input);

        if (strike_result === 3) break;
      }

      const end_game = await game_reset_or_end();

      if (end_game) break;
    }
  }
}

export default App;

const app = new App();

app.play();
