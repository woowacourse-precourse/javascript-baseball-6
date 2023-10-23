import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game_over = false;
    this.computer = [];
  }

  // 랜덤 숫자 선택
  random_number_pick() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  // 플레이어 인풋 받아오기
  async get_player_input() {
    const user_input = await MissionUtils.Console.readLineAsync(
      "숫자 3개를 입력하세요 (예: 123) :"
    );

    // 인풋의 형식이 숫자 3개가 아닌경우 에러 출력 및 애플리케이션 종료
    if (!/^\d{3}$/.test(user_input) || !this.has_unique_digits(user_input)) {
      this.game_over = true;
      return;
    } else {
      // 유저 인풋을 arr형식으로 반환
      return user_input.split("").map(Number);
    }
  }

  // 3자리 숫자에 중복된 숫자가 있는지 확인
  has_unique_digits(input) {
    const unique_digits = new Set(input);
    return unique_digits.size === 3;
  }

  // 받아온 숫자 확인
  compare_numbers(random_number, player_number) {
    let strike = 0;
    let ball = 0;

    // 스트라이크 & 볼 갯수 확인
    for (let i = 0; i < 3; i++) {
      if (random_number[i] === player_number[i]) {
        strike += 1;
      } else if (random_number.includes(player_number[i])) {
        ball += 1;
      }
    }

    // 결과 초기값 설정
    let result = "";

    // 볼 & 스트라이크 결과 생성
    result = `${ball > 0 ? ball + "볼" : ""} ${
      strike > 0 ? strike + "스트라이크" : ""
    }`;

    // 3스트라이크인 경우
    if (strike === 3) {
      this.game_over = true;
    }

    // 게임 종료 여부 확인
    if (strike === 0 && ball === 0) {
      result = "낫싱";
    }

    // 결과 반환
    return result;
  }

  // 게임 재시작 / 종료 컨트롤
  async restart_game() {
    const user_restart = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (user_restart !== "1" && user_restart !== "2") {
      await MissionUtils.Console.print(
        "[ERROR] 잘못된 입력 형식입니다. 게임을 종료합니다"
      );
      return;
    }
    return user_restart === "1";
  }

  async play() {
    try {
      await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      while (true) {
        this.game_over = false;
        this.computer = [];
        this.random_number_pick();

        while (!this.game_over) {
          const user_input = await this.get_player_input();
          await MissionUtils.Console.print(
            "사용자가 입력한 숫자:" + user_input.join("")
          );
          const result = this.compare_numbers(this.computer, user_input);
          MissionUtils.Console.print(result);
          if (this.game_over === true) {
            MissionUtils.Console.print(
              "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
          }
        }

        if (!(await this.restart_game())) {
          return;
        }
      }
    } catch (error) {
      throw new Error("[ERROR] 잘못된 입력 형식입니다. 게임을 종료합니다");
    }
  }
}

export default App;
