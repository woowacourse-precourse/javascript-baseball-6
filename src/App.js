import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameOver = false;
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
    if (!/^\d{3}$/.test(user_input) || !this.hasUniqueDigits(user_input)) {
      throw new Error("[ERROR] 잘못된 입력 형식입니다");
    }
    // 유저 인풋을 arr형식으로 반환
    return user_input.split("").map(Number);
  }

  // 3자리 숫자에 중복된 숫자가 있는지 확인
  hasUniqueDigits(input) {
    const uniqueDigits = new Set(input);
    return uniqueDigits.size === 3;
  }

  // 받아온 숫자 확인
  compare_numbers(random_number, player_number) {
    let strike = 0;
    let ball = 0;

    // 스트라이크 & 볼 갯수 확인
    for (let i = 0; i < 3; i++) {
      if (random_number[i] === player_number[i]) {
        strike++;
      } else if (random_number.includes(player_number[i])) {
        ball++;
      }
    }

    // 결과 초기값 설정
    let result = "";

    // 모두 스트라이크인 경우
    // if (strike === 3) {
    //   this.gameOver = true;
    //   result = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    // } else {
    // 볼 & 스트라이크 결과 생성
    // result = `${ball > 0 ? ball + "볼" : ""} ${
    //   strike > 0 ? strike + "스트라이크" : ""
    // }`;

    // 겹치는 숫자가 없는 경우
    //   if (strike === 0 && ball === 0) {
    //     result = "낫싱";
    //   }
    // }

    // 3스트라이크도 출력

    // 볼 & 스트라이크 결과 생성
    // 볼 & 스트라이크 결과 생성
    result = `${ball > 0 ? ball + "볼" : ""} ${
      strike > 0 ? strike + "스트라이크" : ""
    }`;

    // 3스트라이크인 경우
    if (strike === 3) {
      result = "3스트라이크";
    }

    // 게임 종료 여부 확인
    if (strike === 3) {
      this.gameOver = true;
      result += " 3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    } else if (strike === 0 && ball === 0) {
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
    return user_restart === "1";
  }

  async play() {
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // true상태이면 계속해서 게임 실행
    while (true) {
      this.gameOver = false;
      this.computer = [];
      this.random_number_pick();
      // await MissionUtils.Console.print(
      //   `랜덤으로 선택된 숫자 ${this.computer.join("")}`
      // );

      // 3스트라이크가 나올때까지 실행
      while (!this.gameOver) {
        let user_input_arr;
        try {
          user_input_arr = await this.get_player_input();
          await MissionUtils.Console.print(
            "사용자가 입력한 숫자:" + user_input_arr.join("")
          );
        } catch (error) {
          await MissionUtils.Console.print(error.message);
        }
        await MissionUtils.Console.print(
          this.compare_numbers(this.computer, user_input_arr)
        );
      }
      if (!(await this.restart_game())) {
        return;
      }
    }
  }
}

export default App;
